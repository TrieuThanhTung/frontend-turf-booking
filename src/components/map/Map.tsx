import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet'
import { useEffect, useState } from 'react';
import ServiceApi from '../../api/ServiceApi';
import { LocationType, OverpassType } from './data/Util';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from "leaflet";

import { icon } from "./data/Icon";
import { routex } from './data/routex';

type MapProps = {
  filter?: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  centerLocation: LocationType;
  turfLocation?: LocationType;
  styleMap?: React.CSSProperties | undefined
};

type ResetCenterViewType = {
  centerLocation: LocationType,
}

const ResetCenterView: React.FC<ResetCenterViewType> = ({centerLocation}) => {
  const map = useMap();

  useEffect(() => {
    if (centerLocation) {
      map.setView(
        L.latLng(centerLocation?.lat, centerLocation?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [centerLocation]);

  return null;
}

const Map: React.FC<MapProps> = ({ filter, centerLocation, turfLocation, styleMap }) => {

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  }>({
    lat: 21.0245,
    lon: 105.84117,
  });

  const [data, setData] = useState<OverpassType>();
  const fetch = async () => {
    try {
      if (filter === "") {
        setData(undefined);
        return;
      }
      if (!userLocation.lat && !userLocation.lon) {
        return;
      }
      if (userLocation.lat === 21.0245) return;
      if (filter === "cuisine") {
        const res = await ServiceApi.getRestaurants(
          userLocation.lat,
          userLocation.lon
        );
        setData(res.data);
      }
      if (filter === "entertainment") {
        const res = await ServiceApi.getLeisureService(
          userLocation.lat,
          userLocation.lon
        );
        setData(res.data);
      }
      if (filter === "shopping") {
        const res = await ServiceApi.getShop(
          userLocation.lat,
          userLocation.lon
        );
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [userLocation, filter]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  const limeOptions = { color: 'lime' }

  const polygon = [
    [ 105.793708, 21.024475],
    [36.460353, 126.440674],
    [ 106.793641, 21.034314 ],
    [55.410343, 37.902312], //to rus
  ]

  // const pos = [
  //   [36.460353, 126.440674],
  //   [34.789594, 135.438084], //to jpn
  //   [36.460353, 126.440674],
  //   [55.410343, 37.902312], //to rus
  //   [36.460353, 126.440674],
  //   [40.085148, 116.552407] //to chi
  // ];
  

  return (
    <MapContainer
      style={styleMap}
      center={[userLocation.lat, userLocation.lon]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tmdt.fimo.edu.vn/hot/{z}/{x}/{y}.png"
      />
      {centerLocation.lat !== 21.0245 && <Marker
        position={[centerLocation.lat, centerLocation.lon]}
        icon={icon.searchLocationIcon}
      >
        <Popup>Point</Popup>
      </Marker>}
      <Marker
        position={[userLocation.lat, userLocation.lon]}
        icon={icon.userLocationIcon}
      >
        <Popup>Your location</Popup>
      </Marker>
      { turfLocation && <Marker
        position={[turfLocation?.lat, turfLocation?.lon]}
        icon={icon.searchLocationIcon}
      >
        <Popup>Turf location</Popup>
      </Marker> }
      {/* <Polyline pathOptions={limeOptions} positions={pos} /> */}
      <Polyline pathOptions={limeOptions} positions={polygon} />
      <MarkerClusterGroup>
        {data?.elements.map((ele, index) => {
          const lat = ele.lat!;
          const lon = ele.lon!;
          if (lat && lon) {
            switch (filter) {
              case "cuisine":
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={icon.restaurantIcon}
                  >
                    <Popup>{ele?.tags?.name}</Popup>
                  </Marker>
                );
              case "entertainment":
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={icon.entertainmentIcon}
                  >
                    <Popup>{ele?.tags?.name}</Popup>
                  </Marker>
                );
              case "shopping":
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={icon.shoppingIcon}
                  >
                    <Popup>{ele?.tags?.name}</Popup>
                  </Marker>
                );
            }
          }
        })}
      </MarkerClusterGroup>
      {turfLocation && <ResetCenterView centerLocation={turfLocation}/>}
    </MapContainer>
  );
};

export default Map;

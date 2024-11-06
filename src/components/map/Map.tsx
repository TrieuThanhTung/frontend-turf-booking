  import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet'
import { useEffect } from 'react';
import { LocationType, RoutingType } from './data/Util';
import L from "leaflet";

import { icon } from "./data/Icon";
import { routex } from './data/routex';

type MapProps = {
  filter?: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  centerLocation: LocationType;
  turfLocation?: LocationType;
  userLocation?: LocationType;
  routing?: RoutingType;
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

const Map: React.FC<MapProps> = ({centerLocation, turfLocation, styleMap, userLocation, routing}) => {

  const routingData = routing?.paths[0].points.coordinates.map((point) => [point[1], point[0]]);
  return (
    <MapContainer
      style={styleMap}
      center={[centerLocation.lat, centerLocation.lon]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tmdt.fimo.edu.vn/hot/{z}/{x}/{y}.png"
      />
      {userLocation && <Marker
        position={[userLocation.lat, userLocation.lon]}
        icon={icon.userLocationIcon}
      >
        <Popup>Your location</Popup>
      </Marker>}
      { turfLocation && <Marker
        position={[turfLocation?.lat, turfLocation?.lon]}
        icon={icon.searchLocationIcon}
      >
        <Popup>Turf location</Popup>
      </Marker> }
      {routing && <Polyline color='blue' positions={routingData} />}
      {turfLocation && <ResetCenterView centerLocation={turfLocation}/>}
    </MapContainer>
  );
};

export default Map;

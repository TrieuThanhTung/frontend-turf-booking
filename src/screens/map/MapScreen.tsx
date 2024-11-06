import './Map.css'
import Map from '../../components/map/Map';
import { useEffect, useState } from 'react';
import { LocationType, RoutingType } from '../../components/map/data/Util';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

function MapScreen() {
  const [searchParams] = useSearchParams();

  const [turfLocation, setTurfLocation] = useState<LocationType>()

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  }>({
    lat: 21.0245,
    lon: 105.84117,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);

  const [routingData, setRoutingData] = useState<RoutingType>()

  const fetchRoutingData = async () => {
    if (!userLocation || !turfLocation) return;
    try {
      const res = await axios.post('https://graphhopper.com/api/1/route?key=a4456bf0-1842-43cf-be64-62325c46bfdd', {
        "points": [
          [
            userLocation.lon,
            userLocation.lat
          ],
          [
            turfLocation?.lon,
            turfLocation?.lat
          ]
        ],
        "profile": "car",
        "instructions": true,
        "locale": "vi_VN",
        "points_encoded": false,
        "details": [
          "road_environment",
          "country"
        ],
        "snap_preventions": [
          "ferry"
        ]
      });
      setRoutingData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRoutingData();
  }, [userLocation, turfLocation])

  useEffect(() => {
    if (searchParams.get('turf_lat') !== null && searchParams.get('turf_lon') !== null) {
      setTurfLocation({
        lat: Number.parseFloat(searchParams.get('turf_lat')!),
        lon: Number.parseFloat(searchParams.get('turf_lon')!)
      })
    }
  }, [searchParams])

  const styleMap: React.CSSProperties | undefined = {
    height: '90vh',
    width: '100%',
    zIndex: 1
  }

  return (
    <>
      <Map
        turfLocation={turfLocation}
        styleMap={styleMap}
        centerLocation={userLocation}
        userLocation={userLocation}
        routing={routingData}
      />
    </>
  )
}

export default MapScreen

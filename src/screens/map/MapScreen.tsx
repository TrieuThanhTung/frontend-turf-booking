import './Map.css'
import Map from '../../components/map/Map';
import Filter from '../../components/map/Filter/Filter';
import { useEffect, useState } from 'react';
import { LocationType } from '../../components/map/data/Util';
import { useSearchParams } from "react-router-dom";

function MapScreen() {
  const [searchParams] = useSearchParams();
  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 21.0245,
    lon: 105.84117
  })

  const [turfLocation, setTurfLocation] = useState<LocationType>()

  useEffect(() => {
    if (searchParams.get('turf_lat') !== null && searchParams.get('turf_lon') !== null) {
      setTurfLocation({
        lat: Number.parseFloat(searchParams.get('turf_lat')!),
        lon: Number.parseFloat(searchParams.get('turf_lon')!)
      })
    }
  }, [searchParams])

  const styleMap: React.CSSProperties | undefined = {
    height: '100vh',
    width: '100%',
    zIndex: 1
  }

  return (
    <>
      <Map
        turfLocation={turfLocation}
        styleMap={styleMap}
        centerLocation={centerLocation}
      />
    </>
  )
}

export default MapScreen

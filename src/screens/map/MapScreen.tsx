import './Map.css'
import Map from '../../components/map/Map';
import Filter from '../../components/map/Filter/Filter';
import { useState } from 'react';
import { LocationType, PlaceType } from '../../components/map/data/Util';

function MapScreen() {
  // const [filter, setFilter] = useState('')
  // const [dataSearch, setDataSearch] = useState<PlaceType[]>()
  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 21.0245,
    lon: 105.84117
  })

  return (
    <>
      <Map
        // filter={filter}
        centerLocation={centerLocation}
      />
    </>
  )
}

export default MapScreen

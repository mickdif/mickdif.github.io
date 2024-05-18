import { useState } from 'react'

import VisitedList from './components/VisitedList'
import Map from './components/Map'

function Home() {
  const [places, setPlaces] = useState([])
  const addPlace = (place) => { setPlaces([...places, place]) }
  const removePlace = (toBeRemoved) => {
    setPlaces(places.filter((place) => place != toBeRemoved))
  }

  return (
    <>
      <div className='grid grid-cols-3 gap-10'>
        <span className="col-span-2">
          <Map placesList={places} addPlace={addPlace} removePlace={removePlace} />
        </span>
        <VisitedList placesList={places} removePlace={removePlace} />
      </div>
    </>
  )
}

export default Home

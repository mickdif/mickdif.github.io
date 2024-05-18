import React from 'react';
import * as RL from 'react-leaflet';

function Marker({ place, removePlace, addPlace }) {
    const lat = place.coordinates[0]
    const lng = place.coordinates[1]
    const handleClickRemove = () => {
        removePlace(place);
    };
    const handleClickVisited = () => {
        addPlace(place);
    };
    
    return (
        
        <RL.Marker title={place.name} position={place.coordinates}>
            <RL.Popup>
                <div className='text-center size-auto'>
                    <h1>{place.name}</h1>
                    <p>lat: {lat} - lng: {lng}</p>
                    {removePlace && <button onClick={handleClickRemove} className="bg-red-600 font-semibold">Remove</button>}
                    {addPlace && <button onClick={handleClickVisited} className="bg-emerald-600 font-semibold">Visited!</button>}
                </div>
            </RL.Popup>
        </RL.Marker>
    )
}
export default Marker;

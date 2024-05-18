import React from "react";
import { useState } from "react";
import * as L from "react-leaflet"
import "leaflet/dist/leaflet.css";
import Marker from "./Marker";

function LocationMarker({ addPlace }) {
    const [newPlace, setNewPlace] = useState(null);
    L.useMapEvents({
        click(e) {
            let url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + e.latlng.lat + '&lon=' + e.latlng.lng;
            // https://nominatim.openstreetmap.org/reverse?format=json&lat=40.39&lon=-3.69

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let placeName = ""
                    if (data.address.village != undefined)
                        placeName += data.address.village + ", "
                    else if (data.address.city != undefined)
                        placeName += data.address.city + ", "
                    else if (data.address.town != undefined)
                        placeName += data.address.town + ", "


                    if (data.address.state != undefined)
                        placeName += data.address.state + ", "
                    else if (data.address.county != undefined)
                        placeName += data.address.county + ", "

                    if (data.address.country != undefined)
                        placeName += data.address.country;

                    setNewPlace({
                        name: placeName,
                        coordinates: [e.latlng.lat, e.latlng.lng],
                    })
                })
                .catch(error => {
                    console.error('LocationMarker: error fetching data:', error);
                });
        },
    })

    return newPlace === null ? null : (
        <Marker place={newPlace} addPlace={addPlace} />
    )
}
export default LocationMarker
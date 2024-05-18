import React from "react";
import * as RL from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marker from "./Marker";
import LocationMarker from "./LocationMarker";

function Mappa({ placesList, addPlace, removePlace }) {
    const latitude = 45;
    const longitude = 45;
    localStorage.setItem("myCat", "Tom");
    return (
        <RL.MapContainer center={[latitude, longitude]} zoom={5} style={{ height: "100vh", width: "100%" }}>
            <RL.TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker addPlace={addPlace} />
            <div>{console.log(placesList)}
                {placesList.map((place) => (
                    <Marker place={place} removePlace={removePlace} />
                ))}
            </div>
        </RL.MapContainer>
    );
}

export default Mappa;
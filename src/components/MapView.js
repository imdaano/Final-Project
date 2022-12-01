import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import places from "../assets/data.json";
import { useLocation } from "react-router-dom";

const MapView = () => {
  const [state, setState] = useState({
    currentLocation: { lat: "40.41696076697521", lng: "-3.703221486547788" }, // punto fijo al recargar
    zoom: 13,  // zoom del mapa
  });

  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if(location.state.latitude && location.state.longitude){
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude
      }
      setState({...state, currentLocation})
      
    }

  }, [])

  return (
    <MapContainer
      center={state.currentLocation}
      zoom={
        state.zoom
      } /* center={{lat: '40.41696076697521', lng: '-3.703221486547788'}} zoom={12}*/
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" // openstreetmap nos proporciona el mapa
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors`} // agradecimiento
      />
      {/* hacer map */}
      {places.map((place, i) => {
        return <Markers place={place} key={i} />;
      })}
    </MapContainer>
  );
};

export default MapView;

// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();


//instalar react router
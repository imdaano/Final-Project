import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { getCheckpoints } from "../redux/checkpoint/checkpoint.functions";
import { useDispatch, useSelector } from "react-redux";

const MapView = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const { checkpoints } = useSelector((state) => state.checkpoints);

  useEffect(() => {
    dispatch (getCheckpoints())
    
    
    navigator.geolocation.getCurrentPosition(
      // objeto que nos da el navegador para acceder a métodos relacionados con el propio navegador (posicion, etc..)
      function (position) {
        //funcion para posicion OK
        setState({
          
            location: { coordinates:[ position.coords.latitude, position.coords.longitude] }, // punto fijo al recargar
            zoom: 13,  // zoom del mapa
          
        });
      },
      )

  }, [])

  return (
    <>{state && <MapContainer
      center={state.location.coordinates}
      zoom={
        state.zoom
      } /* center={{lat: '40.41696076697521', lng: '-3.703221486547788'}} zoom={12}*/
    >{console.log(state)}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" // openstreetmap nos proporciona el mapa
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors`} // agradecimiento
      />
      {console.log(checkpoints)};
      {checkpoints && checkpoints.map((checkpoint, i) => {
        return <Markers place={checkpoint} key={i} />;
      })}
      {state && <Markers place={state}/>}
    </MapContainer>}
    </>
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
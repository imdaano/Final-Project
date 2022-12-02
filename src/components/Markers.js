import React from "react";
import { Marker } from "react-leaflet";
import IconLocation from "./IconLocation";

const Markers = ({ place }) => {
  return (
    <Marker
      key={JSON.stringify(place)}
      position={place.location.coordinates}
      icon={IconLocation}
    />
  );
};

export default Markers;

// llega 1 lugar y pinta 1 marcador sucesivamente

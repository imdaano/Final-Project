import L from "leaflet";

const IconLocation = L.icon({
  iconUrl: require("../assets/icon2.png"),  // dibujo que queremos usar 
  iconRetinaUrl: require("../assets/icon2.png"), // 
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35], // px
  className: "IconLocation",
});

export default IconLocation;
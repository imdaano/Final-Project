// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Map = () => {
//   const [state, setState] = useState({
//     longitude: 0,
//     latitude: 0,
//   });

//   //getCurrentPosition = obtener posición actual
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       // objeto que nos da el navegador para acceder a métodos relacionados con el propio navegador (posicion, etc..)
//       function (position) {
//         //funcion para posicion OK
//         setState({
//           longitude: position.coords.longitude,
//           latitude: position.coords.latitude,
//         });
//       },
//       function (error) {
//         // función por si da error
//         console.log(error);
//       },
//       {
//         enableHighAccuracy: true, // funcion para que cada vez que pueda, obtiene la info a través del GPS
//       }
//     );
//   });

//   return (
//     <div>
//       <h1>Geolocation</h1>
//       <p>longitude: {state.longitude} </p>
//       <p>latitude: {state.latitude} </p>

//       <Link to="/map" state={state}>
//         See my location
//       </Link>
//     </div>
//   );
// };

// export default Map;

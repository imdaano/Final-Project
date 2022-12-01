import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MapView from "./components/MapView";
import Checkpoints from "./pages/Checkpoints";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/map' element={<MapView />}/>
        <Route path='/checkpoints' element={<Checkpoints />}/>
      </Routes>
    </div>
  );
}

export default App;

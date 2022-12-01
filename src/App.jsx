import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MapView from "./components/MapView";
import Checkpoints from "./pages/Checkpoints";
import Home from "./pages/Home";
import CheckpointDetails from "./pages/CheckpointDetails";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import NewBook from "./pages/NewBook";
import NewCheckpoint from "./pages/NewCheckpoint";
import Register from "./pages/Register";
import BookInfo from "./pages/BookInfo";
import Books from "./pages/Books";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/map' element={<MapView />}/>
        <Route path='/checkpoints' element={<Checkpoints />}/>
        <Route path='/checkpointDetails' element={<CheckpointDetails />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/myAccount' element={<MyAccount />}/>
        <Route path='/newBook' element={<NewBook />}/>
        <Route path='/myAccount' element={<NewCheckpoint />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/bookInfo' element={<BookInfo />}/>
        <Route path='/books' element={<Books />}/>
      </Routes>
    </div>
  );
}

export default App;

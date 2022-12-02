
import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MapView from "./components/MapView";
import Checkpoints from "./pages/Checkpoints";
import Home from "./pages/Home";
// import CheckpointDetails from "./pages/CheckpointDetails";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import NewBook from "./pages/NewBook";
import NewCheckpoint from "./pages/NewCheckpoint";
import Register from "./pages/Register";
import BookInfo from "./pages/BookInfo";
import Books from "./pages/Books";
// import Navbar from "./components/Navbar";
import Map from "./components/Map";


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path="/coords" element={<Map />}/> */}
        <Route path='/map' element={<MapView />} />
        <Route path='/checkpoints' element={<Checkpoints />} />
        {/* <Route path='/checkpoints/:name' element={<CheckpointDetails />} /> */}
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myAccount' element={<MyAccount />} />
        <Route path='/myAccount' element={<NewCheckpoint />} />
        <Route path='/register' element={<Register />} />
        <Route path='/books' element={<Books />} />
        <Route path='/bookInfo' element={<BookInfo />} />
        <Route path='/newBook' element={<NewBook />} />
        <Route path="/editBook" element={<EditBook />}/>
        <Route path="/deleteBook" element={<DeleteBook />}/>
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;

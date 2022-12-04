import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavUser from "./components/NavUser";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Checkpoints from "./pages/Checkpoints";
import CheckpointDetails from "./pages/CheckpointDetails";
import Create from "./pages/Create";
import NewBook from "./pages/NewBook";
import EditBook from "./pages/EditBook";
import NewCheckpoint from "./pages/NewCheckpoint";
import EditCheckpoint from "./pages/EditCheckpoint";
import MapView from "./components/MapView";
import Favorites from "./pages/Favorites";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <NavUser />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkpoints" element={<Checkpoints />} />
          <Route path="/checkpoints/:name" element={<CheckpointDetails />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:title" element={<BookInfo />} />
          <Route path="/create" element={<Create />} />
          <Route path="/newBook" element={<NewBook />} />
          <Route path="/editBook" element={<EditBook />} />
          <Route path="/newCheckpoint" element={<NewCheckpoint />} />
          <Route path="/editCheckpoint" element={<EditCheckpoint />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/myAccount" element={<MyAccount />} />
        </Routes>
      </main>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
}

export default App;

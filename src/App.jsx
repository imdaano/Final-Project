import "./App.scss";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import TermsUse from "./pages/TermsUse";
import { useDispatch } from "react-redux";
import { checkSession } from "./redux/auth/auth.functions";
import AuthRoute from "./components/AuthRoute"

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    dispatch(checkSession(token, navigate))
  }, []);

  return (
    <div className="app">
      <div className="bg-overlay"></div>
      <NavUser />
      <main className="app--main">
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
          <Route path="/termsUse" element={<TermsUse />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/myAccount" element={<AuthRoute component ={<MyAccount />}/>} />
        </Routes>
      </main>
      <Navbar />
    </div>
  );
}

export default App;

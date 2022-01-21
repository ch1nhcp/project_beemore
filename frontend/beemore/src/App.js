import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import SettingProfile from "./pages/SettingProfile/settingProfile";

import { ContextProvider, Context } from "./context/Context";

import { Routes, Route } from "react-router-dom";
import React, { useContext, useState, useReducer } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/user" element={user ? <Profile /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={user ? <CreatePost /> : <Login />} />

        <Route path="/post/:postId" element={<PostDetail />} />
        <Route
          path="/settings"
          element={user ? <SettingProfile></SettingProfile> : <Login />}
        ></Route>

        <Route
          path="/user/:userId"
          element={user ? <Profile /> : <Login></Login>}
        />

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

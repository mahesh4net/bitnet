import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./component/profile";
import Dashboard from "./pages/dashboard";
import Analytics from "./component/analytics";
import Shortlink from "./component/shortlink";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import "./index.css";
import Header from "./component/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="shortlink" element={<Shortlink />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

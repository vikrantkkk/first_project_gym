import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Classes from "./pages/Class/Classes";
import Blogs from "./pages/Blog/Blogs";
import LoginPage from "./pages/Auth/Login/LoginPage";
import RegistrationPage from "./pages/Auth/Register/RegistrationPage";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

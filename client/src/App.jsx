import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./pages/Menu";
import Landing from "./pages/Landing";
import Footer from "./pages/Footer";
import AboutPage from "./pages/AboutPage";
import Service from "./pages/Service";
import Fleet from "./pages/Fleet";
import PortFolio from "./pages/PortFolio";
import Contactus from "./pages/Contactus";
import HSE from "./pages/HSE";
import ESE from "./pages/ESE";
import REP from "./pages/REP";
import DS from "./pages/DS";
import SRP from "./pages/SRP";

// import lvideo from "./assets/landingVideo.mov";
// import lvideo from './videos/LandingVideoTrimmed.mp4'
import lvideo from "./videos/LandingVideoTrimmed.mp4";
import "./App.css";

const App = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <Menu />

      {isLandingPage && (
        <div className="hero-video-container  w-screen ">
          <video
            src="https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4"
            autoPlay
            loop
            playsInline
          />
          {/* <video
  src="https://www.dropbox.com/scl/fi/zaa7la43gnisr3qhyuzto/landingVideo.MOV?rlkey=rj9jrqt1jifxyxvml8fcwmx8i&raw=1"
  autoPlay
  loop
  muted
  playsInline
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/> */}
        </div>
      )}

      {/* FIX → Add margin only for landing, top padding for other pages */}
      <div
        className="w-screen"
        style={{ marginTop: isLandingPage ? "100vh" : "9vh" }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/excavators-dumpers-on-hire" element={<Service />} />
          <Route path="/our-fleet-2" element={<Fleet />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/gallery" element={<PortFolio />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/hse" element={<HSE />} />
          <Route path="/ese" element={<ESE />} />
          <Route path="/rep" element={<REP />} />
          <Route path="/ds" element={<DS />} />
          <Route path="/srp" element={<SRP />} />
          <Route path="/services/mass-earth-excavation-2" element={<ESE />} />
          <Route path="/services/mass-rock-excavation" element={<REP />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;

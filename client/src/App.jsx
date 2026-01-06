import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from "./pages/Menu";
import Landing from "./pages/Landing";
import Footer from "./pages/Footer";
import FooterNew from "./pages/FooterNew";
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
import ScrollToHash from "./pages/ScrollToHash ";
import WhatsAppFloat from "./pages/WhatsAppFloat ";
import PageLoader from "./pages/PageLoader ";
import { ChevronDown } from "lucide-react";

// import lvideo from "./assets/landingVideo.mov";
// import lvideo from './videos/LandingVideoTrimmed.mp4'
// import lvideo from "/LandingVideoTrimmed.mp4";
import lvideo from "../src/videos/LandingVideoTrimmed.mp4";
import "./App.css";
import SectionWrapper from "./component/common/SectionWrapper";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

   const location = useLocation();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const maxScroll = vh * 2;
      const p = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



 

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 740) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    setIsPageLoading(true);

    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600); // adjust time if needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

    if (!mounted) return null;

 

  const isLandingPage = location.pathname === "/";
   const showArrow = progress < 0.2;
  const overlayOpacity = progress * 1;
  // const isfleet = location.pathname === "/our-fleet-2";

  return (
    <>
    
      <div className="w-full">
        {/* {isPageLoading && <PageLoader />} */}
        <ScrollToHash />
        <Menu />
        {isLandingPage && (
          <div className="hero-video-container  w-full ">
            <video
              // src="https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4"
              src="https://res.cloudinary.com/dtculdtll/video/upload/LandingVideoTrimmed_yj2zr6.mp4"
              // src={lvideo}
              autoPlay
              loop
              muted
              playsInline
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
            />

            <div
              className={`
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-2
            text-background
            transition-all duration-300
            ${
              showArrow
                ? "opacity-80 translate-y-0 animate-bounce"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
          `}
            >
              <span className="text-sm tracking-wide font-semibold">
                Scroll Down
              </span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        )}

        {/* {isfleet && (
        <div className="hero-video-container  w-screen ">
          <video
            src="https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )} */}

        {/* FIX → Add margin only for landing, top padding for other pages */}
        <div
          className="w-full overflow-x-hidden"
          style={{ marginTop: isLandingPage ? "100vh" : "7vh" }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<Service />} />
            <Route
              path="/services/excavators-dumpers-on-hire"
              element={<Service />}
            />
            <Route path="/our-fleet-2" element={<Fleet />} />
            <Route path="/portfolio" element={<PortFolio />} />
            {/* <Route path="/gallery" element={<PortFolio />} /> */}
            <Route
              path="/gallery"
              element={<Navigate to="/portfolio#gallery" replace />}
            />
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
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default App;

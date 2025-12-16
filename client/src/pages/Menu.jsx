import React from "react";
import svbLogo from "../assets/SVB_Logo.png";
import "../App.css";
import "../CSS/Menu.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isColored, setIsColored] = useState(false);

  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  

  useEffect(() => {
    if (!isLandingPage) {
      setShowMenu(true); // always show menu on other pages
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  useEffect(() => {
    if (!isLandingPage) {
      setIsColored(true); // always colored on other pages
      return;
    }

    const section = document.getElementById("secondSection");

    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100) {
        setIsColored(true);
      } else {
        setIsColored(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);
  

  // const handleResize = () => {
  //   const width = window.innerWidth;

  //   if (width < 740) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  // useEffect(() => {
  //   handleResize(); // Run once when mounted
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 739px)");

  const handleChange = (e) => {
    setIsMobile(e.matches);
  };

  // Run once on mount
  setIsMobile(mediaQuery.matches);

  mediaQuery.addEventListener("change", handleChange);

  return () => mediaQuery.removeEventListener("change", handleChange);
}, []);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popup) {
        // if click is NOT inside popup and NOT on hamburger icon
        if (
          !e.target.closest("#mobilePopup") &&
          !e.target.closest("#hamburgerIcon")
        ) {
          setPopup(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [popup]);

  return (
    <>
      <div
        className={`
    fixed top-0 left-0  [@media(min-width:650px)_and_(max-width:1200px)]:h-[15vh] w-full flex px-5 md:px-6 justify-between 
    h-[9vh] lg:h-[13vh] xl:h-[13vh] place-items-center lg:px-30 
    transition-all duration-500 z-[999]
    ${isColored ? "bg-[#333333]" : "bg-transparent"}
  `}
      >
        <div className="">
          <Link to="/">
            <img
              src={svbLogo}
              className="w-[15vw] h-[3.3vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[7.3vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[7vw] lg:w-[8vw] xl:w-[8vw] xl:h-[7vh] lg:h-[7vh]"
            />
          </Link>
        </div>
        {popup && (
          <div
            id="mobilePopup"
            className="absolute right-5 top-[90px] w-[60vw] h-fit 
  border border-white/20 
  rounded-xl 
  bg-white/40 
  backdrop-blur-sm 
  shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
  flex flex-col 
  z-[999]"
          >
            <nav
              id="menuNav"
              className="flex flex-col text-[1.6rem]   gap-5 h-fit list-none text-black z-[1000] p-4"
            >
              {[
                { name: "About Us", link: "/about-us" },
                { name: "Service", link: "/services" },
                { name: "Our Fleet", link: "/our-fleet-2" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "HSE", link: "/hse" },
              ].map((item) => (
                <li key={item.link} className=" relative group">
                  <Link
                    to={item.link}
                    onClick={() => setPopup(!popup)}
                    className=" relative text-black transition-all duration-300 ease-in-out z-[1000]"
                  >
                    {item.name}
                    <span className="absolute left-1/2 -bottom-[3px] w-0 h-[2px] bg-[#FDC000] transition-all duration-300 ease-in-out z-[1000] group-hover:left-0 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        )}

        {isMobile ? (
          <div className="flex gap-7  place-items-center">
            <Link to='/contact'>
            
            <button className="text-white bg-[#FDC000] text-[1rem] [@media(min-width:300px)_and_(max-width:700px)]:h-[3vh] [@media(min-width:300px)_and_(max-width:700px)]:w-[23vw] rounded-sm flex place-items-center justify-center">Contact Us</button>
            </Link>
            <i
              id="hamburgerIcon"
              class="fa-solid fa-bars [@media(min-width:300px)_and_(max-width:700px)]:text-[1.7rem] text-white z-[1000]"
              onClick={() => setPopup(!popup)}
            ></i>
          </div>
        ) : (
          <>
            <nav
              id="menuNav"
              className="flex gap-7 h-fit list-none text-white z-[999]"
            >
              {[
                { name: "About Us", link: "/about-us" },
                { name: "Service", link: "/services" },
                { name: "Our Fleet", link: "/our-fleet-2" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "HSE", link: "/hse" },
              ].map((item) => (
                <li key={item.link} className=" relative group">
                  <Link
                    to={item.link}
                    className="relative text-white transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className="absolute left-1/2 -bottom-[3px]  w-0  h-[2px]  bg-[#FDC000]  transition-all duration-300 ease-in-out  group-hover:left-0   group-hover:w-full "></span>
                  </Link>
                </li>
              ))}
            </nav>

            <Link to="/contact">
              <button
                className="menuButton [@media(min-width:650px)_and_(max-width:1200px)]:h-[11vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[14vw] md:w-[15vw] md:h-[4vh] w-[9vw] h-[6vh] lg:h-[6vh] lg:w-[9vw] bg-[#FDC000] text-black text-[1rem] rounded-[9px] transition duration-300 transform
  hover:scale-105 hover:bg-[#ffcf33] cursor-pointer"
              >
                Contact Us
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Menu;

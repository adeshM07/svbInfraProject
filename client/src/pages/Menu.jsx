import React from "react";
import svbLogo from "../assets/SVB_Logo.png";
import "../App.css";
import "../CSS/Menu.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isColored, setIsColored] = useState(false);

  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // scrolling down → hide
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideOnScroll(true);
      }
      // scrolling up → show
      else {
        setHideOnScroll(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, []);

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

  const menuItems = [
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Our Fleet", link: "/our-fleet-2" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Gallery", link: "/portfolio#gallery" },
    { name: "HSE", link: "/hse" },
  ];

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
      {/* ${hideOnScroll ? "-translate-y-full" : "translate-y-0"} */}
      {/* <div
        className={`
    fixed top-0 left-0 border-2 border-red-500   [@media(min-width:300px)_and_(max-width:700px)]:h-[9vh] w-full flex px-5 md:px-6 justify-between 
     lg:h-[13vh] xl:h-[13vh] place-items-center lg:px-30 
    
    
    ${isColored ? "bg-[#333333]" : "bg-transparent"}
   
  `} */}
      <div
        className={` w-full fixed top-0 left-0 transition-all duration-500 z-999 flex  justify-between place-items-center min-h-15 md:h-17 lg:h-18 xl:h-25   px-2.5 md:px-8 lg:px-15 xl:px-30 
    ${isColored ? "bg-[#333333]" : "bg-transparent"}
    ${hideOnScroll ? "-translate-y-full" : "translate-y-0"}
   
  `}
      >
        <div className="">
          <Link to="/">
            {/* <img
              src={svbLogo}
              className="w-[15vw] h-[3.3vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[7.3vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[7vw] lg:w-[7vw] xl:w-[7vw] xl:h-[6vh] lg:h-[6vh]"
            /> */}
            <img
              src={svbLogo}
              className=" w-13 h-6 md:w-19 md:h-9 lg:w-25 lg:h-10 xl:w-35 xl:h-13"
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
            <nav className="flex flex-col text-[1.6rem] gap-5 p-4">
              {menuItems.map((item) => {
                const isActive =
                  item.link === "/portfolio"
                    ? location.pathname === "/portfolio" &&
                      location.hash !== "#gallery"
                    : item.link === "/portfolio#gallery"
                    ? location.pathname === "/portfolio" &&
                      location.hash === "#gallery"
                    : location.pathname === item.link;

                return (
                  <li key={item.link} className="relative list-none">
                    <NavLink
                      to={item.link}
                      onClick={() => setPopup(false)}
                      className={`relative transition-all duration-300
            ${isActive ? "text-[#FDC000]" : "text-black"}`}
                    >
                      {item.name}

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-[3px] h-[2px] bg-[#FDC000] transition-all duration-300
              ${isActive ? "w-full" : "w-0"}`}
                      />
                    </NavLink>
                  </li>
                );
              })}
            </nav>
          </div>
        )}

        {isMobile ? (
          <div className="flex gap-7  ">
            <Link to="/contact">
              <button className="text-white bg-[#FDC000] text-[0.8rem] [@media(min-width:300px)_and_(max-width:700px)]:py-[0.1rem] [@media(min-width:300px)_and_(max-width:700px)]:px-[0.3rem] rounded-sm flex hover:cursor-pointer">
                Contact Us
              </button>
            </Link>
            <i
              id="hamburgerIcon"
              class="fa-solid fa-bars [@media(min-width:300px)_and_(max-width:700px)]:text-[1.7rem] text-white z-[1000]"
              onClick={() => setPopup(!popup)}
            ></i>
          </div>
        ) : (
          <>
            <nav className="flex gap-7 list-none text-white">
              {menuItems.map((item) => {
                const isActive =
                  item.link === "/portfolio"
                    ? location.pathname === "/portfolio" &&
                      location.hash !== "#gallery"
                    : item.link === "/portfolio#gallery"
                    ? location.pathname === "/portfolio" &&
                      location.hash === "#gallery"
                    : location.pathname === item.link;

                return (
                  <li key={item.link} className="relative group">
                    <NavLink
                      to={item.link}
                      className={`relative popins transition-all duration-300
            ${isActive ? "text-[#FDC000]" : "text-[#ECECEC]"}`}
                    >
                      {item.name}

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-[3px] h-[2px] bg-[#FDC000] transition-all duration-300
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </NavLink>
                  </li>
                );
              })}
            </nav>

            <Link to="/contact">
              <button
                // className="menuButton [@media(min-width:650px)_and_(max-width:1200px)]:h-[11vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[14vw] md:w-[15vw] md:h-[4vh] w-[9vw] h-[6vh] lg:h-[6vh] lg:w-[9vw] xl:h-[6vh] xl:w-[9vw] [@media(min-width:2500px)]:h-[5vh] bg-[#FDC000] text-black text-[1rem] rounded-[9px]  xl:text-[1rem] [@media(min-width:2500px)]:text-[1.4rem] transition duration-300 transform
                // hover:scale-105 hover:bg-[#ffcf33] cursor-pointer"
                className="menuButton bg-[#FDC000] text-[#333333] font-semibold rounded-lg  transition duration-300 transform hover:scale-105 hover:bg-[#ffcf33] hover:cursor-pointer md:text-lg lg:text-xl md:w-28 md:h-9 lg:w-34 lg:h-9 xl:w-37 xl:h-12 "
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

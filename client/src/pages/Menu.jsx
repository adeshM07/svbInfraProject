import React from "react";
import svbLogo from "../assets/SVB_Logo.png";
import "../App.css";
import "../CSS/Menu.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 740) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); // Run once when mounted
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className=" bg-[#333333] w-screen flex px-5 md:px-6 justify-between h-[9vh] lg:h-[13vh] place-items-center lg:px-24">
        <div className="">
          <Link to="/">
            <img src={svbLogo} className="w-[15vw] h-[5vh] lg:w-[8vw] lg:h-[8vh]" />
          </Link>
        </div>
        {
          popup && <div
            className="absolute right-5 top-[90px] w-[60vw] h-fit 
  border border-white/20 
  rounded-xl 
  bg-white/10 
  backdrop-blur-sm 
  shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
  flex flex-col 
  z-[999]"
          >
            <nav
              id="menuNav"
              className="flex flex-col text-[1.6rem] border-2 border-green-500  gap-5 h-fit list-none text-white z-[1000] p-4"
            >
              {[
                { name: "About Us", link: "/about" },
                { name: "Service", link: "/services" },
                { name: "Our Fleet", link: "/fleet" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "HSE", link: "/hse" },
                { name: "Contact Us", link: "/contact" },
              ].map((item) => (
                <li key={item.link} className=" relative group">
                  <Link
                    to={item.link}
                    onClick={() => setPopup(!popup)}
                    className=" relative text-white/90 transition-all duration-300 ease-in-out z-[1000]"
                  >
                    {item.name}
                    <span className="absolute left-1/2 -bottom-[3px] w-0 h-[2px] bg-[#FDC000] transition-all duration-300 ease-in-out z-[1000] group-hover:left-0 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </nav>
          </div>

        }

        {
          isMobile ? <i class="fa-solid fa-bars text-[21px] text-white z-[1000]" onClick={() => setPopup(!popup)}></i> :
            <>

              <nav id="menuNav" className="flex gap-7 h-fit list-none text-white z-[999]">
                {[
                  { name: "About Us", link: "/about" },
                  { name: "Service", link: "/services" },
                  { name: "Our Fleet", link: "/fleet" },
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
                      <span
                        className="absolute left-1/2 -bottom-[3px]  w-0  h-[2px]  bg-[#FDC000]  transition-all duration-300 ease-in-out  group-hover:left-0   group-hover:w-full "
                      ></span>
                    </Link>
                  </li>
                ))}
              </nav>


              <button className="menuButton md:w-[15vw] md:h-[4vh] w-[9vw] h-[6vh] lg:h-[6vh] lg:w-[9vw] bg-[#FDC000] text-black text-[1rem] rounded-[9px]">
                <Link to='/contact'>Contact Us</Link>

              </button>

            </>
        }
      </div>
    </>
  );
};

export default Menu;

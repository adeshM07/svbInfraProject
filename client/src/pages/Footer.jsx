import React from "react";
import logo from "../assets/svb_logo_footer.png";
import "../CSS/Landing.css";
import mail from "../assets/mail_marker.png";
import phone from "../assets/phone_marker.png";
import address from "../assets/address-marker.png";
import lin from "../assets/linkedin-marker.png";
import yt from "../assets/youtube-marker.png";
import fb from "../assets/facebook-marker.png";
import { Link } from "react-router-dom";
import bg from "../assets/footerBG.jpeg";
import { useLocation } from "react-router-dom";
import "../CSS/Footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // ensures immediate scroll-to-top whenever location changes
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 1024) {
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
      <div className="bg-[#F8F8F8] w-full">
        <div
          id="footer"
          className=" h-full lg:h-[80vh]  w-full flex flex-col gap-5 md:gap-8  z-300 px-5 lg:px-10"
        >
          <div className=" lg:h-fit flex flex-col   lg:flex-row justify-evenly pt-10 lg:pt-20  gap-8 lg:gap-40">
            <div className="flex flex-col gap-7">
              <img
                src={logo}
                className="[@media(min-width:650px)_and_(max-width:1200px)]:w-[12vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] w-[20vw] h-[5vh] lg:w-[9vw] lg:h-[8vh]  lg:mx-0"
              />
              <p className=" popins text-[#ECECEC] text-start lg:text-[1rem] lg:text-start">
                At SVB Infra Projects, we are a trusted <br /> provider of
                comprehensive infrastructure <br /> solutions, specializing in
                construction, <br /> earthmoving, land development, and <br />{" "}
                project execution.
              </p>
            </div>
            <div className="flex  flex-col gap-5 lg:gap-11 w-fit lg:mx-0 place-items-center lg:place-items-start ">
              {/* <ul className="flex lg:flex-col gap-3  text-[1rem] md:text-[1rem] lg:gap-4 lg:text-[0.9rem] text-white decoration-0"> */}
              <p className="md:text-[24px] text-[#ECECEC] font-semibold underline decoration-[#FDC000] underline-offset-8">Quick Links</p>
                <ul className="flex  flex-col gap-3  text-[1rem] md:text-[1rem] lg:gap-4 lg:text-[1rem]">
                  {[
                    { label: "About Us", to: "/about-us" },
                    { label: "Services", to: "/services" },
                    { label: "Our Fleet", to: "/our-fleet-2" },
                    { label: "Portfolio", to: "/portfolio" },
                    { label: "HSE", to: "/hse" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="
        text-white
        transition-all duration-300
        cursor-pointer
        hover:text-[#FDC000]
        hover:translate-x-2
        inline-block
      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </ul>
              {/* </ul> */}
            </div>
            {isMobile ? (
              <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-2  ">
                  <div className="flex gap-1 place-items-center">
                    <img src={address} className="h-[3vh]" />
                    <p className="text-white">Karnataka</p>
                    <a href="https://maps.app.goo.gl/TkDRbzDVX1RRaXATA">
                      <i class="fa-solid fa-arrow-up-right-from-square text-[#FDC000]"></i>
                    </a>
                  </div>
                  <div className="flex gap-1 place-items-center">
                    <img src={address} className="h-[3vh]" />
                    <p className="text-white">Andhra Pradesh</p>
                    <a href="https://maps.app.goo.gl/jQgCtc5rAtjt9jJ47">
                      <i class="fa-solid fa-arrow-up-right-from-square text-[#FDC000]"></i>
                    </a>
                  </div>
                </div>
                <div className="text-white [@media(min-width:650px)_and_(max-width:1200px)]:text-start  md:text-center flex flex-col [@media(min-width:650px)_and_(max-width:1200px)]:flex-col md:flex-row">
                  {" "}
                  <a href="tel:9036354261">+91 9036354261</a>{" "}
                  <span className="hidden [@media(min-width:800px)_and_(max-width:1200px)]:hidden md:block">
                    ,
                  </span>{" "}
                  <a href="tel:9980851508">+91 9980851508</a>{" "}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-11">
                <p className="text-[#ECECEC] text-[1rem] lg:text-[1.5rem] text-start popins font-semibold underline decoration-[#FDC000] underline-offset-8">
                  Get in Touch
                </p>
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-4 w-full">
                  {/* 🏢 Bangalore Office */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <img
                      src={address}
                      className="w-[6vw] h-[4vh] md:w-[4vw] md:h-[4vh] lg:w-[2vw] lg:h-[4vh]"
                    />
                    <div className="flex flex-col">
                      <span className="popins text-[10px] md:text-[0.9rem] lg:text-[1rem] text-[#FDC000]">
                        Karnataka Office
                      </span>
                      <p className="text-[#ECECEC] popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        UB Tower, UB City, 24, Vittal Mallya Road,
                        <br />
                        Bengaluru, Karnataka - 560001
                      </p>
                    </div>
                  </div>

                  {/* 🏢 Andhra / Telangana Office */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <img
                      src={address}
                      className="w-[6vw] h-[4vh] md:w-[4vw] md:h-[4vh] lg:w-[2vw] lg:h-[4vh]"
                    />
                    <div className="flex flex-col">
                      <span className="popins text-[10px] md:text-[0.9rem] lg:text-[1rem] text-[#FDC000]">
                        Andhra / Telangana Office
                      </span>
                      <p className="text-[#ECECEC] popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        PCS Business Centre 40-6/3-3,
                        <br />
                        Co-operative, State Bank Colony, Labbipet,
                        <br />
                        Vijayawada, Andhra Pradesh - 520010
                      </p>
                    </div>
                  </div>

                  {/* 📞 Phone */}

                  <div className="flex items-start gap-3 md:gap-4">
                    <a href="tel:9036354261" className="flex gap-3 md:gap-4">
                      <img
                        src={phone}
                        className="w-[6vw] h-[4vh] md:w-[4vw] md:h-[4vh] lg:w-[2vw] lg:h-[3.6vh]"
                      />
                      <p className="text-[#ECECEC] popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        +91 9036354261 , +91 9980851508
                      </p>
                    </a>
                  </div>

                  {/* ✉️ Email */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <a
                      href="mailto:info@svbinfraprojects.com"
                      className="flex gap-3 md:gap-4"
                    >
                      <img
                        src={mail}
                        className="w-[6vw] h-[4vh] md:w-[4vw] md:h-[4vh] lg:w-[2vw] lg:h-[4vh]"
                      />
                      <p className="text-[#ECECEC] popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        info@svbinfraprojects.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr className="border-none h-[2px] bg-white opacity-50 mx-2 lg:mx-20" />
          <div className=" lg:h-fit  flex flex-col gap-1 md:gap-4 place-items-center justify-center">
            <div className="flex gap-2  lg:mt-0">
              <a
                href="https://www.facebook.com/share/17Yn7q28DJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fb}
                  className="[@media(min-width:650px)_and_(max-width:1200px)]:h-[7vh]  h-[3vh] lg:h-[4vh] cursor-pointer"
                  alt="Facebook"
                />
              </a>

              <a
                href="https://www.youtube.com/@svbinfraprojects5316"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={yt}
                  className="h-[3vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[7vh] lg:h-[4vh] cursor-pointer"
                  alt="YouTube"
                />
              </a>
              {/* <img src={ins} className="h-[3vh] lg:h-[4vh]" alt="" /> */}
            </div>
            <p className="text-white popins [@media(min-width:650px)_and_(max-width:1200px)]:text-[1rem] text-[0.5rem] lg:text-[0.8rem] mb-4 lg:mb-0">
              Copyright 2025 SVB Infra Projects. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

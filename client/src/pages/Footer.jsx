import React from "react";
import logo from "../assets/SVB_Logo.png";
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
      <div className="bg-[#F8F8F8]">
        <div
          id="footer"
          className=" h-full lg:h-[80vh] w-screen flex flex-col gap-14  z-999"
        >
          <div className=" lg:h-[65%] flex flex-col lg:flex-row justify-evenly pt-10 lg:pt-20 gap-10 lg:gap-40">
            <div className="flex flex-col gap-7">
              <img
                src={logo}
                className="w-[20vw] h-[7vh] lg:w-[9vw] lg:h-[9vh] mx-auto lg:mx-0"
              />
              <p className=" popins text-white text-center lg:text-[0.8rem] lg:text-start">
                At SVB Infra Projects, we are a trusted <br /> provider of
                comprehensive infrastructure <br /> solutions, specializing in
                construction, <br /> earthmoving, land development, and <br />{" "}
                project execution.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:gap-8 w-fit mx-auto lg:mx-0 place-items-center lg:place-items-start">
              <p className="text-white text-[1rem] lg:text-[1.4rem] popins font-semibold underline decoration-[#FDC000] underline-offset-8">
                Quick Links
              </p>
              <ul className="flex lg:flex-col gap-3 text-[0.8rem] md:text-[1rem] lg:gap-4 lg:text-[0.9rem] text-white decoration-0">
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "About Us", to: "/about" },
                    { label: "Services", to: "/services" },
                    { label: "Our Fleet", to: "/fleet" },
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
              </ul>
            </div>
            {isMobile ? (
              <div></div>
            ) : (
              <div className="flex flex-col gap-8">
                <p className="text-white text-[1rem] lg:text-[1.4rem] text-start popins font-semibold underline decoration-[#FDC000] underline-offset-8">
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
                      <p className="text-white popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
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
                      <p className="text-white popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
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
                    <a href="tel:9900641808" className="flex gap-3 md:gap-4">
                      <img
                        src={phone}
                        className="w-[6vw] h-[4vh] md:w-[4vw] md:h-[4vh] lg:w-[2vw] lg:h-[3.6vh]"
                      />
                      <p className="text-white popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        9980851508 , 9036354261
                      </p>
                    </a>
                  </div>

                  {/* ✉️ Email */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <a href="mailto:info@svbinfraprojects.com" className="flex gap-3 md:gap-4">
                      <img
                        src={mail}
                        className="w-[6vw] h-[4vh] md:w-[4vw] md:h-[4vh] lg:w-[2vw] lg:h-[4vh]"
                      />
                      <p className="text-white popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        info@svbinfraprojects.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr className="border-none h-[2px] bg-white opacity-50 mx-33" />
          <div className=" lg:h-[35%] flex flex-col gap-4 place-items-center justify-center">
            <div className="flex gap-2 mt-5 lg:mt-0">
              <a
                href="https://www.facebook.com/share/17Yn7q28DJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fb}
                  className="h-[3vh] lg:h-[4vh] cursor-pointer"
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
                  className="h-[3vh] lg:h-[4vh] cursor-pointer"
                  alt="YouTube"
                />
              </a>
              {/* <img src={ins} className="h-[3vh] lg:h-[4vh]" alt="" /> */}
            </div>
            <p className="text-white popins text-[0.5rem] lg:text-[0.8rem] mb-4 lg:mb-0">
              Copyright 2018 SVB Infra Projects. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

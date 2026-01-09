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
import { motion } from "framer-motion";
import bg from "../assets/footerBG.jpeg";
import { useLocation } from "react-router-dom";
import "../CSS/Footer.css";
import { useState, useEffect } from "react";
import { Youtube, Facebook, Copyright } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";

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

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SVB_Brochure.pdf";
    link.download = "SVB_Brochure.pdf";
    link.click();
  };
  return (
    <>
      <div className="bg-[#F8F8F8] w-full">
        <div
          id="footer"
          className=" py-5 h-fit lg:max-h-fit  w-full flex flex-col gap-5 md:gap-8  z-300 px-3 sm:px-5 xl:px-30  md:py-10"
        >
          <div className=" lg:h-fit flex flex-col gap-y-4  md:flex-row    justify-between">
            <div className="flex flex-col gap-7">
              <div className="relative w-24 h-9 sm:w-28 sm:h-11 md:w-32 md:h-12 lg:w-34.5 lg:h-13">
                <Link href="/">
                  <img
                    src={logo}
                    alt="svb-logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
              <p className=" popins text-[#ECECEC] text-start md:text-[0.7rem] lg:text-[1rem] lg:text-start">
                At SVB Infra Projects, we are a trusted <br /> provider of
                comprehensive infrastructure <br /> solutions, specializing in
                earthmoving,
                <br /> land development, and project execution. <br /> Soil &
                Rock Excavation and Infrastructure <br /> Contractors serving
                Bengaluru, Penagunda, <br /> Sri Sathya Sai District, and Andhra
                Pradesh.
              </p>
              <motion.div
                onClick={downloadResume}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="font-normal hidden md:flex text-white hover:text-black  gap-2 items-center justify-center
    bg-[#FDC000] md:bg-transparent w-[40vw]
    [@media(min-width:650px)_and_(max-width:1200px)]:h-[5vh]
    h-[5vh] md:w-[15vw] lg:h-[6vh]
    rounded-md md:border 
    hover:bg-[#ffcf00] cursor-pointer text-[1rem]"
              >
                Brochure
                <motion.i
                  className="fa-solid fa-download text-[1rem]"
                  whileHover={{ y: 2 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>
            <div className="flex  flex-col gap-5 lg:gap-11  w-fit lg:mx-0 place-items-start lg:place-items-start ">
              {/* <ul className="flex lg:flex-col gap-3  text-[1rem] md:text-[1rem] lg:gap-4 lg:text-[0.9rem] text-white decoration-0"> */}
              <p className="md:text-[17px]  lg:text-[20px] xl:text-[24px] text-[#ECECEC] font-semibold underline decoration-[#FDC000] underline-offset-8 popins">
                Quick Links
              </p>
              <ul className="flex  flex-col gap-3  text-[1rem] md:text-[1rem] lg:gap-4 lg:text-[1rem]">
                {[
                  { label: "About Us", to: "/about-us" },
                  { label: "Services", to: "/services" },
                  { label: "Our Fleet", to: "/our-fleet-2" },
                  { label: "Portfolio", to: "/portfolio" },
                  { label: "Gallery", to: "/portfolio#gallery" },
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
                <p className="text-[#ECECEC] hidden md:block text-[17px] text-start popins font-semibold underline decoration-[#FDC000] underline-offset-8">
                  Get in Touch
                </p>
                <div className="flex flex-col gap-2  ">
                  <div className="flex gap-1 place-items-center">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <p className="text-white">Karnataka</p>
                    <a href="https://maps.app.goo.gl/TkDRbzDVX1RRaXATA">
                      <i class="fa-solid fa-arrow-up-right-from-square text-[#FDC000]"></i>
                    </a>
                  </div>
                  <div className="flex gap-1 place-items-center">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <p className="text-white">Andhra Pradesh</p>
                    <a href="https://maps.app.goo.gl/jQgCtc5rAtjt9jJ47">
                      <i class="fa-solid fa-arrow-up-right-from-square text-[#FDC000]"></i>
                    </a>
                  </div>
                </div>
                <div className="text-white [@media(min-width:650px)_and_(max-width:1200px)]:text-start  md:text-center flex flex-col [@media(min-width:650px)_and_(max-width:1200px)]:flex-col md:flex-row gap-y-1">
                  <a href="tel:9900641808">+91 9900641808</a>{" "}
                  <a href="tel:9980851508">+91 9980851508</a>{" "}
                </div>
                 <div
                onClick={downloadResume}
                className="contactUSBannerFormButton font-normal md:hidden  text-[#333333] flex justify-evenly place-items-center text-center bg-[#FDC000] border-none md:bg-transparent w-[40vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[11vh] h-[5vh] md:w-[13vw] lg:h-[7vh] rounded-md md:border hover:border-none mx-auto lg:mx-0  transition duration-300 transform
  hover:bg-[#ffcf00] hover:scale-105 hover:shadow-lg cursor-pointer text-[1rem] md:text-[1.5rem]"
              >
                Brochure{" "}
                <i class="fa-solid fa-download text-[1rem] md:text-[1.5rem]"></i>
              </div>
              </div>
            ) : (
              <div className="flex flex-col gap-11">
                <p className="text-[#ECECEC] text-[1rem] md:text-[17px] lg:text-[1.1rem] xl:text-[24px] text-start popins font-semibold underline decoration-[#FDC000] underline-offset-8">
                  Get in Touch
                </p>
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-4 w-full">
                  {/* 🏢 Bangalore Office */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
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
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
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
                    <a
                      href="tel:9900641808"
                      className="flex gap-3 md:gap-4 place-items-center"
                    >
                      <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <p className="text-[#ECECEC] popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                        +91 9900641808 +91 9980851508
                      </p>
                    </a>
                  </div>

                  {/* ✉️ Email */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <a
                      href="mailto:info@svbinfraprojects.com"
                      className="flex gap-3 md:gap-4 place-items-center"
                    >
                      <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
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
                <Facebook className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.youtube.com/@svbinfraprojects5316"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              {/* <img src={ins} className="h-[3vh] lg:h-[4vh]" alt="" /> */}
            </div>
            <div className="flex gap-2 mt-1  place-items-center">
              <Copyright className="w-3 h-3 text-white" />
              <p className="text-white popins [@media(min-width:650px)_and_(max-width:1200px)]:text-[1rem] text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] ">
                Copyright 2025 SVB Infra Projects. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import s1 from "../assets/serviceCardIMG1.png";
import s2 from "../assets/serviceCardIMG2.png";
import s3 from "../assets/serviceCardIMG3.png";
import s4 from "../assets/serviceCardIMG4.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";
import "../CSS/Service.css";
import "../CSS/About.css";

const Service = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width < 740);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra PROJECTS is a 3rd generation family-run business..."
        />
        <link rel="canonical" href="https://svbinfraprojects.com/services" />
      </Helmet>
      <div className="w-full">
        {/* ===== BANNER SECTION ===== */}
        <div
          id="serviceBanner"
          className="w-full   h-[45vh] md:h-[45vh] lg:h-[45vh] xl:h-[95vh] flex flex-col "
        >
          <div className="flex flex-col gap-4 pt-[30%] md:pt-[12%]">
            {/* Heading Animation */}
            <motion.p
              className="px-2.5 md:px-8 lg:px-15 xl:px-30 fontMon text-white font-bold text-[1.2rem] leading-6 md:text-[2.5rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[4rem] xl:leading-19"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Your Trusted Partner for Every <br />
              Construction
              <span className="text-[#FDC000]"> Machine You Need</span>
            </motion.p>

            {/* Subtext Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="px-2.5 md:px-8 lg:px-15 xl:px-30 text-white popins text-[0.6rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem]">
                Delivering top-quality machinery and equipment to ensure every
                project runs smoothly, safely, and efficiently.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <motion.div
          className="px-2.5 md:px-8 lg:px-15 xl:px-30  w-fit flex flex-col  gap-6 lg:gap-10 py-5 md:py-0   [@media(min-width:650px)_and_(max-width:1200px)]:-mt-[140px]  md:-mt-[150px] lg:-mt-[150px] xl:-mt-[130px] pb-20"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, ease: "easeOut" }}
          // viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Heading */}
          <motion.p
            className="font-semibold text-black md:text-white text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] 2xl:text-[2rem] underline decoration-[#FDC000] underline-offset-8  "
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            // viewport={{ once: true, amount: 0.4 }}
          >
            Our Services
          </motion.p>
          <div className=" flex flex-col md:flex-row justify-between w-full ">
            {[s1, s2, s3, s4].map((src, index) => (
              <div
              className=""
                key={index}
                // initial={{ opacity: 0, scale: 0.9 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // transition={{
                //   duration: 0.8,
                //   delay: index * 0.2,
                //   ease: "easeOut",
                // }}
                // viewport={{ once: true, amount: 0.4 }}
              >
                <Link
                  to={
                    index === 0
                      ? "/ese"
                      : index === 1
                      ? "/rep"
                      : index === 2
                      ? "/srp"
                      : "/ds"
                  }
                >
                  <img
                    src={src}
                    //           className="w-[90vw] h-[40vh] [@media(min-width:1400px)_and_(max-width:1500px)]:w-[17vw] [@media(min-width:1400px)_and_(max-width:1500px)]:h-[40vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[19vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[40vh]  [@media(min-width:300px)_and_(max-width:410px)]:w-[70vw] [@media(min-width:300px)_and_(max-width:410px)]:h-[50vh]  md:h-[20vh] lg:w-[20vw] xl:w-[20vw] 2xl:w-[18vw] 2xl:h-[47vh]   lg:h-[47vh] xl:h-[50vh]  object-cover
                    //  transition-transform duration-300 hover:scale-105 cursor-pointer rounded-md [@media(min-width:2500px)]:w-[19vw]"
                    className="xl:w-67 xl:h-80 2xl:w-71 2xl:h-86 object-cover"
                    alt={`Service ${index + 1}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Service;

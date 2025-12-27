import React from "react";
import "../CSS/HSE.css";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import ic1 from "../assets/ESECardIMG1.png";
import ic2 from "../assets/ESECardIMG2.png";
import ic3 from "../assets/ESECardIMG3.png";
import ic4 from "../assets/ESECardIMG4.png";
import fb from "../assets/forwardButton.png";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";
import { useState, useEffect } from "react";

const ESE = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 740) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let nav = useNavigate();
  return (
    <>
      <div  className=" px-2.5 md:px-8 lg:px-15 xl:px-30">
        <div className="flex flex-col gap-7 lg:gap-10 mt-[120px] lg:mt-[200px]  ">
          <div className="flex  place-items-center gap-3">
            <p className="text-[#333333] fontMon text-[1rem] md:text-[1.5rem] lg:text-[1.4rem] xl:text-[2rem] font-semibold underline decoration-[#FDC000] underline-offset-8">
              Excavation Soil / Earth
            </p>
            <img
              onClick={() => nav("/rep")}
              src={fb}
              className="h-[1.5vh] w-[3vw] md:h-[2vh] lg:h-[4.5vh] lg:w-[2.5vw] transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <p 
            className="fontMon font-bold text-[1.6rem] md:text-[3rem] lg:text-[4rem] md:leading-14 lg:leading-[69px] text-[#333333]">
              <span className="text-[#FDC000]">Earth & Soil</span> Excavation
              Services
            </p>
            <p className="px-2.5 md:px-0 lg:px-0 xl:px-0 text-[#333333] popins text-[0.5rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem] z-300">
              Excavation is the first step of construction, preparing the site
              and <br className="hidden md:block" /> foundations for a safe and
              successful project.
            </p>
          </div>
        </div>

        <div className="   w-full flex flex-col place-items-center gap-[27px] my-14 md:gap-[150px] lg:gap-[150px] lg:my-[81px]">
          <div className=" md:mx-0 py-5 md:py-0  w-full  md:max-h-100 lg:max-h-100  2xl:max-h-110 gap-y-5 flex flex-col md:flex-row  rounded-lg place-items-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="md:w-[50%] h-full"
            >
              <img
                src={ic1}
                // className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] xl:w-[50vw] 2xl:w-[40vw] lg:h-[52vh] xl:h-[70vh] 2xl:h-[52vh] rounded-lg"
                className="w-full h-full rounded-lg"
                alt="Commitment to health & safety"
              />
            </motion.div>
            <div className=" h-full w-full  md:w-[50%] md:-ml-[8%]  flex ">
              {/* Title (Spring Entry From Right + Slight Down) */}
              {/* <motion.p
                            className=" text-[#FDC000] text-[1.4rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[2rem] xl:text-[1.8rem] 2xl:text-[2rem]   lg:text-[2rem] fontMon font-semibold"
                            initial={{ opacity: 0, x: 120, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 80,
                              damping: 15,
                              duration: 0.9,
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                          >
                            Commitment to health & safety
                          </motion.p> */}

              {/* List (Spring Entry With Slight Delay, Same Direction) */}
              <motion.div
                id="HSEUL"
                // className="text-[#333333] popins text-[14px] bg-white  lg:-ml-20 lg:text-[18px] pl-7  lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl md:text-[15px] lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                className="text-[#333333] popins md:h-[65%] lg:h-[70%] bg-white rounded-xl flex flex-col p-5 gap-3 lg:gap-5  shadow-[0_0_20px_rgba(0,0,0,0.4)] w-full"
                initial={{ opacity: 0, x: 120, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.25,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-[#FDC000] text-[1rem] md:text-[0.9rem] lg:text-[1.3rem] 2xl:text-[2rem] font-semibold fontMon">
                  Deep Excavation & Transportation
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Excavate soil for basements and utilities.</li>
                  <li>Use excavators, trucks, and loaders efficiently.</li>
                  <li>Ensure slope stability and site safety.</li>
                  <li>Transport excavated material to approved sites.</li>
                </div>
              </motion.div>
            </div>
          </div>
          <div className=" md:mx-0 py-5 md:py-0  w-full  md:max-h-100 lg:max-h-100  2xl:max-h-110 gap-y-5 flex flex-col md:flex-row-reverse  rounded-lg place-items-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="md:w-[50%] h-full"
            >
              <img
                src={ic2}
                // className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] xl:w-[50vw] 2xl:w-[40vw] lg:h-[52vh] xl:h-[70vh] 2xl:h-[52vh] rounded-lg"
                className="w-full h-full rounded-lg"
                alt="Commitment to health & safety"
              />
            </motion.div>
            <div className=" h-full w-full  md:w-[50%] md:-mr-[8%]  flex ">
              {/* Title (Spring Entry From Right + Slight Down) */}
              {/* <motion.p
                            className=" text-[#FDC000] text-[1.4rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[2rem] xl:text-[1.8rem] 2xl:text-[2rem]   lg:text-[2rem] fontMon font-semibold"
                            initial={{ opacity: 0, x: 120, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 80,
                              damping: 15,
                              duration: 0.9,
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                          >
                            Commitment to health & safety
                          </motion.p> */}

              {/* List (Spring Entry With Slight Delay, Same Direction) */}
              <motion.div
                id="HSEUL"
                // className="text-[#333333] popins text-[14px] bg-white  lg:-ml-20 lg:text-[18px] pl-7  lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl md:text-[15px] lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                className="text-[#333333] z-300 popins md:h-[65%] lg:h-[70%] bg-white rounded-xl flex flex-col p-5 gap-3 lg:gap-5  shadow-[0_0_20px_rgba(0,0,0,0.4)] w-full"
                initial={{ opacity: 0, x: -120, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.25,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-[#FDC000] text-[1rem] md:text-[0.9rem] lg:text-[1.3rem] 2xl:text-[2rem] font-semibold fontMon">
                  Land Leveling & Compaction
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Grade surfaces to desired elevation and slope.</li>
                  <li>Ensure proper drainage and soil uniformity.</li>
                  <li>Use rollers, graders, and compactors for density.</li>
                  <li>Prevent settlement and ensure structural stability.</li>
                </div>
              </motion.div>
            </div>
          </div>
          <div className=" md:mx-0 py-5 md:py-0  w-full  md:max-h-100 lg:max-h-100  2xl:max-h-110 gap-y-5 flex flex-col md:flex-row  rounded-lg place-items-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="md:w-[50%] h-full"
            >
              <img
                src={ic3}
                // className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] xl:w-[50vw] 2xl:w-[40vw] lg:h-[52vh] xl:h-[70vh] 2xl:h-[52vh] rounded-lg"
                className="w-full h-full rounded-lg"
                alt="Commitment to health & safety"
              />
            </motion.div>
            <div className=" h-full w-full  md:w-[50%] md:-ml-[8%]  flex ">
              {/* Title (Spring Entry From Right + Slight Down) */}
              {/* <motion.p
                            className=" text-[#FDC000] text-[1.4rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[2rem] xl:text-[1.8rem] 2xl:text-[2rem]   lg:text-[2rem] fontMon font-semibold"
                            initial={{ opacity: 0, x: 120, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 80,
                              damping: 15,
                              duration: 0.9,
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                          >
                            Commitment to health & safety
                          </motion.p> */}

              {/* List (Spring Entry With Slight Delay, Same Direction) */}
              <motion.div
                id="HSEUL"
                // className="text-[#333333] popins text-[14px] bg-white  lg:-ml-20 lg:text-[18px] pl-7  lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl md:text-[15px] lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                className="text-[#333333] popins md:h-[65%] lg:h-[70%] bg-white rounded-xl flex flex-col p-5 gap-3 lg:gap-5  shadow-[0_0_20px_rgba(0,0,0,0.4)] w-full"
                initial={{ opacity: 0, x: 120, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.25,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-[#FDC000] text-[1rem] md:text-[0.9rem] lg:text-[1.3rem] 2xl:text-[2rem] font-semibold fontMon">
                  Controlled Earth Filling
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Backfill excavated areas with approved materials.</li>
                  <li>Fill and compact in layers to design levels.</li>
                  <li>Raise site levels or strengthen subgrade.</li>
                  <li>Use murram, sand, or suitable soil.</li>
                </div>
              </motion.div>
            </div>
          </div>
          <div className=" md:mx-0 py-5 md:py-0  w-full  md:max-h-100 lg:max-h-100  2xl:max-h-110 gap-y-5 flex flex-col md:flex-row-reverse  rounded-lg place-items-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="md:w-[50%] h-full"
            >
              <img
                src={ic4}
                // className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] xl:w-[50vw] 2xl:w-[40vw] lg:h-[52vh] xl:h-[70vh] 2xl:h-[52vh] rounded-lg"
                className="w-full h-full rounded-lg"
                alt="Commitment to health & safety"
              />
            </motion.div>
            <div className=" h-full w-full  md:w-[50%] md:-mr-[8%]  flex ">
              {/* Title (Spring Entry From Right + Slight Down) */}
              {/* <motion.p
                            className=" text-[#FDC000] text-[1.4rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[2rem] xl:text-[1.8rem] 2xl:text-[2rem]   lg:text-[2rem] fontMon font-semibold"
                            initial={{ opacity: 0, x: 120, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 80,
                              damping: 15,
                              duration: 0.9,
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                          >
                            Commitment to health & safety
                          </motion.p> */}

              {/* List (Spring Entry With Slight Delay, Same Direction) */}
              <motion.div
                id="HSEUL"
                // className="text-[#333333] popins text-[14px] bg-white  lg:-ml-20 lg:text-[18px] pl-7  lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl md:text-[15px] lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                className="text-[#333333] z-300 popins md:h-[65%] lg:h-[70%] bg-white rounded-xl flex flex-col p-5 gap-3 lg:gap-5  shadow-[0_0_20px_rgba(0,0,0,0.4)] w-full"
                initial={{ opacity: 0, x: -120, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.25,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-[#FDC000] text-[1rem] md:text-[0.9rem] lg:text-[1.3rem] 2xl:text-[2rem] font-semibold fontMon">
                  Building Demolition Works
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Safely dismantle structures for new developments.</li>
                  <li>Use hydraulic breakers, excavators, or demolition.</li>
                  <li>Sort and dispose of debris per environmental norms.</li>
                  <li>Minimize dust, noise, and vibration impact.</li>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div className="relative w-full overflow-hidden my-20">
            <div className="marquee flex items-center whitespace-nowrap">
              <Link
                to="/ese"
                className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]"
              >
                Excavation Soil / Earth
              </Link>

              <Link to="/rep" className="mx-8 md:text-[1.3rem] font-semibold ">
                Rock Excavation
              </Link>

              <Link to="/ds" className="mx-8 md:text-[1.3rem] font-semibold">
                Reliable Dewatering System
              </Link>

              <Link to="/srp" className="mx-8 md:text-[1.3rem] font-semibold ">
                Soil Retention System
              </Link>

              {/* Duplicate items for seamless loop */}
              <Link
                to="/ese"
                className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]"
              >
                Excavation Soil / Earth
              </Link>

              <Link to="/rep" className="mx-8 md:text-[1.3rem] font-semibold ">
                Rock Excavation
              </Link>

              <Link to="/ds" className="mx-8 md:text-[1.3rem] font-semibold">
                Reliable Dewatering System
              </Link>

              <Link
                to="/soil-retention"
                className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]"
              >
                Soil Retention System
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex w-full   my-20 xl:my-25 2xl:my-20  md:text-[1.3rem] font-semibold justify-between mx-2 md:justify-evenly  overfow-hidden">
            <Link to="/ese" className="text-[#FDC000] hover:underline">
              Excavation Soil / Earth
            </Link>

            <Link to="/rep" className="hover:underline">
              Rock Excavation
            </Link>

            <Link to="/ds" className="hover:underline">
              Reliable Dewatering System
            </Link>

            <Link to="/srp" className="hover:underline">
              Soil Retention System
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ESE;

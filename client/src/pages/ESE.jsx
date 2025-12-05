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
      <div>
        <div className="flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mt-[40px] mx-[20px]  lg:ml-[119px]">
          <div className="flex  place-items-center gap-3">
            <p className="text-[14px] md:text-[1.5rem] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]">
              Excavation Soil / Earth
            </p>
            <img
              onClick={() => nav("/rep")}
              src={fb}
              className="h-[1.5vh] w-[3vw] md:h-[2vh] lg:h-[4.5vh] lg:w-[2.5vw] transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="lg:text-[4rem] md:text-[2.5rem] text-[1.4rem] text-[#333333] fontMon font-bold">
              <span className="text-[#FDC000]">Earth & Soil</span> Excavation
              Services
            </p>
            <p className="popins text-[14px] md:text-[20px] lg:text-[20px] text-[#333333]">
              Excavation is the first step of construction, preparing the site
              and <br /> foundations for a safe and successful project.
            </p>
          </div>
        </div>
        <div className=" w-full flex flex-col px-2 lg:px-0  gap-[27px] my-21 md:gap-[150px] lg:gap-[150px]  place-items-center">
          <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={ic1}
                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] lg:h-[52vh]"
                alt="Commitment to health & safety"
              />
            </motion.div>

            {/* ===== TEXT SECTION ===== */}
            <div className="flex flex-col gap-[10px] lg:gap-[20px]">
              {/* Title (Spring Entry From Right + Slight Down) */}
              <motion.p
                className=" text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
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
                Deep Excavation & Transportation
              </motion.p>

              {/* List (Spring Entry With Slight Delay, Same Direction) */}
              <motion.ul
                id="HSEUL"
                className="text-[#333333] popins text-[14px] md:text-[15px] bg-white lg:-ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
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
                <li className="HSEUL">
                  Removal of large soil volumes for basements, and utilities.
                </li>
                <li className="HSEUL">
                  Uses excavators, trucks & loaders for efficient excavation.
                </li>
                <li className="HSEUL">
                  Ensures slope stability and site safety during operations.
                </li>
                <li className="HSEUL">
                  Transports excavated material to approved disposal or reuse
                  sites.
                </li>
              </motion.ul>
            </div>
          </div>
          <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={ic2}
                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[60vw] lg:h-[52vh]"
                alt="Commitment to health & safety"
              />
            </motion.div>

            {/* ===== TEXT SECTION ===== */}
            <div className="flex flex-col gap-[10px] lg:gap-[20px]">
              {/* Title (Spring from Left → Right + Slight Down) */}
              <motion.p
                className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
                initial={{ opacity: 0, x: -120, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  duration: 0.9,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Land Leveling & Compaction
              </motion.p>

              {/* List (Spring Entry from Left, Slight Delay) */}
              <motion.ul
                id="HSEUL"
                className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-999"
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
                <li className="HSEUL">
                  Grading uneven surfaces to achieve the desired elevation and
                  slope for construction.
                </li>
                <li className="HSEUL">
                  Ensures proper water drainage and soil uniformity across the
                  project area.
                </li>
                <li className="HSEUL">
                  Uses rollers, graders, and compactors to achieve required soil
                  density.
                </li>
                <li className="HSEUL">
                  Critical for preventing settlement and ensuring long term
                  stability of structures.
                </li>
              </motion.ul>
            </div>
          </div>
          <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={ic3}
                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[60vw] lg:h-[52vh]"
                alt="Commitment to health & safety"
              />
            </motion.div>

            {/* ===== TEXT SECTION ===== */}
            <div className="flex flex-col  gap-[10px] lg:gap-[20px]">
              {/* Title (Spring Entry From Right + Slight Down) */}
              <motion.p
                className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
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
                Controlled Earth Filling
              </motion.p>

              {/* List (Spring Entry With Slight Delay, Same Direction) */}
              <motion.ul
                id="HSEUL"
                className="text-[#333333] popins text-[14px] md:text-[15px] bg-white lg:-ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
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
                <li className="HSEUL">
                  Process of backfilling excavated areas with approved soil or
                  aggregates.
                </li>
                <li className="HSEUL">
                  Involves layer-wise filling and compaction to achieve design
                  levels.
                </li>
                <li className="HSEUL">
                  Used to raise site levels, fill trenches, or strengthen
                  subgrade conditions.
                </li>
                <li className="HSEUL">
                  Materials used include murram, sand, or suitable excavated
                  soil depending on project specs.
                </li>
              </motion.ul>
            </div>
          </div>
          <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
            {/* ===== IMAGE (Fades In Smoothly) ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={ic4}
                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[60vw] lg:h-[52vh]"
                alt="Commitment to health & safety"
              />
            </motion.div>

            {/* ===== TEXT SECTION ===== */}
            <div className="flex flex-col gap-[10px] lg:gap-[20px]">
              {/* Title (Spring from Left → Right + Slight Down) */}
              <motion.p
                className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
                initial={{ opacity: 0, x: -120, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  duration: 0.9,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Building Demolition Works
              </motion.p>

              {/* List (Spring Entry from Left, Slight Delay) */}
              <motion.ul
                id="HSEUL"
                className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-999"
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
                <li className="HSEUL">
                  Safe dismantling of existing structures to prepare sites for
                  new developments.
                </li>
                <li className="HSEUL">
                  Utilizes hydraulic breakers, excavators, or controlled
                  demolition techniques.
                </li>
                <li className="HSEUL">
                  Includes debris sorting, segregation, and disposal as per
                  environmental norms.
                </li>
                <li className="HSEUL">
                  Focuses on minimizing dust, noise, and vibration impact on
                  surrounding areas.
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div
          id="landing-contact"
          className="lg:w-[78vw]  rounded-md  w-[95vw] px-3 lg:px-0  text-white md:h-[23vh] lg:h-[37vh]  mx-auto flex  place-items-center justify-evenly gap-[4.2rem] lg:gap-70 z-999 mt-10 mb-20"
        >
          <div className="">
            <p className="text-[0.8rem] md:text-[1.7rem] lg:text-[1.5rem] popins-bold ">
              Let's Build Your Next Project Together
            </p>
            <p className="fontMon font-bold text-[1.2rem] md:text-[2rem] lg:text-[3.5rem]">
              Contact With Us!
            </p>
          </div>
          <Link to="/contact">
            <motion.button
              className="lg:w-[calc(9vw+0px)] md:w-[18vw] w-[calc(17vw+0px)] 
             rounded-sm lg:rounded-lg 
             text-[calc(9px+0px)] md:text-[20px] lg:text-[calc(16px+0px)] 
             h-[calc(3vh+0px)] md:h-[4vh] lg:h-[calc(6vh+0px)] 
             bg-[#FDC000] hover:bg-[#ffcf33] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Now
            </motion.button>
          </Link>
        </div>
        {isMobile ? (
          <div className="relative w-full overflow-hidden my-20">
                      <div className="marquee flex items-center whitespace-nowrap">
                        <Link to="/ese" className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]">
                          Excavation Soil / Earth
                        </Link>
          
                        <Link to="/rep" className="mx-8 md:text-[1.3rem] font-semibold ">
                          Rock Excavation
                        </Link>
          
                        <Link to="/ds" className="mx-8 md:text-[1.3rem] font-semibold">
                          Reliable Dewatering System
                        </Link>
          
                        <Link
                          to="/srp"
                          className="mx-8 md:text-[1.3rem] font-semibold "
                        >
                          Soil Retention System
                        </Link>
          
                        {/* Duplicate items for seamless loop */}
                        <Link to="/ese" className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]">
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
          <div className="flex w-full   my-20  md:text-[1.3rem] font-semibold justify-between mx-2 md:justify-evenly  overfow-hidden">
            <p className="text-[#FDC000]">Excavation Soil / Earth</p>
            <p>Rock Excavation</p>
            <p>Reliable Dewatering System</p>
            <p>Soil Retention System</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ESE;

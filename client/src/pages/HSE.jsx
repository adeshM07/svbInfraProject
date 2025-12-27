import React from "react";
import "../CSS/HSE.css";
import "../App.css";
import "../CSS/Landing.css";
import { Helmet } from "react-helmet";
import c1 from "../assets/hseCard1.png";
import { Link } from "react-router-dom";
// import c1 from '../assets/hseCard1.png'
import { motion } from "framer-motion";
import c2 from "../assets/hseCard2.png";
import c3 from "../assets/hseCard3.png";
import c4 from "../assets/hseCard4.png";
import ic1 from "../assets/infoCardIMG1.jpeg";
import ic2 from "../assets/infoCardIMG2.png";
import ic3 from "../assets/infoCardIMG3.png";
import ic4 from "../assets/infoCardIMG4.png";
import { useState, useEffect } from "react";

const HSE = () => {
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
    handleResize(); // Run once when mounted
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Helmet>
        <title>HSE | SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra PROJECTS is a 3rd generation family-run business..."
        />
        <link rel="canonical" href="https://svbinfraprojects.com/hse" />
      </Helmet>
      <div className="bg-[F8F8F8]">
        <div
          className="h-[45vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[100vh] md:h-[45vh] lg:h-[95vh] w-full"
          id="hseBanner"
        >
          <div className="px-2.5 md:px-8 lg:px-15 xl:px-30 flex flex-col gap-[20px] lg:gap-[12px] pt-[80px] lg:pt-[195px]">
            {/* Animated Title */}
            <motion.p
              // className="hseBannerTitle [@media(min-width:300px)_and_(max-width:410px)]:text-[1.2rem] text-[1.5rem] md:text-[2.5rem] md:leading-10 leading-6 lg:text-[4rem] text-[#FDC000] lg:leading-20"
              className="px-2.5 md:px-0 lg:px-0 xl:px-0 fontMon text-[#FDC000] font-bold text-[1.5rem] leading-8 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  2xl:text-[4rem] 2xl:leading-19 z-300 hseBannerTitle"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Health, Safety & Environmental <br />
              <span className="text-white">Practices</span>
            </motion.p>

            {/* Animated Description */}
            <motion.p
              // className="hseBannerDesc text-white text-[14px] md:text-[1.5rem] lg:text-[20px]"
              className="text-white popins text-[0.7rem] md:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.3rem] hseBannerDesc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Delivering infrastructure that’s safe,
              <br className="lg:hidden" /> responsible, and built for the
              <br className="hidden lg:block" /> future.
            </motion.p>
          </div>
        </div>

        {isMobile ? (
          <motion.div
            className="relative w-full overflow-hidden -mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex animate-scroll  gap-[2px] lg:gap-[24px] min-w-full">
              <img
                src={c1}
                className="w-[47vw]  h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c2}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c3}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c4}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c1}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c2}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c3}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c4}
                className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="relative w-full overflow-hidden -mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-center gap-[2px] lg:gap-[1.5rem] xl:gap-[1rem] 2xl:gap-[1.5rem] min-w-full">
              <img
                src={c1}
                className="w-[47vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[25vw] md_h-[17vh] xl:w-[20vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[18vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c2}
                className="w-[47vw] h-[30vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] md:w-[25vw] md_h-[17vh] xl:w-[20vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[18vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c3}
                className="w-[47vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[25vw] md_h-[17vh] xl:w-[20vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[18vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c4}
                className="w-[47vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[25vw] md_h-[17vh] xl:w-[20vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[18vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
            </div>
          </motion.div>
        )}

        <div className="flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] px-2.5 md:px-8 lg:px-15 xl:px-30">
          {/* Section Heading */}
          <motion.p
            // className="text-[14px] md:text-[1.3rem] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]"
            className="text-[#333333] popins text-[1rem] md:text-[1.5rem] lg:text-[1.4rem] xl:text-[2rem]  underline font-semibold decoration-[#FDC000] underline-offset-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Our Commitment to HSE
          </motion.p>

          {/* Title + Description */}
          <motion.div
            className="flex flex-col gap-2 lg:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Main Title */}
            <motion.p
              className="fontMon text-[#333333] font-bold text-[1.8rem] leading-9 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[4rem] xl:leading-19"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Your Safety, <span className="text-[#FDC000]">Our</span> Priority.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-[#333333] popins text-[0.7rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.2rem]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              At SVB Infra Projects, health, safety, and environmental
              protection are at the core of everything we do.
            </motion.p>
          </motion.div>
        </div>

        {isMobile ? (
          <div className="w-full flex flex-col place-items-center gap-[27px] my-14 md:gap-[150px] lg:gap-[150px] lg:my-[81px]">
            {/* ===== BLOCK 1 ===== */}
            <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] xl:w-[90vw] 2xl:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
              <div>
                <img
                  src={ic1}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] xl:w-[50vw] 2xl:w-[40vw] lg:h-[52vh]"
                  alt="Commitment to health & safety"
                />
              </div>

              <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                <p className="text-[#FDC000] text-[1.4rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[2rem] xl:text-[1.8rem] 2xl:text-[2rem] lg:text-[2rem] fontMon font-semibold">
                  Commitment to health & safety
                </p>

                <ul className="text-[#333333] popins text-[14px] bg-white lg:-ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl md:text-[15px] lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <li className="HSEUL">Setting out of corner benchmarks</li>
                  <li className="HSEUL">Surveying ground levels</li>
                  <li className="HSEUL">Surveying top levels</li>
                  <li className="HSEUL">Excavation to approved depth</li>
                  <li className="HSEUL">Dressing of loose soil</li>
                  <li className="HSEUL">Making up to cut-off level</li>
                </ul>
              </div>
            </div>

            {/* ===== BLOCK 2 ===== */}
            <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] xl:w-[90vw] 2xl:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
              <div>
                <img
                  src={ic2}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] xl:w-[75vw] xl:h-[60vh] 2xl:h-[52vh] 2xl:w-[40vw] lg:w-[40vw] lg:h-[52vh]"
                  alt="Monitoring & risk management"
                />
              </div>

              <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                <p className="text-[#FDC000] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] text-[1.4rem] md:text-[2rem] xl:text-[1.7rem] 2xl:text-[2rem] lg:text-[2rem] fontMon font-semibold">
                  Monitoring & risk management
                </p>

                <ul className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-300">
                  <li className="HSEUL">
                    Continuous monitoring is used to maintain a safe work
                    environment.
                  </li>
                  <li className="HSEUL">
                    Health and Safety Managers supervise all site operations.
                  </li>
                  <li className="HSEUL">
                    Regular inspections and toolbox talks support ongoing safety
                    awareness.
                  </li>
                  <li className="HSEUL">
                    Real-time risk assessments help identify potential hazards
                    early.
                  </li>
                  <li className="HSEUL">
                    Corrective actions are taken promptly to ensure safety and
                    maintain productivity.
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== BLOCK 3 ===== */}
            <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
              <div>
                <img
                  src={ic1}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] xl:w-[75vw] xl:h-[60vh] 2xl:h-[52vh] 2xl:w-[65vw] lg:w-[40vw] lg:h-[52vh]"
                  alt="Certified Equipment operators"
                />
              </div>

              <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                <p className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold">
                  Certified Equipment operators
                </p>

                <ul className="text-[#333333] popins text-[14px] md:text-[15px] bg-white lg:-ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <li className="HSEUL">
                    Certified operators handle all heavy machinery and equipment
                    safely and efficiently.
                  </li>
                  <li className="HSEUL">
                    Regular training and evaluations keep operators current with
                    the latest safety protocols.
                  </li>
                  <li className="HSEUL">
                    Third-party inspections verify compliance with industry
                    standards and regulations.
                  </li>
                  <li className="HSEUL">
                    These measures ensure smooth, reliable operations while
                    maintaining a safe work environment.
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== BLOCK 4 ===== */}
            <div className="mx-2 md:mx-0 py-5 md:py-0 lg:flex-row-reverse px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col gap-7 lg:gap-[39px] rounded-lg justify-center">
              <div>
                <img
                  src={ic2}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] xl:w-[95vw] xl:h-[60vh] 2xl:h-[52vh] 2xl:w-[70vw] lg:w-[60vw] lg:h-[52vh]"
                  alt="Compliance & Adaptability"
                />
              </div>

              <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                <p className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold">
                  Compliance & Adaptability
                </p>

                <ul className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-300">
                  <li className="HSEUL">
                    Strict adherence to site-specific HSE guidelines, statutory
                    regulations, and client safety policies.
                  </li>
                  <li className="HSEUL">
                    Regular audits ensure full compliance with legal and
                    operational standards.
                  </li>
                  <li className="HSEUL">
                    Teams remain adaptable to changing site conditions and
                    project requirements.
                  </li>
                  <li className="HSEUL">
                    These practices ensure operations are conducted safely,
                    efficiently, and without risk.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className=" px-2.5 md:px-8 lg:px-15 xl:px-30  w-full flex flex-col place-items-center gap-[27px] my-14 md:gap-[150px] lg:gap-[150px] lg:my-[81px]">
            <div className=" md:mx-0 py-5 md:py-0  w-full  md:max-h-100 lg:max-h-100  2xl:max-h-110 flex flex-col md:flex-row  rounded-lg place-items-center">
              {/* ===== IMAGE (Fades In Smoothly) ===== */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="w-[50%] h-full"
              >
                <img
                  src={ic1}
                  // className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] xl:w-[50vw] 2xl:w-[40vw] lg:h-[52vh] xl:h-[70vh] 2xl:h-[52vh] rounded-lg"
                  className="w-full h-full rounded-lg"
                  alt="Commitment to health & safety"
                />
              </motion.div>
              <div className=" h-full  w-[50%] -ml-[8%]  flex ">
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
                  className="text-[#333333] popins md:h-[70%] bg-white rounded-xl flex flex-col p-5 gap-3 lg:gap-5  shadow-[0_0_20px_rgba(0,0,0,0.4)] w-full"
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
                  <p className="text-[#FDC000] md:text-[1rem] lg:text-[1.3rem] 2xl:text-[2rem] font-semibold fontMon">Commitment to health & safety</p>
                  <div className="flex flex-col gap-2 list-none popins md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                    <li className="">Setting out of corner benchmarks</li>
                    <li className="">Surveying ground levels</li>
                    <li className="">Surveying top levels</li>
                    <li className="">Excavation to approved depth</li>
                    <li className="">Dressing of loose soil</li>
                    <li className="">Making up to cut-off level</li>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] xl:w-[90vw] 2xl:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
              {/* ===== IMAGE (Fades In Smoothly) ===== */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <img
                  src={ic2}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] xl:w-[75vw] xl:h-[70vh] 2xl:h-[52vh] 2xl:w-[40vw] lg:w-[40vw] lg:h-[52vh] rounded-lg"
                  alt="Commitment to health & safety"
                />
              </motion.div>

              {/* ===== TEXT SECTION ===== */}
              <div className="flex flex-col gap-[10px] lg:gap-[20px] ">
                {/* Title (Spring from Left → Right + Slight Down) */}
                <motion.p
                  className="text-[#FDC000] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] text-[1.4rem] md:text-[2rem]  xl:text-[1.4rem] 2xl:text-[2rem] lg:text-[2rem] fontMon font-semibold"
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
                  Monitoring & risk management
                </motion.p>

                {/* List (Spring Entry from Left, Slight Delay) */}
                <motion.ul
                  id="HSEUL"
                  className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-300"
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
                    Continuous monitoring is used to maintain a safe work
                    environment.
                  </li>
                  <li className="HSEUL">
                    Health and Safety Managers supervise all site operations.
                  </li>
                  <li className="HSEUL">
                    Regular inspections and toolbox talks support ongoing safety
                    awareness.
                  </li>
                  <li className="HSEUL">
                    Real-time risk assessments help identify potential hazards
                    early.
                  </li>
                  <li className="HSEUL">
                    Corrective actions are taken promptly to ensure safety and
                    maintain productivity.
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
                  src={ic1}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw] md:h-[34vh] xl:w-[75vw] xl:h-[70vh] 2xl:h-[52vh] 2xl:w-[65vw] lg:w-[40vw] lg:h-[52vh] rounded-lg"
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
                  Certified Equipment operators
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
                    Certified operators handle all heavy machinery and equipment
                    safely and efficiently.
                  </li>
                  <li className="HSEUL">
                    Regular training and evaluations keep operators current with
                    the latest safety protocols.
                  </li>
                  <li className="HSEUL">
                    Third-party inspections verify compliance with industry
                    standards and regulations.
                  </li>
                  <li className="HSEUL">
                    These measures ensure smooth, reliable operations while
                    maintaining a safe work environment.
                  </li>
                </motion.ul>
              </div>
            </div>
            <div className="mx-2 md:mx-0 py-5 md:py-0 lg:flex-row-reverse px-4 md:px-0 xl:w-[90vw] 2xl:w-[78vw] lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col gap-7 lg:gap-[39px] rounded-lg justify-center">
              {/* ===== IMAGE (Fades In Smoothly) ===== */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <img
                  src={ic2}
                  className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] h-[30vh] md:w-[85vw]  md:h-[34vh] xl:w-[95vw]  2xl:h-[52vh] 2xl:w-[70vw] lg:w-[60vw] lg:h-[52vh] xl:h-[70vh] "
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
                  Compliance & Adaptability
                </motion.p>

                {/* List (Spring Entry from Left, Slight Delay) */}
                <motion.ul
                  id="HSEUL"
                  className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-300"
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
                    Strict adherence to site-specific HSE guidelines, statutory
                    regulations, and client safety policies.
                  </li>
                  <li className="HSEUL">
                    Regular audits ensure full compliance with legal and
                    operational standards.
                  </li>
                  <li className="HSEUL">
                    Teams remain adaptable to changing site conditions and
                    project requirements.
                  </li>
                  <li className="HSEUL">
                    These practices ensure operations are conducted safely,
                    efficiently, and without risk to employees, the public, or
                    surrounding environments.
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HSE;

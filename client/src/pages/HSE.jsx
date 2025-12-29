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
          className="h-[45vh]  md:h-[45vh] lg:h-[45vh] xl:h-screen w-full"
          id="hseBanner"
        >
          <div className="px-2.5 md:px-8 lg:px-15 xl:px-30 flex flex-col gap-[20px] lg:gap-[12px] pt-[80px] lg:pt-[195px]">
            {/* Animated Title */}
            <motion.p
              // className="hseBannerTitle [@media(min-width:300px)_and_(max-width:410px)]:text-[1.2rem] text-[1.5rem] md:text-[2.5rem] md:leading-10 leading-6 lg:text-[4rem] text-[#FDC000] lg:leading-20"
              className="px-1.5 md:px-0 lg:px-0 xl:px-0 fontMon text-[#FDC000] font-bold text-[1.2rem] leading-7 md:text-[2.5rem] md:leading-14 lg:text-[3.2rem] lg:leading-18 xl:text-[3.5rem] xl:leading-20  2xl:text-[4rem] 2xl:leading-19 z-300 hseBannerTitle"
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
            className="relative w-full overflow-hidden  -mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-center gap-[2px] lg:gap-[3px] xl:gap-[1rem] 2xl:gap-[1.5rem] min-w-full">
              <img
                src={c1}
                className="w-[47vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[25vh] h-[30vh] md:w-[25vw] md:h-[17vh] xl:w-[23vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[25vw]  lg:h-[30vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c2}
                className="w-[47vw] h-[30vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[25vh] md:w-[25vw] md:h-[17vh] xl:w-[23vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[25vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c3}
                className="w-[47vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[25vh] h-[30vh] md:w-[25vw] md:h-[17vh] xl:w-[23vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[25vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
              <img
                src={c4}
                className="w-[47vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[25vh] h-[30vh] md:w-[25vw] md:h-[17vh] xl:w-[23vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[25vw] lg:h-[47vh] 2xl:h-[47vh] flex-shrink-0 scale-3d"
              />
            </div>
          </motion.div>
        )}

        <div className="flex flex-col gap-7 lg:gap-10 mt-[70px] lg:my-[100px] px-2.5 md:px-8 lg:px-15 xl:px-30">
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

        <div className=" px-2.5 md:px-8 lg:px-15 xl:px-30  w-full flex flex-col place-items-center gap-[27px] my-14 md:gap-[150px] lg:gap-[150px] lg:my-[81px] xl:gap-[120px] xl:mb-30">
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
                  Commitment to health & safety
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
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
                  Monitoring & risk management
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li className="">
                    Continuous monitoring to ensure a safe environment.
                  </li>
                  <li className="">
                    Health and Safety Managers oversee site operations.
                  </li>
                  <li className="">
                    Inspections and talks promote safety awareness.
                  </li>
                  <li className="">
                    Real-time risk assessments identify hazards early.
                  </li>
                  <li className="">
                    We take corrective actions promptly to ensure safety.
                  </li>
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
                  Certified Equipment operators
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Certified operators handle machinery safely.</li>
                  <li>Training keeps operators updated on safety.</li>
                  <li>Third-party inspections ensure compliance.</li>
                  <li>Measures maintain safe, smooth operations.</li>
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
                  Compliance & Adaptability
                </p>
                <div className="flex flex-col gap-2 list-none popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Follow site HSE guidelines and safety policies.</li>
                  <li>Audits ensure legal and operational compliance.</li>
                  <li>Teams adapt to changing site conditions.</li>
                  <li>
                    Practices ensure safe, efficient, risk-free operations.
                  </li>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HSE;

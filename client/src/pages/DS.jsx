import React from "react";
import "../CSS/HSE.css";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import ic1 from "../assets/DSCardIMG1.png";
import ic2 from "../assets/DSCardIMG2.png";
import ic3 from "../assets/DSCardIMG3.png";
import fb from "../assets/forwardButton.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DS = () => {
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
      <div className=" px-2.5 md:px-8 lg:px-15 xl:px-30 my-15 md:my-20 flex flex-col gap-10">
        <div className="flex flex-col gap-7 lg:gap-10 ">
          <div className="flex  place-items-center gap-3">
            
              <h3 className="text-[20px] inline lg:text-[32px] md:text-[30px] sm:text-[24px] border-b-2 border-b-primary font-semibold">
                Reliable Dewatering System
              </h3>
            
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="text-[#333333] xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
              <span className="text-[#FDC000]">Dewatering & Groundwater </span>{" "}
              <br /> Control Services
            </p>
            <p className="xl:text-xl lg:text-xl md:text-lg text-sm lg:max-w-[700px] md:max-w-[500px] leading-relaxed text-[#333333]">
              Dewatering involves controlled removal of groundwater to maintain
              dry and safe  excavation sites, protecting foundations and
              ensuring smooth construction operations.
            </p>
          </div>
        </div>

        <div className="   w-full flex flex-col place-items-center gap-[27px] md:gap-[150px] lg:gap-[150px] ">
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
                  Well Point System
                </p>
                <div className="flex flex-col gap-2 pl-2 marker:text-xs popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Use vacuum pumps to remove groundwater.</li>
                  <li>Control water levels during shallow excavations.</li>
                  <li>Enable dry conditions and prevent soil instability.</li>
                  <li>Quick setup, suitable for sandy or loose soils.</li>
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
                  Deep Well System
                </p>
                <div className="flex flex-col gap-2 pl-2 marker:text-xs popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Install deep wells with submersible pumps.</li>
                  <li>Efficiently handle large volumes of groundwater.</li>
                  <li>Used in basements, shafts, or deep foundations.</li>
                  <li>Ensure long-term dewatering for complex sites.</li>
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
                  Automated Dewatering System
                </p>
                <div className="flex flex-col gap-2 pl-2 marker:text-xs popins text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1.4rem]">
                  <li>Use sensors and automated pumps for groundwater.</li>
                  <li>Monitor water levels in real-time with less manpower.</li>
                  <li>Energy-efficient and adaptable to site conditions.</li>
                  <li>Maintain dry and safe excavation zones consistently.</li>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div className="relative w-full overflow-hidden">
            <div className="marquee flex items-center whitespace-nowrap">
              <Link to="/ese" className="mx-8 md:text-[1.3rem] font-semibold">
                Excavation Soil / Earth
              </Link>

              <Link to="/rep" className="mx-8 md:text-[1.3rem] font-semibold ">
                Rock Excavation
              </Link>

              <Link
                to="/ds"
                className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]"
              >
                Reliable Dewatering System
              </Link>

              <Link to="/srp" className="mx-8 md:text-[1.3rem] font-semibold">
                Soil Retention System
              </Link>

              {/* Duplicate items for seamless loop */}
              <Link to="/ese" className="mx-8 md:text-[1.3rem] font-semibold">
                Excavation Soil / Earth
              </Link>

              <Link to="/rep" className="mx-8 md:text-[1.3rem] font-semibold ">
                Rock Excavation
              </Link>

              <Link
                to="/ds"
                className="mx-8 md:text-[1.3rem] font-semibold text-[#FDC000]"
              >
                Reliable Dewatering System
              </Link>

              <Link
                to="/soil-retention"
                className="mx-8 md:text-[1.3rem] font-semibold"
              >
                Soil Retention System
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex w-full     md:text-[1.3rem] font-semibold justify-between mx-2 md:justify-evenly  overfow-hidden">
            <Link to="/ese" className=" hover:underline">
              Excavation Soil / Earth
            </Link>

            <Link to="/rep" className="hover:underline">
              Rock Excavation
            </Link>

            <Link to="/ds" className=" text-[#FDC000] hover:underline">
              Reliable Dewatering System
            </Link>

            <Link to="/srp" className=" hover:underline">
              Soil Retention System
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default DS;

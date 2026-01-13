import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../CSS/Fleet.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
import f10 from "../assets/f10.png";
import f11 from "../assets/f11.png";
import f12 from "../assets/f12.png";
import "../CSS/Landing.css";
import fleetVideo from '../assets/fleetVideo.MOV'
// kuiefbuib
const Fleet = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Responsiveness handling
  const handleResize = () => {
    setIsMobile(window.innerWidth < 740);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Framer Motion animation control
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount: 0.1, // triggers earlier for mobile
    margin: "-10% 0px", // ensures visibility trigger on small screens
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardDetails = [
    {
      img: f1,
      title: "Volvo EX 350 ",
      desc: "Versatile and efficient for all construction operations.",
    },
    {
      img: f2,
      title: "JCB 380 Xtra",
      desc: "High-performance excavator for demanding earthwork.",
    },
    {
      img: f3,
      title: "Volvo EX 210",
      desc: "Precision and durability in every excavation task.",
    },
    {
      img: f4,
      title: "L&T Komatsu",
      desc: "Eliable strength for consistent site performance.",
    },
    {
      img: f5,
      title: "Tata Hitachi EX 140",
      desc: "Compact power built for dependable excavation.",
    },
    {
      img: f6,
      title: "Bharat Benz Tipper 16 CUM",
      desc: "Strong performance for heavy-duty hauling.",
    },
    {
      img: f7,
      title: "Tata prima 23 cum",
      desc: "Versatile and efficient for all construction operations.",
    },
    {
      img: f9,
      title: "Man Dumpers 16 CUM",
      desc: "Rugged and efficient for bulk material movement.",
    },
    {
      img: f8,
      title: "Hydraulic Rock Splitter",
      desc: "Efficient and powerful tool for controlled rock breaking.",
    },
    {
      img: f11,
      title: "Diamond Rope Cutting",
      desc: "Accurate cutting for concrete and rock structures.",
    },
    {
      img: f10,
      title: "JCB (3DX) ",
      desc: "Versatile and efficient for all construction operations.",
    },
    {
      img: f12,
      title: "Compressors",
      desc: "High pressure compressor & Tractor mount compressor",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Fleet | Excavation & Infrastructure Machinery | SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra Projects operates a modern fleet of excavation and infrastructure machinery supporting soil and rock excavation projects across Bengaluru and Andhra Pradesh."
        />
        <link
          rel="canonical"
          href="https://www.svbinfraprojects.com/our-fleet-2
        "
        />
      </Helmet>
      <div className="">
        {/* ===== Fleet Banner ===== */}
        <div className="relative w-full h-[45vh] md:h-[65vh] lg:h-[95vh] overflow-hidden flex place-items-center">
          {/* ===== VIDEO BACKGROUND ===== */}
          <video
            src="https://res.cloudinary.com/dkuwwakct/video/upload/v1768292134/ourFleetVideo_xhvgtx.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* ===== DARK OVERLAY (OPTIONAL BUT RECOMMENDED) ===== */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="flex flex-col  gap-7 lg:gap-8  lg:mx-auto mx-auto w-90 md:w-160 lg:w-200 xl:w-205.5 ">
            {/* Heading & Subtext */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="px-2.5 md:px-0 lg:px-0 xl:px-0 fontMon text-white font-bold text-[1.5rem] md:text-[3rem]  lg:text-[3.5rem]   xl:text-[4rem] leading-tight z-100">
                Powering <span className="text-[#FDC000]">Progress</span> with{" "}
                <br /> Modern Machinery
              </p>

              <motion.p
                className="px-2.5 md:px-0 lg:px-0 xl:px-0 text-white popins text-[0.5rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem] z-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                    Equipped with advanced machinery, we deliver efficient,
                    precise and dependable  results across all project
                    scales.
                  
                
              </motion.p>
            </motion.div>

            {/* Stats Box */}
            <motion.div
              className="px-2.5 md:px-0 lg:px-0 xl:px-0 w-full  z-300  h-[7vh] md:h-24  lg:h-35  xl:h-[19vh]  2xl:h-[17vh] bg-white [@media(min-width:300px)_and_(max-width:410px)]:rounded-md rounded-xl lg:rounded-2xl flex justify-evenly place-items-center"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {[
                ["Total Machines", "45+ Machines"],
                ["Availability", "Immediate"],
                ["Fleet Diversity", "Heavy Machinery"],
                ["Successful Projects", "185+ Projects"],
              ].map(([title, value], i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col  gap-[3px] md:gap-5 lg:gap-[20px] text-center">
                    <p className="popins-noweight [@media(min-width:300px)_and_(max-width:410px)]:text-[0.5rem] text-[0.6rem] md:text-[0.8rem] lg:text-[1.3rem] xl:text-[1.1rem] font-semibold text-[#333333]">
                      {title}
                    </p>
                    <p className="popins-noweight text-[0.4rem] md:text-[0.6rem] lg:text-[1rem] xl:text-[0.9rem] font-normal text-[#333333]">
                      {value}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="w-[1px] h-[40px] lg:h-[70px] bg-[#333333]" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ===== Section: Fleet Cards ===== */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className=" overflow-hidden bg-white py-10 md:py-20 flex flex-col gap-10"
        >
          {/* Section Title */}
          <motion.div
            className="  
        px-3 sm:px-5 xl:px-30  flex flex-col gap-2 w-fit   "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-[#333333] text-[1.4rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold underline decoration-[#FDC000] underline-offset-8 mb-6">
              Our Powerfull Machines
            </p>

            <div>
              <p className="popins-bold text-[1.6rem] md:text-[3rem] lg:text-[4rem] md:leading-14 lg:leading-[69px]">
                Power, Precision and <br /> Performance -{" "}
                <span className="text-[#FCD000]">All in One Fleet.</span>
              </p>
              {isMobile ? (
                <p className="text-[#333333] text-[0.8rem]">
                  A fleet engineered for strength, accuracy, and <br />{" "}
                  unmatched efficiency.Fleet deployed as per project scale and execution requirement
                </p>
              ) : (
                <p className="text-[#333333] md:text-[1.4rem] lg:text-[1rem]">
                  A fleet engineered for strength, accuracy, and unmatched
                  efficiency.Fleet deployed as per project scale and execution requirement
                </p>
              )}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div 
          // className="flex gap-x-8 gap-y-10 w-[85vw] md:w-[77vw] xl:w-[85vw] 2xl:w-[78vw] justify-between flex-wrap  mb-20"
          //
          className="  mx-auto
        px-3 sm:px-5 xl:px-30  gap-y-10 flex flex-wrap w-full justify-evenly md:justify-between lg:justify-evenly xl:justify-between"
           >
            {cardDetails.map((item, index) => (
              <motion.div
                key={index}
                // className="w-[85vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[100vh]   h-[50vh] md:h-[45vh] lg:w-[24vw] xl:w-[26vw] 2xl:w-[24vw] 2xl:h-[50vh] lg:h-[50vh] xl:h-[53vh] flex flex-col gap-2 lg:gap-5 xl:gap-3 2xl:gap-5 px-4 py-4 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                className="shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-lg flex flex-col gap-3 md:gap-6 lg:gap-4  md:w-85 p-3 w-full md:min-h-90 lg:p-5 lg:w-100 lg:h-100 xl:w-80 xl:h-85 2xl:gap-4 2xl:p-5 2xl:w-95 2xl:h-93"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  // className="h-[30vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] w-[80vw] lg:w-[22vw] lg:h-[30vh] xl:w-[24vw] xl:h-[33vh] 2xl:w-[22vw] 2xl:h-[30vh]"
                  className="w-full h-[70%] md:w-full md:h-[70%] lg:h-55 lg:w-90 xl:w-85 xl:h-56.5"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col gap-2 xl:gap-1 2xl:gap-2">
                  <p className="text-[#333333] text-[1.5rem] md:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-semibold fontMon">
                    {item.title}
                  </p>
                  <p className="text-[1rem] text-[#4D4D4D] md:text-[1rem] lg:text-[1rem] xl:text-[0.8rem] 2xl:text-[1rem] popins">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default Fleet;
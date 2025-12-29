import React from "react";
// import LandingBanner from "./LandingBanner";
// import ProjectVideoBanner from "./ProjectVideoBanner ";
import constructionImg from "../assets/cap.png";
import pillarImg from "../assets/pillarsOfTrustIMG.png";
import { Link } from "react-router-dom";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import CustomShape from "./CustomShape";
import "../CSS/ProjectVideoBanner.css";
import "../CSS/CustomShape.css";
import "../CSS/Landing.css";
import { Helmet } from "react-helmet";
import boxvideo from "/public/boxVideoTrimmed.mov";
import { useState, useEffect } from "react";
import fleet1 from "../assets/fleet-img1.png";
import fleet2 from "../assets/fleet-img2.png";
import fleet3 from "../assets/fleet-img3.png";
import fleet4 from "../assets/fleet-img4.png";
import fleet5 from "../assets/fleet-img5.png";
import fleet6 from "../assets/fleet-img6.png";
import fleet7 from "../assets/fleet-img7.png";
import fleet8 from "../assets/fleet-img8.png";
import fleet9 from "../assets/fleet-img9.png";
import fleet10 from "../assets/fleet-img10.png";
import Cards from "./Cards";
import c1 from "../assets/globalCard1.png";
import c2 from "../assets/globalCard2.png";
import c15 from "../assets/globalCard3.png";
import c14 from "../assets/globalCard4.png";
import c5 from "../assets/globalCard5.png";
import c6 from "../assets/globalCard6.png";
import c7 from "../assets/globalCard7.png";
import c8 from "../assets/globalCard8.png";
import c9 from "../assets/globalCard9.png";
import c10 from "../assets/globalCard10.png";
import c11 from "../assets/globalCard11.png";
import c12 from "../assets/globalCard12.png";
import c13 from "../assets/globalCard13.png";
import c4 from "../assets/globalCard14.png";
import c3 from "../assets/globalCard15.png";
// import v1 from "../assets/v1.mp4";
// import v2 from "../assets/v2.mp4";
// import v3 from "../assets/v3.mp4";
// import v4 from "../assets/v4.mp4";
// import v5 from "../assets/v5.mp4";
// import constructionVideo from "/src/videos/constructionVideo.mov";

const Landing = () => {
  const [applyEffect, setApplyEffect] = useState(false);
  let [projectVideo, setProjectVideo] = useState(
    "https://res.cloudinary.com/dtculdtll/video/upload/v1766573110/MarkSquareProjectVideo_nkguhx.mp4"
  );
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
    const handleScroll = () => {
      const banner = document.getElementById("landingBanner");
      if (!banner) return;

      if (window.scrollY > 300) {
        banner.classList.add("bg-visible");
      } else {
        banner.classList.remove("bg-visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    handleResize(); // Run once when mounted
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("secondSection");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      // When secondSection touches or crosses the top
      if (rect.top <= 0) {
        window.dispatchEvent(new Event("sectionReachedTop"));
      } else {
        window.dispatchEvent(new Event("sectionLeftTop"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Counter = ({ from = 0, to, duration = 1.2 }) => {
    const [value, setValue] = useState(from);
    const count = useMotionValue(from);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
      if (inView) {
        const controls = animate(count, to, {
          duration,
          ease: "linear",
          onUpdate: (latest) => setValue(Math.floor(latest)),
        });
        return controls.stop;
      }
    }, [inView, count, to, duration]);

    return <motion.span ref={ref}>{value}</motion.span>;
  };

  return (
    <>
      <Helmet>
        <title>SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra PROJECTS is a 3rd generation family-run business..."
        />
        <link rel="canonical" href="https://svbinfraprojects.com" />
      </Helmet>
      <div className=" bg-transparent w-full ">
        <div
          className={`w-full  [@media(min-width:650px)_and_(max-width:1200px)]:h-[94vh]  h-[75vh] md:h-[45vh] lg:h-[88vh] transition-all duration-700 px-2.5 md:px-8 lg:px-15 xl:px-30
  ${applyEffect ? "banner-active" : ""}`}
        >
          <div
            className=" 
               flex flex-col justify-center w-full"
          >
            {/* Text Block */}
            <motion.div
              className="flex  w-full flex-col gap-[calc(0.5rem+0.4vw)] md:gap-[1vh] lg:gap-[calc(0.5rem+0.4vw)] z-800 [@media(min-width:2500px)]:gap-[4vh]"
              initial={{ opacity: 0, y: 10 }} // small movement
              whileInView={{ opacity: 1, y: 0 }} // trigger on scroll
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.p
                // className="text-[calc(1.2rem+1vw)] md:text-[3.2rem] lg:text-[calc(2.5rem+1.5vw)] xl:text-[4rem] text-white aboutCom font-bold leading-[calc(1.8rem+0.6vw)] md:leading-16 lg:leading-[calc(3rem+1vw)]  xl:leading-[78px] [@media(min-width:2500px)]:text-[6rem] [@media(min-width:2500px)]:leading-28"
                className="fontMon text-white font-bold text-[1.7rem] leading-9 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[4rem] xl:leading-19"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Building the Future with <br />
                <span className="text-[#FDC000]">Strength & Precision</span>
              </motion.p>

              {/* Subtext */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                
                  <p 
                  // className="text-white text-[1.3rem] popins [@media(min-width:2500px)]:text-[2rem]"
                  className="text-white popins text-[0.9rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem]"
                  >
                    Delivering reliable infrastructure solutions with modern
                    machinery <br /> and expert execution.
                  </p>
                
              </motion.div>
            </motion.div>

            {/* Button Animation */}
            <Link to="/our-fleet-2" className="block z-400 customCursor">
              <motion.button
                // className="w-[30vw] [@media(min-width:300px)_and_(max-width:460px)]:h-[4.9vh] md:w-[25vw] md:h-[6vh] xl:w-[9vw] 2xl:w-[9vw] 2xl:h-[6vh] [@media(min-width:2500px)]:h-[6vh]  lg:w-[9vw] lg:h-[6vh] z-999 rounded-md text-[0.7rem] px-3 lg:px-0 lg:py-0 py-2 bg-[#FDC000] lg:rounded-md md:text-[1.3rem] lg:text-[19px] [@media(min-width:2500px)]:text-[25px] popins-noweight font-semibold mt-[2.5rem]"
                className="mt-6 md:mt-10 bg-[#FDC000] z-999 rounded-md popins font-semibold text-[0.6rem] h-7 w-26 md:text-[1rem] md:h-9 md:w-35 lg:text-[1rem] lg:h-10 lg:w-42 xl:text-[1.3rem] xl:h-11.5 xl:w-43.5 "
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Fleet
              </motion.button>
            </Link>
          </div>
        </div>

        {/* <ProjectVideoBanner></ProjectVideoBanner> */}

        <div
          id="secondSection"
          className="w-full flex flex-col  px-2.5 md:px-8 lg:px-15 xl:px-30 gap-15 md:gap-25   bg-[#F8F8F8] py-10 md:py-25"
        >
          <div className=" flex   flex-col gap-5 md:gap-7 ">
            <section className="flex flex-row w-full    text-gray-800 ">
              {/* === VIDEO === */}
              <motion.div
              className="w-[60%] sm:w-[50%] lg:w-[50%] xl:w-[45%] min-h-[35vh] [@media(min-width:500px)_and_(max-width:639px)]:min-h-[37vh] sm:min-h-[47vh] md:h-130 lg:h-160 xl:min-h-150 2xl:min-h-160 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <video
                  // src={boxvideo}
                  // src="https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171762/Boxvideo_m3mcys.mp4"
                  src="https://res.cloudinary.com/dtculdtll/video/upload/v1766572285/boxVideoTrimmed_naarfb.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  // className="rounded-2xl shadow-lg [@media(min-width:650px)_and_(max-width:1200px)]:h-[95vh]  [@media(min-width:1300px)_and_(max-width:1490px)]:h-[70vh]  w-[50vw] h-[32vh] lg:w-[40vw] xl:w-[40vw] xl:h-[84vh] lg:h-[84vh] 2xl:w-[40vw] 2xl:h-[84vh] [@media(min-width:2500px)]:h-[80vh]  object-cover"
                  // className="rounded-2xl  shadow-lg w-[50vw] h-[35vh] md:w-100 md:h-130  lg:w-150 lg:h-150 xl:w-full xl:h-155 object-cover"
                  className="rounded-2xl w-full shadow-lg h-full  object-cover"
                />
              </motion.div>

              {/* === TEXT SECTION === */}
              <motion.div
                className="lg:w-[33vw]  w-[50vw] xl:w-[39vw] 2xl:w-[33vw] h-fit flex flex-col "
               
                viewport={{ once: true, amount: 0.4 }}
              >
                <p 
                // className="fontMon bg-[#F8F8F8]  z-300 [@media(min-width:300px)_and_(max-width:410px)]:text-[1.3rem]  mobile:absolute mobile:top-[5%] mobile:left-[5%] lg:leading-20 xl:leading-19 2xl:leading-19 text-[1.5rem] xl:text-[4rem] 2xl:text-[4rem] md:text-[2rem] leading-7 md:leading-10 lg:py-1 lg:px-2 rounded-bl-2xl -ml-20 p-2 lg:-ml-56  text-[#333333] lg:text-[4rem] font-bold [@media(min-width:2500px)]:leading-28 [@media(min-width:2500px)]:text-[6rem] "
                className="text-[#333333] fontMon bg-[#F8F8F8] p-2 rounded-b-2xl z-300 font-bold [@media(min-width:300px)_and_(max-width:410px)]:text-[1.3rem] [@media(min-width:300px)_and_(max-width:410px)]:leading-7 text-[1.5rem] leading-8 -ml-20 md:text-4xl md:leading-12 md:-ml-40 sm:text-3xl lg:text-5xl lg:leading-15 lg:-ml-48  xl:text-6xl xl:leading-19 xl:-ml-52"
                >
                  Great Relationships
                  <br /> Greater
                  <span className="text-[#FDC000] ml-2 md:ml-4">Infrastructure</span>
                </p>

                <div 
                // className="flex flex-col  lg:place-items-end xl:place-items-start 2xl:place-items-end gap-4 px-2 pt-2 lg:pt-10 xl:pt-5 2xl:pt-10"
                className="flex flex-col   my-2 md:my-5 gap-5 md:gap-5 lg:gap-8 xl:gap-10 pl-2 md:pl-3 lg:pl-5 [@media(min-width:300px)_and_(max-width:410px)]:w-[45vw] w-full  xl:pl-5  "
                >
                  <p 
                  // className="text-[#4D4D4D] popins [@media(min-width:300px)_and_(max-width:410px)]:w-[45vw]    md:w-[32vw] lg:w-[32vw] xl:w-[39vw] 2xl:w-[32vw]  [@media(min-width:300px)_and_(max-width:410px)]:text-[7px] text-[0.5rem] md:text-[0.8rem] lg:text-[1.25rem]   xl:text-[1.1rem] 2xl:text-[1.2rem] [@media(min-width:720px)_and_(max-width:1200px)]:pl-4 lg:pl-5 xl:pl-0  [@media(min-width:2500px)]:text-[2rem]"
                  className="text-[#4D4D4D] popins [@media(min-width:300px)_and_(max-width:410px)]:text-[6px] [@media(min-width:300px)_and_(max-width:410px)]:leading-2.5 text-[0.5rem] sm:text-[0.9rem] sm:leading-6 md:text-[1rem] md:leading-5.5 lg:text-[1rem] leading-3 lg:leading-6 xl:text-lg 2xl:text-xl 2xl:leading-8 xl:leading-7 text-justify"
                  >
                    <span className="font-semibold mr-1 md:mr-2">
                      SVB Infra Projects
                    </span>
                    is a 3rd generation family-run business. SVB has been
                    managing earthmoving projects since 2003. Based in
                    Karnataka  and Andhra Pradesh, we provide a fast, flexible, reliable and
                    professional service statewide. We offer contract
                    earthmoving services across the state providing a
                    professional and reliable service to the main and sub
                    contract civil engineering sector. We have had over 22
                    years’ experience for total excavation solution. We work
                    with some of the biggest names in construction and civil
                    engineering sector.
                  </p>

                  {/* Button animation */}
                  <Link to="/about-us" className="flex w-full justify-end">
                    <motion.button
                      className="popins-noweight text-[#333333] font-semibold bg-[#FDC000] rounded-md text-[8px] md:text-xl md:rounded-lg w-20 h-7 md:w-30 md:h-10 lg:w-35 lg:h-10 xl:w-37 xl:h-12"
                  initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Know More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </section>

            {/* === COUNTER BOXES === */}
            <motion.div
              // className="flex border-2 gap-3 md:gap-5 [@media(min-width:300px)_and_(max-width:410px)]:my-6 my-10    lg:my-2 xl:my-3 2xl:my-2 [@media(min-width:2500px)]:my-8  [@media(min-width:650px)_and_(max-width:1200px)]:pl-10  "
              className="flex [@media(min-width:300px)_and_(max-width:410px)]:gap-2 gap-4 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Box 1 */}
              <div 
              // className="border [@media(min-width:300px)_and_(max-width:410px)]:w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[15vh] [@media(min-width:300px)_and_(max-width:410px)]:h-[6vh] lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] xl:w-[15vw] 2xl:w-[12vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center [@media(min-width:2500px)]:h-[9vh]"
              className="flex place-items-center  justify-evenly [@media(min-width:300px)_and_(max-width:410px)]:rounded-md rounded-lg border md:border-2 border-[#FDC000] [@media(min-width:300px)_and_(max-width:410px)]:h-[5.5vh] [@media(min-width:300px)_and_(max-width:410px)]:w-[35vw] w-35 h-12 md:w-45 md:h-16 lg:w-50 lg:h-19 xl:w-54 xl:h-21"
              >
                <p 
                // className="popins text-lg [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] md:text-[1.5rem] lg:text-3xl  font-semibold [@media(min-width:2500px)]:text-[2.2rem]"
                className="popins font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] text-[1rem] md:text-[1.2rem]  lg:text-[1.5rem]  xl:text-[2rem]"
                >
                  <Counter from={0} to={185} duration={1.2} />+
                </p>
                <p 
                // className="popins font-medium text-[9px] md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start [@media(min-width:2500px)]:text-[1.2rem]"
                className="popins text-[#4D4D4D] font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[9px] text-[0.7rem] md:text-[0.9rem] lg:text-lg xl:text-xl"
                >
                  Successfull <br /> Project
                </p>
              </div>

              {/* Box 2 */}
              <div className="flex place-items-center  justify-evenly [@media(min-width:300px)_and_(max-width:410px)]:rounded-md rounded-lg border md:border-2 border-[#FDC000] [@media(min-width:300px)_and_(max-width:410px)]:h-[5.5vh] [@media(min-width:300px)_and_(max-width:410px)]:w-[35vw]  w-35 h-12 md:w-45 md:h-16 lg:w-50 lg:h-19 xl:w-54 xl:h-21">
                <p className="popins font-semibold  [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] text-[1rem] md:text-[1.2rem]  lg:text-[1.5rem]  xl:text-[2rem]">
                  <Counter from={0} to={45} duration={1.5} />+
                </p>
                <p className="popins text-[#4D4D4D] font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[9px] text-[0.7rem] md:text-[0.9rem] lg:text-lg xl:text-xl">
                  Machines <br /> Equipments
                </p>
              </div>

              {/* Box 3 */}
              <div className="flex place-items-center  justify-evenly [@media(min-width:300px)_and_(max-width:410px)]:rounded-md rounded-lg border md:border-2 [@media(min-width:300px)_and_(max-width:410px)]:gap-1 border-[#FDC000] [@media(min-width:300px)_and_(max-width:410px)]:h-[5.5vh] [@media(min-width:300px)_and_(max-width:410px)]:w-[35vw]  w-35 h-12 md:w-45 md:h-16 lg:w-50 lg:h-19 xl:w-54 xl:h-21">
                <p className="popins font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] text-[1rem] md:text-[1.2rem]  lg:text-[1.5rem]  xl:text-[2rem]">
                  24/7
                </p>
                <p className="popins text-[#4D4D4D] font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[9px] text-[0.7rem] md:text-[0.9rem] lg:text-lg xl:text-xl">
                  Anywhere <br /> Assistance
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full  flex flex-col gap-10 bg-[#F8F8F8] ">
            {/* Animated Heading */}
            <motion.p
              className="fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Pillars of Trust
            </motion.p>

            {/* Animated Image */}
            <motion.img
              src={pillarImg}
              className="w-full sm:h-80 md:h-115 lg:h-150 xl:h-170 2xl:h-180.5"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              alt="Pillars of Trust"
            />
          </div>
          <div className="w-full flex flex-col gap-5 md:gap-10 ">
            {/* ===== Heading ===== */}
            <motion.p
              className="fontMon   lg:text-[2rem] text-[1.2rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Our Fleet
            </motion.p>

            <div className="flex flex-col   lg:flex-row lg:mx-0  gap-7 lg:gap-10  lg:h-70 xl:h-80 ">
              {/* ===== LEFT TEXT CONTENT ===== */}
              <motion.div
                className="flex flex-col w-full  place-items-start  xl:w-[43vw] 2xl:w-[40vw] lg:w-[40vw] gap-4 lg:gap-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p 
                // className="fontMon bold leading-8 md:leading-12 lg:leading-19 text-[#333333] text-[1.5rem] md:text-[2.5rem] xl:text-[4rem] 2xl:text-[4rem] [@media(min-width:2500px)]:text-[6rem] [@media(min-width:2500px)]:leading-24 lg:text-[4rem] font-bold text-start lg:text-start bg-[#F8F8F8]"
                className="fontMon font-bold text-[#333333] text-start text-[1.8rem] leading-8 md:text-[3.5rem] md:leading-15 lg:leading-14 lg:text-[2.7rem] xl:text-[3.7rem] xl:leading-15 2xl:leading-15 2xl:text-[3.7rem]"
                >
                  Force Behind <br /> Every
                  <span className="text-[#FDC000] ml-2">Foundation</span>
                </p>

                <p 
                // className="text-[#4D4D4D] text-[0.8rem] md:text-[1.3rem] lg:leading-8 lg:text-[1.3rem] font-medium text-start lg:text-start [@media(min-width:2500px)]:text-[2rem] [@media(min-width:2500px)]:leading-12"
                className="text-[#4D4D4D] text-start font-semibold text-[0.7rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.3rem]"
                >
                  Starting out with only one JCB 3D, we now keep a well-
                 
                  maintained fleet of trucks and equipment.
                </p>

                {/* Button — static now */}
                <Link to="/our-fleet-2">
                  <button 
                  // className="popins-noweight text-[#333333] font-semibold text-[calc(0.8rem+0.3vw)] bg-[#FDC000] lg:text-[20px] w-[20vw] h-[3vh] lg:w-[9vw] lg:h-[6vh] rounded-md hover:bg-[#ffcf33] transition-all duration-300"
                  className="popins-noweight text-[#333333] font-semibold bg-[#FDC000] rounded-md text-[8px] md:text-xl md:rounded-lg w-20 h-7 md:w-30 md:h-10 lg:w-35 lg:h-10 xl:w-37 xl:h-12"
                  >
                    Explore All
                  </button>
                </Link>
              </motion.div>

              {/* ===== RIGHT IMAGE SCROLLER ===== */}
              <motion.div
                id="cont-fleet-img"
                className="relative  mx-auto flex w-[95vw] md:w-full lg:w-[50%]  overflow-hidden md:px-8 lg:px-0 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              > 
                <div className="flex  animate-fleet-scroll gap-6 will-change-transform">
                  {[
                    fleet1,
                    fleet2,
                    fleet3,
                    fleet4,
                    fleet5,
                    fleet6,
                    fleet7,
                    fleet8,
                    fleet9,
                    fleet10,
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="object-cover md:w-70 lg:w-70 xl:w-70 h-30 w-50 md:h-50 lg:h-full"
                    />
                  ))}
                  {[
                    fleet1,
                    fleet2,
                    fleet3,
                    fleet4,
                    fleet5,
                    fleet6,
                    fleet7,
                    fleet8,
                    fleet9,
                    fleet10,
                  ].map((src, i) => (
                    <img
                      key={i + 10}
                      src={src}
                      className="object-cover md:w-70 lg:w-70 xl:w-70 h-30 w-50 md:h-50 lg:h-full"
                      
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          <div className=" overflow-x-hidden">
            <div className="custom-shape-container">
              <video
                src={projectVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="  flex w-full py-2 lg:py-6 relative ">
              {isMobile ? (
                <p className="text-[#4D4D4D]  w-[45vw] text-justify  popins  text-[8px] lg:text-[16px]  lg:mt-5 font-semibold ">
                  We have successfully completed a wide range of earthwork and
                  excavation projects for leading clients across Karnataka and Andhra Pardesh. Our
                  portfolio includes residential, commercial, and infrastructure
                  developments delivered with quality and precision.
                </p>
              ) : (
                <p className="text-[#4D4D4D] w-[48%] text-justify popins [@media(min-width:650px)_and_(max-width:1200px)]:text-[0.9rem]  text-[0.6rem] lg:text-[1.5rem] lg:mt-3 font-semibold ">
                  We have successfully completed a wide range of 
                  earthwork and excavation projects for leading  clients
                  across Karnataka and Andhra Pardesh.  Our portfolio includes  residential,
                  commercial,   and infrastructure developments delivered
                  with quality and precision.
                </p>
              )}
              <div 
              className="absolute overflow-hidden -top-4 w-full left-[65%]  md:left-[60%] md:-top-10  lg:left-[55%] lg:-top-24  xl:left-[55%] xl:-top-20"
              // className="absolute -top-4  md:-top-10 lg:-top-24 xl:-top-20"
              >
                <div className="flex lg:gap-x-6 gap-x-2 animate-fleet-scroll ">
                  {[
                    {
                      src: c1,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573121/VellaraJunctionProjectVideo_uhiyic.mp4",
                    },
                    {
                      src: c2,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573114/ProjectVideo_rw8gt4.mp4",
                    },
                    {
                      src: c3,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573111/MarkSquare_iinsjt.mp4",
                    },
                    {
                      src: c4,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573110/MarkSquareProjectVideo_nkguhx.mp4",
                    },
                    {
                      src: c5,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766572285/boxVideoTrimmed_naarfb.mov",
                    },
                    {
                      src: c6,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766571856/LandingVideoTrimmed_yj2zr6.mp4",
                    },
                    {
                      src: c7,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573121/VellaraJunctionProjectVideo_uhiyic.mp4",
                    },
                    {
                      src: c8,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573114/ProjectVideo_rw8gt4.mp4",
                    },
                    {
                      src: c9,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573111/MarkSquare_iinsjt.mp4",
                    },
                    {
                      src: c10,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573110/MarkSquareProjectVideo_nkguhx.mp4",
                    },
                    {
                      src: c11,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766572285/boxVideoTrimmed_naarfb.mov",
                    },
                    {
                      src: c12,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766571856/LandingVideoTrimmed_yj2zr6.mp4",
                    },
                    {
                      src: c13,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573121/VellaraJunctionProjectVideo_uhiyic.mp4",
                    },
                    {
                      src: c14,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573114/ProjectVideo_rw8gt4.mp4",
                    },
                    {
                      src: c15,
                      video:
                        "https://res.cloudinary.com/dtculdtll/video/upload/v1766573111/MarkSquare_iinsjt.mp4",
                    },
                  ].map((item, index) => (
                    <img
                      key={index}
                      src={`${item.src}`}
                      onClick={() => setProjectVideo(item.video)}
                      alt=""
                      className="[@media(min-width:650px)_and_(max-width:1200px)]:w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[20vh] w-[17vw] h-[10vh] lg:w-[20vw] lg:h-[47vh] xl:min-w-[240px] xl:h-fit object-cover 
           transition-transform duration-300 hover:scale-115 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            id="landing-contact"
            // className="lg:w-[80vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[30vh] [@media(min-width:2500px)]:my-[2vh] rounded-md  w-[95vw]   text-white md:h-[23vh] lg:h-[37vh]   flex  place-items-center justify-evenly gap-4 md:gap-[4.2rem] lg:gap-70 z-200"
            className="relative flex justify-evenly  place-items-center z-200 text-white h-30  md:h-50  lg:h-70  xl:h-74 rounded-md"
          >
            <div className="">
              <p 
              // className="text-[0.8rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[0.7rem] md:text-[1.7rem] lg:text-[1.5rem] popins-bold "
              className="popins-bold text-[0.7rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[2rem]"
              >
                Let's Build Your Next Project Together
              </p>
              <p 
              // className="fontMon [@media(min-width:300px)_and_(max-width:410px)]:text-[1.3rem] font-bold text-[1.2rem] md:text-[2rem] lg:text-[3.5rem]"
              className="fontMon font-bold md:text-[2.5rem] lg:text-[3.4rem] xl:text-[4rem]"
              >
                Contact  Us!
              </p>
            </div>
            <Link to="/contact">
              <motion.button
                className=" bg-[#FDC000] z-999 rounded-md popins font-semibold text-[0.6rem] h-7 w-20 md:text-[1rem] md:h-9 md:w-35 lg:text-[1rem] lg:h-10 lg:w-42 xl:text-[1.3rem] xl:h-11.5 xl:w-43.5 "
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
        </div>
      </div>
    </>
  );
};

export default Landing;

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
import boxvideo from "../videos/Boxvideo.mp4";
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
    "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4"
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
      <div className=" bg-transparent ">
        {/* <LandingBanner></LandingBanner> */}
        <div
          // id="landingBanner"
          className={`w-screen  [@media(min-width:650px)_and_(max-width:1200px)]:h-[94vh]  h-[75vh] md:h-[45vh] lg:h-[88vh] transition-all duration-700 
  ${applyEffect ? "banner-active" : ""}`}
        >
          <div
            className=" pl-[calc(1.5rem+1vw)] 
               lg:pt-[calc(6rem+1vw)] lg:pl-32 
               flex flex-col justify-center "
          >
            {/* Text Block */}
            <motion.div
              className="flex flex-col gap-[calc(0.5rem+0.4vw)] md:gap-[1vh] lg:gap-[calc(0.5rem+0.4vw)] z-800"
              initial={{ opacity: 0, y: 10 }} // small movement
              whileInView={{ opacity: 1, y: 0 }} // trigger on scroll
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.p
                className="text-[calc(1.2rem+1vw)] md:text-[3.2rem] lg:text-[calc(2.5rem+1.5vw)] text-white aboutCom font-bold leading-[calc(1.8rem+0.6vw)] md:leading-16 lg:leading-[calc(3rem+1vw)]"
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
                {isMobile ? (
                  <p className="text-white w-[88%] text-[calc(0.9rem+0.3vw)] popins leading-[calc(1.4rem+0.3vw)]">
                    Delivering reliable infrastructure solutions with modern
                    machinery and expert execution.
                  </p>
                ) : (
                  <p className="text-white text-[1.3rem] popins">
                    Delivering reliable infrastructure solutions with modern
                    machinery <br /> and expert execution.
                  </p>
                )}
              </motion.div>
            </motion.div>

            {/* Button Animation */}
            <Link to="/our-fleet-2" className="block z-400 customCursor">
              <motion.button
                className="w-[30vw] [@media(min-width:300px)_and_(max-width:460px)]:h-[4.9vh] md:w-[25vw] xl:w-[15vw] 2xl:w-[10vw] 2xl:h-[7vh]  lg:w-[10vw] lg:h-[7vh] z-999 rounded-md text-[0.7rem] px-3 lg:px-0 lg:py-0 py-2 bg-[#FDC000] lg:rounded-md md:text-[1.3rem] lg:text-[20px] popins-noweight font-semibold mt-[2.5rem]"
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
          className="flex flex-col [@media(min-width:650px)_and_(max-width:1200px)]:gap-[30vh]   gap-[10vh] md:gap-[5vh] lg:gap-[7.6rem] pt-[10vh] md:pt-150vh]  py-15 lg:pb-30   bg-[#F8F8F8]"
        >
          <div>
            <section className="flex flex-row w-full px-4 lg:mx-0  lg:justify-center text-gray-800 ">
              {/* === VIDEO === */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <video
                  // src={boxvideo}
                  src="https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171762/Boxvideo_m3mcys.mp4"
                  //  src="https://www.dropbox.com/scl/fi/of9fvfwuakx55meeokabt/boxVideo.MOV?rlkey=ufy3suzkctcwu33gxusr467s9&raw=1"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-2xl shadow-lg [@media(min-width:650px)_and_(max-width:1200px)]:h-[95vh]  w-[50vw] h-[32vh] lg:w-[40vw] xl:w-[40vw] xl:h-[85vh] lg:h-[84vh] 2xl:w-[40vw] 2xl:h-[84vh]  object-cover"
                />
              </motion.div>

              {/* === TEXT SECTION === */}
              <motion.div
                className="lg:w-[33vw]  w-[50vw] xl:w-[39vw] 2xl:w-[33vw] h-fit flex flex-col "
               
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="fontMon bg-[#F8F8F8]  z-300 [@media(min-width:300px)_and_(max-width:410px)]:text-[1.3rem]  mobile:absolute mobile:top-[5%] mobile:left-[5%] lg:leading-20 xl:leading-16 2xl:leading-20 text-[1.5rem] xl:text-[3rem] 2xl:text-[4rem] md:text-[2rem] leading-7 md:leading-10 lg:py-0 lg:px-2 rounded-bl-2xl -ml-20 p-2 lg:-ml-56  text-[#333333] lg:text-[4rem] font-semibold">
                  Great Relationships
                  <br /> Great
                  <span className="text-[#FDC000] ml-2 md:ml-4">Infrastructure</span>
                </p>

                <div className="flex flex-col  lg:place-items-end xl:place-items-start 2xl:place-items-end gap-4 px-2 pt-2 lg:pt-10 xl:pt-5 2xl:pt-10">
                  <p className="text-[#4D4D4D] popins [@media(min-width:300px)_and_(max-width:410px)]:w-[45vw]    md:w-[32vw] lg:w-[32vw] xl:w-[39vw] 2xl:w-[32vw] [@media(min-width:300px)_and_(max-width:410px)]:text-[7px] text-[0.5rem] md:text-[0.8rem] lg:text-[1.25rem] xl:text-[1.1rem] 2xl:text-[1.25rem] [@media(min-width:720px)_and_(max-width:1200px)]:pl-4 lg:pl-5">
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
                      className="popins mr-3 px-[calc(0.8rem+0.5vw)] py-[calc(0.4rem+0.3vw)] [@media(min-width:300px)_and_(max-width:410px)]:text-[7px] text-[calc(0.8rem+0.3vw)] bg-[#FDC000] rounded-md hover:bg-[#ffcf33] transition-all duration-300"
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
              className="flex gap-3 md:gap-5 [@media(min-width:300px)_and_(max-width:410px)]:my-6 my-10  mx-auto lg:mx-0 lg:my-2 xl:my-2 2xl:my-2 pl-[3vw] [@media(min-width:650px)_and_(max-width:1200px)]:pl-10  md:pl-34"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Box 1 */}
              <div className="border [@media(min-width:300px)_and_(max-width:410px)]:w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[15vh] [@media(min-width:300px)_and_(max-width:410px)]:h-[6vh] lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] xl:w-[15vw] 2xl:w-[12vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
                <p className="popins text-lg [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] md:text-[1.5rem] lg:text-3xl font-semibold">
                  <Counter from={0} to={185} duration={1.2} />+
                </p>
                <p className="popins font-medium text-[9px] md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start">
                  Successfull <br /> Project
                </p>
              </div>

              {/* Box 2 */}
              <div className="border [@media(min-width:650px)_and_(max-width:1200px)]:h-[15vh] [@media(min-width:300px)_and_(max-width:410px)]:w-[30vw] [@media(min-width:300px)_and_(max-width:410px)]:h-[6vh] lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] xl:w-[15vw] 2xl:w-[12vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
                <p className="popins text-lg [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] md:text-[1.5rem] lg:text-3xl font-semibold">
                  <Counter from={0} to={45} duration={1.5} />+
                </p>
                <p className="popins font-medium text-[9px]  md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start">
                  Machines <br /> Equipments
                </p>
              </div>

              {/* Box 3 */}
              <div className="border [@media(min-width:650px)_and_(max-width:1200px)]:h-[15vh] lg:border-2 border-[#FDC000] rounded-md flex [@media(min-width:300px)_and_(max-width:410px)]:w-[30vw] [@media(min-width:300px)_and_(max-width:410px)]:h-[6vh] lg:w-[12vw] w-[27vw] xl:w-[15vw] 2xl:w-[12vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
                <p className="popins [@media(min-width:300px)_and_(max-width:410px)]:text-[0.9rem] text-lg md:text-[1.5rem] lg:text-3xl font-semibold">
                  24/7
                </p>
                <p className="popins font-medium text-[9px]   md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start">
                  Anywhere <br /> Assistance
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 bg-[#F8F8F8]">
            {/* Animated Heading */}
            <motion.p
              className="fontMon text-[1.2rem] lg:text-[1.9rem] lg:pl-34 pl-[1.9rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
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
              className="lg:w-[75vw] lg:h-[90vh] mx-4 lg:mx-auto"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              alt="Pillars of Trust"
            />
          </div>
          <div className="w-full flex flex-col gap-15 lg:gap-10">
            {/* ===== Heading ===== */}
            <motion.p
              className="fontMon pl-[1.9rem] lg:pl-34 lg:text-[1.9rem] text-[1.2rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Our Fleet
            </motion.p>

            <div className="flex flex-col  lg:flex-row lg:mx-30 xl:mx-30 2xl:mx-30  gap-7 lg:gap-5 lg:my-5">
              {/* ===== LEFT TEXT CONTENT ===== */}
              <motion.div
                className="flex flex-col w-screen  place-items-center lg:place-items-start xl:w-[43vw] 2xl:w-[40vw] lg:w-[40vw] gap-4 lg:py-10 lg:gap-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="fontMon bold leading-9 md:leading-12 lg:leading-18 text-[#333333] text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[4rem] lg:text-[4rem] font-bold text-center lg:text-start bg-[#F8F8F8]">
                  Force Behind <br /> Every
                  <span className="text-[#FDC000]">Foundation</span>
                </p>

                <p className="text-[#4D4D4D] text-[0.8rem] md:text-[1.3rem] lg:text-[1rem] font-medium text-center lg:text-start">
                  Starting out with only one JCB 3D, we now keep a well-
                  <br />
                  maintained fleet of trucks and equipment.
                </p>

                {/* Button — static now */}
                <Link to="/our-fleet-2">
                  <button className="popins px-[calc(0.8rem+0.5vw)] py-[calc(0.4rem+0.3vw)] text-[calc(0.8rem+0.3vw)] bg-[#FDC000] rounded-md hover:bg-[#ffcf33] transition-all duration-300">
                    Explore All
                  </button>
                </Link>
              </motion.div>

              {/* ===== RIGHT IMAGE SCROLLER ===== */}
              <motion.div
                id="cont-fleet-img"
                className="relative  mx-auto flex w-[95vw] lg:w-[40vw]  overflow-hidden "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              > 
                <div className="flex  animate-fleet-scroll gap-10 will-change-transform">
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
                      className="[@media(min-width:650px)_and_(max-width:1200px)]:h-[40vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[55vh] lg:w-[18vw] lg:h-[43vh] md:w-[46vw] md:h-[20vh] w-[46vw] h-[20vh] object-cover"
                      loading="lazy"
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
                      className="[@media(min-width:650px)_and_(max-width:1200px)]:h-[40vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[55vh] lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh] object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          <div className="pl-4 md:pl-34 ">
            <div className="custom-shape-container">
              {/* Put anything inside this shape */}
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
                <p className="text-[#4D4D4D]  w-[45vw]  popins  text-[8px] lg:text-[16px]  lg:mt-5 font-semibold ">
                  We have successfully completed a wide range of earthwork and
                  excavation projects for leading clients across Karnataka and Andhra Pardesh. Our
                  portfolio includes residential, commercial, and infrastructure
                  developments delivered with quality and precision.
                </p>
              ) : (
                <p className="text-[#4D4D4D] w-[50%] popins [@media(min-width:650px)_and_(max-width:1200px)]:text-[0.9rem]  text-[0.6rem] lg:text-[1.5rem] lg:mt-3 font-semibold ">
                  We have successfully completed a wide range of 
                  earthwork and excavation projects for leading  clients
                  across Karnataka and Andhra Pardesh.  Our portfolio includes  residential,
                  commercial,   and infrastructure developments delivered
                  with quality and precision.
                </p>
              )}
              <div className="absolute [@media(min-width:650px)_and_(max-width:1200px)]:left-[55vw] [@media(min-width:720px)_and_(max-width:1200px)]:w-[25vw]   left-[68vw] md:left-[50.2vw] lg:left-[54.2vw] -top-[6vw]  md:-top-[6vw] lg:-top-[7vw] lg:w-[37vw] py-2 lg:py-4  overflow-hidden ">
                <div className="flex lg:gap-x-6 gap-x-2 animate-fleet-scroll ">
                  {[
                    {
                      src: c1,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171762/Boxvideo_m3mcys.mp4",
                    },
                    {
                      src: c2,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765175406/MarkSquareProjectVideo_v7fof2.mp4",
                    },
                    {
                      src: c3,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765175519/VellaraJunctionProjectVideo_wsgwwi.mp4",
                    },
                    {
                      src: c4,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4",
                    },
                    {
                      src: c5,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171762/Boxvideo_m3mcys.mp4",
                    },
                    {
                      src: c6,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765175618/ProjectVideo_regqnp.mp4",
                    },
                    {
                      src: c7,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4",
                    },
                    {
                      src: c8,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171762/Boxvideo_m3mcys.mp4",
                    },
                    {
                      src: c9,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765175618/ProjectVideo_regqnp.mp4",
                    },
                    {
                      src: c10,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1764770035/v4_c2f1o6.mp4",
                    },
                    {
                      src: c11,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765171912/LandingVideoTrimmed_i8mru3.mp4",
                    },
                    {
                      src: c12,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765175618/ProjectVideo_regqnp.mp4",
                    },
                    {
                      src: c13,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765175406/MarkSquareProjectVideo_v7fof2.mp4",
                    },
                    {
                      src: c14,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1765177074/MarkSquare_xiglio.mp4",
                    },
                    {
                      src: c15,
                      video:
                        "https://res.cloudinary.com/dsf0pohxi/video/upload/v1764770035/v4_c2f1o6.mp4",
                    },
                  ].map((item, index) => (
                    <img
                      key={index}
                      src={`${item.src}`}
                      onClick={() => setProjectVideo(item.video)}
                      alt=""
                      className="[@media(min-width:650px)_and_(max-width:1200px)]:w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[20vh] w-[17vw] h-[10vh] lg:w-[20vw] lg:h-[47vh] object-cover 
           transition-transform duration-300 hover:scale-115 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div
            id="landing-contact"
            className="lg:w-[78vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[30vh]  rounded-md  w-[95vw] px-3 lg:px-0  text-white md:h-[23vh] lg:h-[37vh]  mx-auto flex  place-items-center justify-evenly gap-4 md:gap-[4.2rem] lg:gap-70 z-200"
          >
            <div className="">
              <p className="text-[0.8rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[0.7rem] md:text-[1.7rem] lg:text-[1.5rem] popins-bold ">
                Let's Build Your Next Project Together
              </p>
              <p className="fontMon [@media(min-width:300px)_and_(max-width:410px)]:text-[1.3rem] font-bold text-[1.2rem] md:text-[2rem] lg:text-[3.5rem]">
                Contact  Us!
              </p>
            </div>
            <Link to="/contact">
              <motion.button
                className="lg:w-[calc(9vw+0px)] [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] md:w-[18vw] w-[calc(17vw+0px)] 
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
        </div>
      </div>
    </>
  );
};

export default Landing;

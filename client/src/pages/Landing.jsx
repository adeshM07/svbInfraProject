import React from "react";
// import LandingBanner from "./LandingBanner";
// import ProjectVideoBanner from "./ProjectVideoBanner ";
import constructionImg from "../assets/cap.png";
import pillarImg from "../assets/pillarsOfTrustIMG.png";
import { Link } from "react-router-dom";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../CSS/ProjectVideoBanner.css";
import "../CSS/Landing.css";
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
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import constructionVideo from "/public/videos/constructionVideo3.mp4";

const Landing = () => {
  let [projectVideo, setProjectVideo] = useState(v3);
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
    <div className="w-screen bg-[#F8F8F8]">
      {/* <LandingBanner></LandingBanner> */}
      <div
        id="landingBanner"
        className="w-screen h-[45vh] md:h-[45vh] z-[600px] lg:h-[88vh]"
      >
        <div
          className="pt-[calc(3rem+1vw)] pl-[calc(1.5rem+1vw)] 
               lg:pt-[calc(6rem+1vw)] lg:pl-[calc(5rem+1vw)] 
               flex flex-col justify-center"
        >
          {/* Text Block */}
          <motion.div
            className="flex flex-col gap-[calc(0.5rem+0.4vw)] md:gap-[1vh] lg:gap-[calc(0.5rem+0.4vw)] z-999"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              className="text-[calc(1.2rem+1vw)] md:text-[3.2rem] lg:text-[calc(2.5rem+1.5vw)] text-white aboutCom font-bold leading-[calc(1.8rem+0.6vw)] md:leading-16 lg:leading-[calc(3rem+1vw)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Building the Future with <br />
              <span className="text-[#FDC000]">Strength & Precision</span>
            </motion.p>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
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
          <Link to="/fleet" className="block z-[999]">
            <motion.button
              className="w-[30vw] md:w-[25vw] lg:w-[10vw] lg:h-[7vh] z-999 rounded-md text-[0.7rem] px-3 lg:px-0 lg:py-0 py-2 lg:py-0 bg-[#FDC000] lg:rounded-md md:text-[1.3rem] lg:text-[20px] popins-noweight font-semibold mt-[2.5rem]"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Fleet
            </motion.button>
          </Link>
        </div>
      </div>

      {/* <ProjectVideoBanner></ProjectVideoBanner> */}

      <div className="flex flex-col  gap-[10vh] md:gap-[5vh] lg:gap-[7.6rem] my-15 lg:my-30  w-screen bg-[#F8F8F8]">
        <div>
          <section className="flex flex-row w-full px-4 lg:mx-0 lg:justify-center text-gray-800">
            {/* === VIDEO === */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <video
                src={constructionVideo}
                // src="https://youtu.be/mZ0SXgZAJT8"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-2xl shadow-lg w-[47vw] h-[30vh] lg:w-[40vw] lg:h-[84vh] object-cover"
              />
            </motion.div>

            {/* === TEXT SECTION === */}
            <motion.div
              className="lg:w-[33vw]  w-[50vw] h-fit flex flex-col"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="fontMon bg-[#F8F8F8] lg:leading-20 text-[1.5rem] md:text-[2rem] leading-7 md:leading-10 lg:py-0 lg:px-2 rounded-bl-2xl -ml-20 p-2 lg:-ml-56  text-[#333333] lg:text-[4rem] font-semibold">
                Great Relationships,
                <br /> Great{" "}
                <span className="text-[#FDC000]">Infrastructure</span>
              </p>

              <div className="flex flex-col place-items-end gap-4 px-2 pt-2 lg:pt-10">
                <p className="text-[#4D4D4D] popins lg:w-[32vw] text-[0.6rem] md:text-[0.8rem] lg:text-[1.25rem] lg:pl-5">
                  <span className="font-semibold lg:mr-1">
                    SVB Infra Projects
                  </span>
                  is a 3rd generation family-run business. SVB has been managing
                  earthmoving projects since 2003. Based in Bangalore, we
                  provide a fast, flexible, reliable and professional service
                  statewide. We offer contract earthmoving services across the
                  state providing a professional and reliable service to the
                  main and sub contract civil engineering sector. We have had
                  over 15 years’ experience for total excavation solution. We
                  work with some of the biggest names in construction and civil
                  engineering sector.
                </p>

                {/* Button animation */}
                <Link to="/about">
                  <motion.button
                    className="popins mr-3 px-[calc(0.8rem+0.5vw)] py-[calc(0.4rem+0.3vw)] text-[calc(0.8rem+0.3vw)] bg-[#FDC000] rounded-md hover:bg-[#ffcf33] transition-all duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
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
            className="flex gap-5 my-10 mx-auto lg:mx-0 lg:my-10 pl-[4vw] lg:pl-[9vw]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Box 1 */}
            <div className="border lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
              <p className="popins text-lg md:text-[1.5rem] lg:text-3xl font-semibold">
                <Counter from={0} to={185} duration={1.2} />+
              </p>
              <p className="popins font-medium text-[9px] md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start">
                Successfull <br /> Project
              </p>
            </div>

            {/* Box 2 */}
            <div className="border lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
              <p className="popins text-lg md:text-[1.5rem] lg:text-3xl font-semibold">
                <Counter from={0} to={30} duration={1.5} />+
              </p>
              <p className="popins font-medium text-[9px]  md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start">
                Machines <br /> Equipments
              </p>
            </div>

            {/* Box 3 */}
            <div className="border lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
              <p className="popins text-lg md:text-[1.5rem] lg:text-3xl font-semibold">
                24/7
              </p>
              <p className="popins font-medium text-[9px]  md:text-[1rem] lg:text-[15px] text-[#4D4D4D] text-start">
                Anywhere <br /> Assistance
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-10 bg-[#F8F8F8]">
          {/* Animated Heading */}
          <motion.p
            className="fontMon text-[1.2rem] lg:text-[1.9rem] lg:pl-[120px] pl-[1.9rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
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
            className="lg:w-[75vw] lg:h-[101vh] mx-4 lg:mx-auto"
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
            className="fontMon pl-[1.9rem] lg:pl-[120px] lg:text-[1.9rem] text-[1.2rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Our Fleet
          </motion.p>

          <div className="flex flex-col  lg:flex-row lg:mx-30 gap-7 lg:gap-5 lg:my-5">
            {/* ===== LEFT TEXT CONTENT ===== */}
            <motion.div
              className="flex flex-col w-screen place-items-center lg:place-items-start lg:w-[40vw] gap-4 lg:py-10 lg:gap-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="fontMon bold leading-9 md:leading-12 lg:leading-18 text-[#333333] text-[1.5rem] md:text-[2.5rem] lg:text-[4rem] font-bold text-center lg:text-start bg-[#F8F8F8]">
                Force Behind <br /> Every{" "}
                <span className="text-[#FDC000]">Foundation</span>
              </p>

              <p className="text-[#4D4D4D] text-[0.8rem] md:text-[1.3rem] lg:text-[1rem] font-medium text-center lg:text-start">
                Starting out with only one JCB 3D, we now keep a well-
                <br />
                maintained fleet of trucks and equipment.
              </p>

              {/* Button — static now */}
              <Link to="/fleet">
                <button className="popins px-[calc(0.8rem+0.5vw)] py-[calc(0.4rem+0.3vw)] text-[calc(0.8rem+0.3vw)] bg-[#FDC000] rounded-md hover:bg-[#ffcf33] transition-all duration-300">
                  Explore All
                </button>
              </Link>
            </motion.div>

            {/* ===== RIGHT IMAGE SCROLLER ===== */}
            <motion.div
              id="cont-fleet-img"
              className="relative  mx-auto flex w-[95vw] lg:w-[40vw] overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex animate-fleet-scroll gap-10 will-change-transform">
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
                    className="lg:w-[18vw] lg:h-[43vh] md:w-[46vw] md:h-[20vh] w-[46vw] h-[20vh] object-cover"
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
                    className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh] object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        ;
        <div className=" px-2 lg:px-40 ">
          <div className="relative w-[90vw]  lg:w-[85vw] h-[70vh] mx-auto overflow-hidden banner-shape shadow-lg">
            {/* 🎥 Background Video */}
            <iframe
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[2.25]"
              src={projectVideo}
              title="SVB Infra Project Video"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media"
            ></iframe>

            {/* Overlay */}
            <div className="absolute  inset-0 bg-black/40 "></div>

            {/* Text Layer */}
            {/* <div className="absolute z-10 top-[20%] left-[7%] flex flex-col gap-4 text-white">
                

               

                
            </div> */}
          </div>
          <div className=" flex w-full py-2 lg:py-6 relative ">
            {isMobile ? (
              <p className="text-[#4D4D4D] w-[40vw]  popins  text-[8px] lg:text-[16px] lg:mt-5 font-semibold ">
                We have successfully completed a wide range of earthwork and
                excavation projects for leading clients across Karnataka. Our
                portfolio includes residential, commercial, and infrastructure
                developments delivered with quality and precision.
              </p>
            ) : (
              <p className="text-[#4D4D4D] popins  text-[0.8rem] lg:text-[1rem] lg:mt-5 font-semibold ">
                We have successfully completed a wide range of <br /> earthwork
                and excavation projects for leading <br /> clients across
                Karnataka. Our portfolio includes <br /> residential,
                commercial, and infrastructure <br /> developments delivered
                with quality and precision.
              </p>
            )}
            <div className="absolute  left-[42vw] lg:left-[50.2vw] -top-[11vw]  md:-top-[6vw] lg:-top-[7vw] lg:w-[40vw] py-2 lg:py-4  overflow-hidden ">
              <div className="flex lg:gap-x-6 gap-x-2 animate-fleet-scroll ">
                {[
                  { src: c1, video: v5 },
                  { src: c2, video: v2 },
                  { src: c3, video: v1 },
                  { src: c4, video: v3 },
                  { src: c5, video: v4 },
                  { src: c6, video: v5 },
                  { src: c7, video: v1 },
                  { src: c8, video: v2 },
                  { src: c9, video: v3 },
                  { src: c10, video: v4 },
                  { src: c11, video: v5 },
                  { src: c12, video: v1 },
                  { src: c13, video: v2 },
                  { src: c14, video: v3 },
                  { src: c15, video: v4 },
                ].map((item, index) => (
                  <img
                    key={index}
                    src={item.src}
                    onClick={() => setProjectVideo(item.video)}
                    alt=""
                    className="w-[17vw] h-[10vh] lg:w-[20vw] lg:h-[47vh] object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="landing-contact"
          className="lg:w-[78vw] border-2 border-red-500 rounded-md  w-[95vw] px-3 lg:px-0  text-white md:h-[23vh] lg:h-[37vh]  mx-auto flex  place-items-center justify-evenly gap-[4.2rem] lg:gap-70 z-999"
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
      </div>
    </div>
  );
};

export default Landing;

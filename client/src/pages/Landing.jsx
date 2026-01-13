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
import c3 from "../assets/globalCard7.png";

import SectionWrapper from "../component/common/SectionWrapper";
import AboutSectionCard from "../component/home/about-card";
import Button from "../component/common/Button";
import { ChevronDown } from "lucide-react";

const Landing = () => {
  const cardData = [
    {
      number: "22+",
      label: "Years of Experience",
    },
    {
      number: "45+",
      label: "Machinery Fleet",
    },
    {
      number: "24/7",
      label: "Operational Support",
    },
  ];
  const [applyEffect, setApplyEffect] = useState(false);
  let [projectVideo, setProjectVideo] = useState(
    "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290528/BMCVellaraJunctionProjectVideo_liplwt.mp4"
  );
  const [isMobile, setIsMobile] = useState(false);
  const MotionLink = motion(Link);
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

  const fleetData = [
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
  ];

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
        <title>
          Soil & Rock Excavation Contractors in Bengaluru & Andhra Pradesh | SVB
          Infra Projects
        </title>

        <meta
          name="description"
          content="SVB Infra Projects undertakes soil and rock excavation and infrastructure works in Bengaluru , Penagunda and across the Sri Sathya Sai district of Andhra Pradesh."
        />
        <link rel="canonical" href="https://svbinfraprojects.com" />
      </Helmet>
      <div className=" bg-transparent w-full ">
        <div
          className={`w-full  [@media(min-width:650px)_and_(max-width:1200px)]:h-[94vh]  h-[75vh] md:h-[45vh] lg:h-[88vh] transition-all duration-700  
        px-3 sm:px-5 xl:px-30
  ${applyEffect ? "banner-active" : ""}`}
        >
          <div
            className=" 
               flex  flex-col justify-center w-full"
          >
            {/* Text Block */}
            <div className="flex flex-col gap-5 ">
              <h1 className="text-white xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
                Building with
                <span className="sm:block ml-2 sm:ml-0 inline  text-primary">
                  Precision and Reliability
                </span>
              </h1>

              <p className="xl:text-xl lg:text-xl md:text-lg text-sm lg:max-w-[700px] md:max-w-[500px] leading-relaxed text-white">
                Delivering reliable infrastructure solutions with modern
                machinery and expert execution.
              </p>
              <div className="flex">
                <Link to="/our-fleet-2">
                  <Button text="See Our Fleet" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <ProjectVideoBanner></ProjectVideoBanner> */}

        <div
          id="secondSection"
          className=" mx-auto
        px-3 sm:px-5 xl:px-30 w-full bg-white flex flex-col   gap-15 md:gap-25    py-10 md:py-25"
        >
          <div className="flex flex-col gap-10">
            {/* <h2 className='text-4xl font-bold '>About our company</h2> */}
            <div
              className="
                    flex flex-col
                    gap-6
                    text-lg
                    leading-relaxed
                    text-gray

                    lg:flex-row
                    lg:gap-[40px]
                "
            >
              {/* Left Column – Video */}
              <div
                className="
                        w-full
                        overflow-hidden
                        rounded-xl
                        2xl:min-h-[620px]
                        2xl:min-w-[620px]
                        xl:min-h-[580px]
                        xl:min-w-[580px]
                        lg:min-h-[480px]
                        lg:min-w-[480px]
                        md:min-h-[200px]
                        md:h-auto
                        sm:h-[550px]
                        h-[400px]
                        
                        "
              >
                <video
                  className="w-full h-full object-cover lg:scale-[1.16] rounded-xl
                                        lg:translate-y-[50px]
                                        lg:translate-x-[30px]
                                       
                                        "
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/dkuwwakct/video/upload/v1768290441/boxVideoTrimmed_nlhwd1.mov"
                />
              </div>

              <div
                className="
                            w-full
                            flex flex-col
                            gap-6
                            justify-start
                        "
              >
                {/* Your content here */}
                <h1
                  className=" lg:block px-2.5 py-3 bg-white rounded-bl-lg 
                        2xl:text-6xl
                        xl:text-[58px] lg:text-[56px] md:text-5xl 
                        md:mr-4 sm:text-4xl text-2xl font-bold 
                        leading-tight  z-300
                        lg:rounded-tl-lg
                        lg:right-auto md:right-0 md:rounded-tr-lg 
                        sm:-mt-25 lg:-mt-4 lg:-ml-60
                        sm:right-0 sm:rounded-tr-lg 
                        right-0 -mt-24 md:-mt-30
                        rounded-tr-lg 
                        lg:w-auto
                        w-fit
                        "
                >
                  Great Relationships, <br />
                  Greater <span className="text-primary">Infrastructure</span>
                </h1>

                {/* <h1 className=" lg:hidden md:block  px-2.5 py-3 bg-white rounded-bl-lg xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-bold leading-tight">
                            Great Relationships, <br />Greater <span className='text-primary'>Infrastructure</span>
                        </h1> */}

                <p
                  className=" w-full
                          mt-0 lg:text-xl 
                        md:text-lg text-sm lg:max-w-[700px] 
                        md:max-w-auto leading-relaxed
                     
                        
                        "
                >
                  SVB Infra Projects is a professionally managed infrastructure
                  and earthwork contracting company with over two decades of
                  execution experience. We specialize in large-scale soil and
                  rock excavation, land development, soil retention, and
                  dewatering works, delivering reliable, safe, and efficient
                  solutions for industrial, commercial, and infrastructure
                  projects across Bengaluru and Andhra Pradesh.
                </p>

                <div className="items-center sm:justify-between md:justify-start justify-start gap-2 xl:hidden 2xl:flex lg:hidden md:flex sm:flex flex ">
                  {cardData.map((card, index) => (
                    <AboutSectionCard
                      number={card.number}
                      label={card.label}
                      key={index}
                    />
                  ))}
                </div>
                <div className="flex justify-end">
                  <Link to="/about-us">
                    <Button text={"Know More"} />
                  </Link>
                </div>

                {/* <PropertyCard /> */}
                {/* <ServiceCard /> */}
              </div>
            </div>
            <div className="items-center justify-start gap-2 xl:flex 2xl:hidden  hidden lg:flex md:hidden sm:hidden flex-nowrap sm:flex-nowrap">
              {cardData.map((card, index) => (
                <AboutSectionCard
                  number={card.number}
                  label={card.label}
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* pillar */}
          <div className="lg:pb-25 md:pb-16 sm:pb-14 pb-10 flex-col gap-10 items-start">
            {/* Animated Heading */}
            <h3 className="text-[20px] inline lg:text-[32px] md:text-[30px] sm:text-[24px] border-b-2 border-b-primary font-semibold">
              Pillars of Trust
            </h3>
            <div className="w-full">
              <img
                src={pillarImg}
                alt="Pillars of Trust"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* fleet */}

          <div className="flex flex-col gap-10 w-full">
            {/* Heading */}
            <div>
              <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[32px] border-b-2 border-primary inline font-semibold">
                Our Fleet
              </h3>
            </div>

            {/* Content Row */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Content */}
              <div className="xl:max-w-[640px] max-w-none w-full">
                <h1 className="xl:text-[50px] lg:text-[53px] md:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
                  Force Behind <br /> Every{" "}
                  <span className=" lg:inline inline text-primary">
                    Foundation
                  </span>
                </h1>

                <p className="mt-4 xl:text-xl lg:text-xl md:text-lg text-sm lg:max-w-[640px] max-w-none leading-relaxed">
                  At SVB Infra Projects, our modern fleet includes robust
                  earth-moving and material-handling machines such as JCB (3DX),
                  Tata Hitachi EX-70, L & T Komatsu, Volvo EX-210, JCB 380 Xtra,
                  along with 16 cum Bharath Benz & Man dumpers, 18 cum AMW
                  dumpers & 23 CUM TATA Prima Dumpers ensuring powerful
                  performance and reliable support for every excavation and
                  infrastructure task.
                </p>
                <Link to="/our-fleet-2">
                  <Button
                    text="Explore All"
                    className="mt-10 lg:block md:hidden hidden"
                  />
                </Link>
              </div>

              {/* Right Marquee */}
              <div className="relative w-full overflow-hidden">
                <div className="flex gap-10 marquee w-max">
                  {[...fleetData, ...fleetData].map((imageSrc, index) => (
                    <div key={index} className="shrink-0">
                      <img
                        src={imageSrc}
                        alt={`Fleet ${index + 1}`}
                        className="
                                            w-[220px] h-[260px]
                                            sm:w-[260px] sm:h-[300px]
                                            lg:w-[282px] lg:h-[324px]
                                            rounded-lg shadow-md object-cover
                           "
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex lg:hidden md:block block">
                <Link to="/our-fleet-2">
                  <Button text="Explore All" className="mt-0 " />
                </Link>
              </div>
            </div>
          </div>
          <div className=" ">
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
                  excavation projects for leading clients across Karnataka and
                  Andhra Pardesh. Our portfolio includes residential,
                  commercial, and infrastructure developments delivered with
                  quality and precision.
                </p>
              ) : (
                <p className="text-[#4D4D4D] w-[48%] text-justify popins [@media(min-width:650px)_and_(max-width:1200px)]:text-[0.9rem]  text-[0.6rem]  lg:text-[1.5rem] xl:text-[1.2rem] lg:mt-3 font-semibold ">
                  We have successfully completed a wide range of earthwork and
                  excavation projects for leading clients across Karnataka and
                  Andhra Pardesh. Our portfolio includes residential,
                  commercial, and infrastructure developments delivered with
                  quality and precision.
                </p>
              )}
              <div
                className="absolute overflow-hidden   -top-4 w-full  left-[65%]  md:left-[60%] md:-top-10  lg:left-[55%] lg:-top-24  xl:left-[55%] xl:-top-20"
                // className="absolute -top-4  md:-top-10 lg:-top-24 xl:-top-20"
              >
                <div className="flex lg:gap-x-6 gap-x-2 animate-fleet-scroll">
                  {[...Array(2)].map((_, duplicateIndex) => (
                    <React.Fragment key={duplicateIndex}>
                      {[
                        {
                          src: c1,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290550/BMCVellaraJunctionProjectVideo_sqk22s.mp4",
                        },
                        {
                          src: c2,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290561/MarkSquareProjectVideo_eiwy14.mp4",
                        },
                        {
                          src: c3,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290587/VellaraJunctionProjectVideo_dxe59x.mp4",
                        },
                        {
                          src: c4,
                          video:
                            "https://res.cloudinary.com/dtculdtll/video/upload/v1766573110/MarkSquareProjectVideo_nkguhx.mp4",
                        },
                        {
                          src: c5,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290566/ProjectVideo_yh4mat.mp4",
                        },
                        {
                          src: c6,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290441/boxVideoTrimmed_nlhwd1.mov",
                        },
                        {
                          src: c7,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290494/LandingVideoTrimmed_ovxi4q.mp4",
                        },
                        {
                          src: c8,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290550/BMCVellaraJunctionProjectVideo_sqk22s.mp4",
                        },
                        {
                          src: c9,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290561/MarkSquareProjectVideo_eiwy14.mp4",
                        },
                        {
                          src: c10,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290587/VellaraJunctionProjectVideo_dxe59x.mp4",
                        },
                        {
                          src: c11,
                          video:
                            "https://res.cloudinary.com/dtculdtll/video/upload/v1766573110/MarkSquareProjectVideo_nkguhx.mp4",
                        },
                        {
                          src: c12,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290566/ProjectVideo_yh4mat.mp4",
                        },
                        {
                          src: c13,
                          video:
                            "https://res.cloudinary.com/dtculdtll/video/upload/v1766573121/VellaraJunctionProjectVideo_uhiyic.mp4",
                        },
                        {
                          src: c14,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290528/BMCVellaraJunctionProjectVideo_liplwt.mp4",
                        },
                        {
                          src: c15,
                          video:
                            "https://res.cloudinary.com/dkuwwakct/video/upload/v1768290494/LandingVideoTrimmed_ovxi4q.mp4",
                        },
                      ].map((item, index) => (
                        <img
                          key={`${duplicateIndex}-${index}`}
                          src={`${item.src}`}
                          onClick={() => setProjectVideo(item.video)}
                          alt=""
                          className="[@media(min-width:650px)_and_(max-width:1200px)]:w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[20vh] w-[17vw] h-[10vh] lg:w-[20vw] lg:h-[47vh] xl:w-67 xl:h-80  object-cover 
           transition-transform duration-300 hover:scale-95 cursor-pointer"
                        />
                      ))}
                    </React.Fragment>
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
                Contact Us!
              </p>
            </div>
            <Link to="/contact">
              <motion.button
                className="hover:cursor-pointer bg-[#FDC000] z-999 rounded-md popins font-semibold text-[0.6rem] h-7 w-20 md:text-[1rem] md:h-9 md:w-35 lg:text-[1rem] lg:h-10 lg:w-42 xl:text-[1.3rem] xl:h-11.5 xl:w-43.5 "
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

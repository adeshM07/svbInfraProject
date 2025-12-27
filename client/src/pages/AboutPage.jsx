import React from "react";
import "../CSS/About.css";
import bgIMG from "../assets/aboutCompanyIMG.png";
import LandingBanner from "./LandingBanner";
import { Helmet } from "react-helmet";
import "../CSS/Landing.css";
import icon1 from "../assets/aboutCardIcon1.png";
import icon2 from "../assets/aboutCardIcon2.png";
import icon3 from "../assets/aboutCardIcon3.png";
import icon4 from "../assets/aboutCardIcon4.png";
import icon5 from "../assets/aboutCardIcon5.png";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import AboutHighlights from "./AboutHighlights ";
import machineIMG from "../assets/aboutMachineImg.png";
import { useState, useEffect } from "react";

const AboutPage = () => {
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

  const Counter = ({ from = 0, to, duration = 1 }) => {
    const [displayValue, setDisplayValue] = useState(from);
    const count = useMotionValue(from);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
      if (inView) {
        const controls = animate(count, to, {
          duration,
          ease: "linear", // smooth continuous increase
          onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        });
        return () => controls.stop();
      }
    }, [inView, count, to, duration]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
  };
  return (
    <>
      <Helmet>
        <title>About Us | SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra PROJECTS is a 3rd generation family-run business..."
        />
        <link rel="canonical" href="https://svbinfraprojects.com/about" />
      </Helmet>
      {/* new line  */}
      <div className="flex flex-col ">
        <div
          id="aboutBanner"
          className="flex flex-col justify-center relative [@media(min-width:650px)_and_(max-width:1200px)]:h-[100vh]  [@media(min-width:300px)_and_(max-width:410px)]:h-[50vh]   [@media(min-width:300px)_and_(max-width:410px)]:w-screen  h-[45vh] md:h-[45vh] lg:h-[100vh]"
        >
          <div className=" ">
            <motion.p
              // className="text-white [@media(min-width:300px)_and_(max-width:410px)]:text-[1.2rem] text-[1.7rem]  md:text-[3.2rem] lg:text-[4rem] [@media(min-width:2500px)]:text-[6rem] aboutCom [@media(min-width:300px)_and_(max-width:410px)]:leading-6 leading-8 md:leading-14 lg:leading-19 [@media(min-width:2500px)]:leading-28"
              className="px-2.5 md:px-8 lg:px-15 xl:px-30 fontMon text-white font-bold text-[1.5rem] leading-8 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[4rem] xl:leading-19"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="text-[#FDC000] ">SVB Infra</span> <br /> Building
              the Future with <br /> Experience and Excellence
            </motion.p>

            <motion.p
              className="px-2.5 md:px-8 lg:px-15 xl:px-30 text-white popins text-[0.6rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem] mt-4 md:mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Providing fast, flexible, and professional earthmoving services
              statewide since 2003
            </motion.p>

            <Link to="/contact">
              <motion.button
                className="mx-2.5 md:mx-8 lg:mx-15 xl:mx-30 mt-6 md:mt-10 bg-[#FDC000] z-999 rounded-md popins font-semibold text-[0.6rem] h-7 w-26 md:text-[1rem] md:h-9 md:w-35 lg:text-[1rem] lg:h-10 lg:w-42 xl:text-[1.3rem] xl:h-11.5 xl:w-43.5 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="px-2.5 md:px-8 lg:px-15 xl:px-30 flex flex-col gap-30 md:gap-20 my-[50px] md:my-[120px]">
          <div className=" w-fit flex flex-col gap-10 ">
            <motion.p
              className="text-black popins text-[1rem] md:text-[1.5rem] lg:text-[1.4rem] xl:text-[2rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              About our company
            </motion.p>
            <div className="flex gap-4 [@media(min-width:300px)_and_(max-width:410px)]:gap-2 lg:gap-7">
              {/* 🟡 Image comes from left */}
              <motion.img
                src={bgIMG}
                // className="[@media(min-width:650px)_and_(max-width:1200px)]:h-[70vh] w-[45vw] h-[20vh] [@media(min-width:300px)_and_(max-width:410px)]:w-[46vw] [@media(min-width:300px)_and_(max-width:410px)]:h-[24vh] md:w-[50vw] md:h-[30vh] lg:w-[32vw]  lg:h-[59vh] xl:w-[35vw] xl:h-[60vh] 2xl:w-[31vw] 2xl:h-[65vh]"
                className="h-45 w-45 md:h-85 md:w-85 lg:w-110 lg:h-110 xl:w-120 xl:h-120"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              />

              {/* 🟢 Text slides from right */}
              <motion.div
                className="flex flex-col w-43 md:w-95 lg:w-172 lg:h-88 gap-1 lg:gap-4 relative"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p
                  // className="popins-bold [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] text-[1.3rem] md:text-[2.3rem] [@media(min-width:300px)_and_(max-width:410px)]:leading-6 leading-7 md:leading-12 lg:text-[3rem] xl:text-[3rem] 2xl:text-[4rem]  lg:leading-14 xl:leading-16 2xl:leading-19  [@media(min-width:2500px)]:text-[5rem] [@media(min-width:2500px)]:leading-24"
                  className="fontMon text-[#333333] font-bold text-[0.9rem] leading-5 md:text-[2rem] md:leading-12 lg:text-[3rem] lg:leading-17   2xl:text-[4rem] "
                >
                  Excellence, <br />
                  <span className="text-[#FDC000]">Expertise,</span> Efficiency
                </p>

               
                  <p className="text-[#4D4D4D] text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.3rem] ">
                    <span className="font-semibold mr-1">
                      SVB Infra Projects
                    </span>
                    is a 3rd generation family-run business. SVB has been
                    managing earthmoving projects since 2003. Based in Karnataka
                    and Andhra Pardesh, we provide a fast, flexible, reliable
                    and professional service state wide. We offer contract earth
                    moving services across the state providing a professional
                    and reliable service to the main and sub contract civil
                    engineering sector.
                  </p>
                

                <motion.div
                  className="flex [@media(min-width:300px)_and_(max-width:430px)]:w-screen [@media(min-width:300px)_and_(max-width:430px)]:place-items-center [@media(min-width:300px)_and_(max-width:410px)]:justify-center  absolute lg:relative gap-5   md:gap-4 lg:gap-7 top-[200px] -left-[120%] md:-left-0   md:top-[255px]  lg:top-0  "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {/* Clients */}
                  <div className="flex flex-col place-items-center">
                    <p className="text-[1.5rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] popins-bold">
                      <Counter from={0} to={125} duration={0.8} />+
                    </p>
                    <p className="popins [@media(min-width:300px)_and_(max-width:410px)]:text-[9px] text-[#4D4D4D] text-[10px] md:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.8rem] 2xl:text-[1rem]">
                      Clients
                    </p>
                  </div>

                  <div className="h-[4vh] md:h-[4vh] lg:h-[8vh] bg-black w-[1px] lg:w-0.5"></div>

                  <div className="flex flex-col place-items-center">
                    <p className="text-[1.5rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] popins-bold">
                      <Counter from={0} to={185} duration={1.0} />+
                    </p>
                    <p className="popins text-[#4D4D4D] [@media(min-width:300px)_and_(max-width:410px)]:text-[9px] text-[10px] md:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.8rem] 2xl:text-[1rem]">
                      Successful project
                    </p>
                  </div>

                  <div className="h-[4vh] md:h-[4vh] lg:h-[8vh] bg-black w-[1px] lg:w-0.5"></div>

                  <div className="flex flex-col  place-items-center ">
                    <p className="text-[1.5rem] [@media(min-width:300px)_and_(max-width:410px)]:text-[1rem] md:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] popins-bold">
                      <Counter from={0} to={45} duration={1.3} />+
                    </p>
                    <p className="popins [@media(min-width:300px)_and_(max-width:410px)]:text-[9px] text-[#4D4D4D] text-[10px] md:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.8rem] 2xl:text-[1rem]">
                      Machines & Equipments
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="">
            <AboutHighlights></AboutHighlights>
          </div>
        </div>
        {/* <div className='flex flex-col gap-10 w-fit my-40  '>
                    <p className='text-black popins text-[1rem] lg:text-[1.4rem] font-semibold underline decoration-[#FDC000] underline-offset-8 pl-[30px] lg:pl-[162px] my-10'>Why Choose Us</p>
                    <div className='flex relative  mx-2 lg:mx-45'>
                        <div className=' flex flex-col gap-15 lg:gap-30'>

                            <div>
                                <div id='aboutCom' className=' flex flex-col gap-3 lg:gap-5'>
                                    <p className='lg:text-[4rem] text-[1.3rem] text-[#333333] leading-7  lg:leading-16 aboutCom'>Discover why we are <br /> the preferred choice <br /> for <span className='text-[#FDC000]'>infrastructure <br /> solutions.</span> </p>
                                    {isMobile? <p className='text-[#4D4D4D] text-[12px]  aboutCom'>SVB Infra Projects delivers reliable,<br /> efficient, and high quality <br />  infrastructure  solutions.</p>:
                                    <p className='text-[#4D4D4D]  text-[0.9rem] aboutCom'>SVB Infra Projects delivers reliable, efficient, and high quality <br /> infrastructure solutions.</p>}
                                    <button className=' w-[22vw] text-[12px] lg:text-[1rem] py-2  lg:w-[9vw] bg-[#FDC000] text-[#333333]  lg:py-2 rounded-md aboutCom'>Contact Now</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 lg:gap-7'>
                                <div className='flex gap-2 lg:gap-14'>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='fontMon font-semibold  text-[0.6rem] lg:text-[1.8rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1.3rem] popins-noweight'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon2} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='fontMon font-semibold text-[0.6rem] lg:text-[1.8rem]'>Client Priority</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1.3rem] popins-noweight'>Building strong partnerships with tailored  client solutions</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 lg:gap-14'>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon3} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='fontMon font-semibold text-[0.6rem] lg:text-[1.8rem]'>Experienced Team</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1.3rem] popins-noweight'>Expert Team Ensuring  Superior <br /> Outcomes</p>
                                        </div>
                                    </div>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon4} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='fontMon font-semibold text-[0.6rem] lg:text-[1.8rem]'>Safety Priority</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1.3rem] popins-noweight'>Safety is our top priority  in every  project.</p>
                                        </div>
                                    </div>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon5} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='fontMon font-semibold text-[0.6rem] lg:text-[1.8rem]'>Reliable Results</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1.3rem] popins-noweight'>Trusted since 2003, delivering  projects  across Karnataka</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit absolute left-65 lg:left-auto lg:-right-20 -top-18 lg:-top-40 '>
                            <img src={machineIMG} className=" w-[74vw] h-[40vh]  lg:w-[38vw] lg:h-[98vh] rotate-1 " />
                        </div>
                    </div>
                </div> */}
      </div>
    </>
  );
};

export default AboutPage;

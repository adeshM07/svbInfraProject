import React from "react";
import "../CSS/About.css";
import bgIMG from "../assets/aboutCompanyIMG.png";
import LandingBanner from "./LandingBanner";
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
      <div>
        <div
          id="aboutBanner"
          className="w-screen   h-[45vh] md:h-[45vh] lg:h-[95vh]"
        >
          <div className="pl-[30px]  pt-[100px] lg:pl-[120px] lg:pt-[150px]">
            <motion.p
              className="text-white text-[1.7rem] md:text-[3.2rem] lg:text-[4rem] aboutCom leading-8 md:leading-14 lg:leading-19"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="text-[#FDC000]">SVB Infra</span> <br /> Building
              the Future with <br /> Experience and Excellence
            </motion.p>

            <motion.p
              className="popins text-[10px] md:text-[1.3rem] lg:text-[20px] text-white mt-[18px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Providing fast, flexible, and professional earthmoving services
              statewide since 2003
            </motion.p>

            <Link to="/contact">
              <motion.button
                className="lg:mt-[40px] mt-[20px] w-[21vw] h-[3.2vh] text-[12px] md:w-[24vw] md:h-[5vh] lg:w-[9vw] lg:h-[7vh] bg-[#FDC000] text-[#333333] popins-noweight font-semibold md:text-[1.5rem] lg:text-[20px] rounded-sm lg:rounded-lg"
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
        <div className="lg:mx-auto   w-fit flex flex-col gap-10 pt-[50px] lg:pt-[120px] mx-2">
          <motion.p
            className="text-black popins text-[1rem] md:text-[1.5rem] lg:text-[1.4rem] font-semibold underline decoration-[#FDC000] underline-offset-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            About our company
          </motion.p>
          <div className="flex gap-4 lg:gap-7">
            {/* 🟡 Image comes from left */}
            <motion.img
              src={bgIMG}
              className="w-[45vw] h-[20vh] md:w-[50vw] md:h-[30vh] lg:w-[32vw] lg:h-[59vh]"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            />

            {/* 🟢 Text slides from right */}
            <motion.div
              className="flex flex-col lg:h-[59vh] gap-3 lg:gap-7 relative"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="popins-bold text-[1.3rem] md:text-[2.3rem] leading-7 md:leading-12 lg:text-[3rem] lg:leading-14">
                Excellence, <br />{" "}
                <span className="text-[#FDC000]">Expertise,</span> Efficiency
              </p>

              {isMobile ? (
                <p className="text-[#4D4D4D] w-[49vw] text-[10px]">
                  <span className="font-semibold mr-1">SVB Infra Projects</span>
                  is a 3rd generation family-run business. SVB has been managing
                  earthmoving projects since 2003. Based in Bangalore, we
                  provide a fast, flexible, reliable and professional service
                  statewide. We offer contract earthmoving services across the
                  state providing a professional and reliable service to the
                  main and sub contract civil engineering sector.
                </p>
              ) : (
                <p className="text-[#4D4D4D] md:text-[0.8rem]  lg:w-[32vw] lg:text-[1rem]">
                  <span className="font-semibold mr-1">SVB Infra Projects</span>
                  is a 3rd generation family-run business. SVB has <br /> been
                  managing earthmoving projects since 2003. Based in <br />{" "}
                  Bangalore, we provide a fast, flexible, reliable and
                  professional <br /> service statewide. We offer contract
                  earthmoving services across <br /> the state providing a
                  professional and reliable service to the main <br /> and sub
                  contract civil engineering sector.
                </p>
              )}

              {/* 🧱 Stats below */}
              <motion.div
                className="flex absolute lg:relative gap-7 lg:gap-14 lg:-left-0 -left-[180px] md:-left-[340px] top-[230px] md:top-[400px] lg:top-0 place-items-center lg:mx-5 lg:mt-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Clients */}
                <div className="flex flex-col place-items-center">
                  <p className="text-[1.5rem] md:text-[2.2rem] lg:text-[2rem] popins-bold">
                    <Counter from={0} to={125} duration={0.8} />+
                  </p>
                  <p className="popins text-[#4D4D4D] text-[10px] md:text-[1.4rem] lg:text-[0.9rem]">
                    Clients
                  </p>
                </div>

                <div className="h-[4vh] md:h-[8vh] lg:h-[6vh] bg-black w-[1px] lg:w-0.5"></div>

                {/* Projects */}
                <div className="flex flex-col place-items-center">
                  <p className="text-[1.5rem] md:text-[2.2rem] lg:text-[2rem] popins-bold">
                    <Counter from={0} to={185} duration={1.0} />+
                  </p>
                  <p className="popins text-[#4D4D4D] text-[10px] md:text-[1.4rem] lg:text-[0.9rem]">
                    Successful project
                  </p>
                </div>

                <div className="h-[4vh] md:h-[8vh] lg:h-[6vh] bg-black w-[1px] lg:w-0.5"></div>

                {/* Machines */}
                <div className="flex flex-col place-items-center">
                  <p className="text-[1.5rem] md:text-[2.2rem] lg:text-[2rem] popins-bold">
                    <Counter from={0} to={30} duration={1.3} />+
                  </p>
                  <p className="popins text-[#4D4D4D] text-[10px] md:text-[1.4rem] lg:text-[0.9rem]">
                    Machines & Equipments
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="md:mt-[14vh] lg:mt-[30vh]">
          <AboutHighlights></AboutHighlights>
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

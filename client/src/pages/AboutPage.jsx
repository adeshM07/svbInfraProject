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

import Button from "../component/common/Button";
import NavLink from "../component/common/nav-link";
import aboutBanner from "../assets/aboutBannerIMG.png";
import SectionWrapper from "../component/common/SectionWrapper";
import AboutSectionCard from "../component/home/about-card";

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
  const cardData = [
    {
      number: "125+",
      label: "Clients",
    },
    {
      number: "185+",
      label: "Successfull projects",
    },
    {
      number: "45+",
      label: "Machines & Equipments",
    },
  ];
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
          className="flex flex-col gap-5  bg-no-repeat bg-cover bg-center
          min-h-screen justify-center"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            // "url('/images/about-us/hero/aboutUs-hero-bgIMG.png')",
          }}
        >
          <h1 className="px-3 sm:px-5 xl:px-30 xl:text-6xl max-w-[90%]  2xl:max-w-[70%] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-white">
            <span className="sm:block inline text-primary mr-2 text-nowrap">
              SVB Infra
            </span>
            Building the Future with Experience and Excellence
          </h1>

          <p className="px-3 sm:px-5 xl:px-30 xl:text-xl lg:text-xl md:text-lg text-sm lg:max-w-[900px] md:max-w-[500px] leading-relaxed text-white">
            Providing fast, flexible, and professional earthmoving services
            statewide since 2003
          </p>
          <div className="px-3 sm:px-5 xl:px-30 flex">
            <NavLink href="/contact-us">
              <Button text="Contact Us" />
            </NavLink>
          </div>
        </div>
        <div className=" flex flex-col my-[70px] lg:my-[100px] xl:my-[120px] gap-30">
          <section
            className=" mx-auto
        px-3 sm:px-5 xl:px-30
        xl:max-w-360 2xl:max-w-400  gap-10 flex flex-col items-start "
          >
            <h3 className="text-[20px] lg:text-[32px] md:text-[30px] sm:text-[24px] border-b-2 border-b-primary font-semibold ">
              About our company
            </h3>
            <div className="flex flex-col lg:flex-row w-full gap-10">
              <div className="object-cover lg:min-w-[420px] lg:min-h-[420px] xl:min-w-[480px] xl:min-h-[480px]">
                <img src={bgIMG} className="h-full w-full" alt="" />
              </div>
              <div className="flex flex-col gap-10">
                <div className="w-full flex flex-col gap-4 justify-start">
                  <h1
                    className="2xl:text-6xl 
                        xl:text-[58px] lg:text-[50px] md:text-5xl 
                         sm:text-4xl text-3xl font-bold 
                        leading-tight popins-noweight "
                  >
                    Excellence, <br />
                    <span className="text-primary mr-2">Expertise,</span>
                    Efficiency
                  </h1>
                  <p
                    className="xl:text-xl text-[#4D4D4D]  w-full
                          lg:text-lg 
                        md:text-xl text-sm lg:max-w-[550px] xl:max-w-[700px] 
                        md:max-w-auto leading-relaxed  popins
                        "
                  >
                    <span className="font-semibold mr-2">
                      SVB Infra Projects
                    </span>
                    is a 3rd generation family run business. SVB has been
                    managing earthmoving projects since 2003. Based in
                    Bangalore, we provide a fast, flexible, reliable and
                    professional service statewide. We offer contract
                    earthmoving services across the state providing a
                    professional and reliable service to the main and sub
                    contract civil engineering sector.
                  </p>
                </div>
                {/* <div className="w-full    items-center flex justify-between lg:justify-normal lg:gap-3 xl:gap-7 2xl:gap-5">
                  <div
                    className=" text-[#333333] rounded-lg lg:w-fit  2xl:w-auto
        xl:px-2 xl:py-3 2xl:px-4 2xl:py-3 
        flex flex-col sm:gap-2 gap-1 items-center justify-center 
        lg:px-2 md:px-2
        px-1 py-2
        lg:w-max-none
        md:w-fit
        w-auto

        "
                  >
                    <h4
                      className="2xl:text-[32px] xl:text-[28px] lg:text-[24px]
            xl:font-semibold 
            md:text-4xl
            leading-none
            sm:text-[28px]
            text-[18px]
           font-semibold
            "
                    >
                      10+
                    </h4>
                    <p className=" 2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-lg sm:text-[16px] text-[9px] text-center ">
                      Clients
                    </p>
                  </div>
                  <div className="lg:h-[70%] lg:w-0.5 md:min-h-18 md:w-1 w-0.5  h-12 bg-[#333333]"></div>
                  <div
                    className=" text-[#333333] rounded-lg lg:w-fit xl:w-[180px]  2xl:w-auto
        xl:px-2 xl:py-3 2xl:px-4 2xl:py-3 
        flex flex-col sm:gap-2 gap-1 items-center justify-center 
        lg:px-2 md:px-2
        px-1 py-2
        lg:w-max-none
        md:w-fit
        w-auto

        "
                  >
                    <h4
                      className="2xl:text-[32px] xl:text-[28px] lg:text-[24px]
            xl:font-semibold 
            md:text-4xl
            leading-none
            sm:text-[28px]
            text-[18px]
           font-semibold
            "
                    >
                      185+
                    </h4>
                    <p className=" 2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-lg sm:text-[16px] text-[9px] text-center ">
                      Successfull project
                    </p>
                  </div>
                  <div className="lg:h-[70%] lg:w-0.5 md:min-h-18 md:w-1 w-0.5  h-12 bg-[#333333]"></div>
                  <div
                    className=" text-[#333333] rounded-lg lg:w-fit xl:w-fit  2xl:w-auto
        xl:px-2 xl:py-3 2xl:px-4 2xl:py-3 
        flex flex-col sm:gap-2 gap-1 items-center justify-center 
        lg:px-2 md:px-2
        
        px-1 py-2
        lg:w-max-none
        md:w-fit
        w-auto

        "
                  >
                    <h4
                      className="2xl:text-[32px] xl:text-[28px] lg:text-[24px]
            xl:font-semibold 
            md:text-4xl
            leading-none
            sm:text-[28px]
            text-[18px]
           font-semibold
            "
                    >
                      45+
                    </h4>
                    <p className=" 2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-lg sm:text-[16px] text-[9px] text-center ">
                      Machines & Equipments
                    </p>
                  </div>
                </div> */}
                 <div className="items-center sm:justify-between md:justify-start justify-start gap-2 xl:hidden 2xl:flex lg:hidden md:flex sm:flex flex ">
                    {cardData.map((card, index) => (
                      <AboutSectionCard
                        number={card.number}
                        label={card.label}
                        key={index}
                      />
                    ))}
                  </div>
              </div>
            </div>
          </section>
          <div className=" px-2.5  md:px-8 lg:px-15 xl:px-30">
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

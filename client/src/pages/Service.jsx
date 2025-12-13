import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import s1 from "../assets/serviceCardIMG1.png";
import s2 from "../assets/serviceCardIMG2.png";
import s3 from "../assets/serviceCardIMG3.png";
import s4 from "../assets/serviceCardIMG4.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";
import "../CSS/Service.css";
import "../CSS/About.css";

const Service = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width < 740);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra PROJECTS is a 3rd generation family-run business..."
        />
        <link rel="canonical" href="https://svbinfraprojects.com/services" />
      </Helmet>
      <div className="w-screen">
        {/* ===== BANNER SECTION ===== */}
        <div
          id="serviceBanner"
          className="w-screen [@media(min-width:650px)_and_(max-width:1200px)]:h-[100vh]  h-[45vh] md:h-[45vh] lg:h-[95vh]"
        >
          <div className="pt-[80px] ml-[30px] [@media(min-width:300px)_and_(max-width:410px)]:pt-[60px] lg:pt-[120px] lg:ml-[120px]">
            {/* Heading Animation */}
            <motion.p
              className="text-white text-[1.5rem] [@media(min-width:650px)_and_(max-width:1200px)]:text-[1.5rem] [@media(min-width:650px)_and_(max-width:1200px)]:leading-7 [@media(min-width:300px)_and_(max-width:410px)]:text-[1.2rem] [@media(min-width:300px)_and_(max-width:410px)]:leading-6  md:text-[3.2rem] lg:text-[4rem] aboutCom leading-8 md:leading-14 lg:leading-19"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Your Trusted Partner for Every <br />
              Construction
              <span className="text-[#FDC000]"> Machine You Need</span>
            </motion.p>

            {/* Subtext Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {isMobile ? (
                <p className="popins text-[10px] [@media(min-width:650px)_and_(max-width:1200px)]:text-[7px] lg:text-[20px] text-white mt-[18px]">
                  Delivering top-quality machinery and equipment <br />
                  to ensure every project runs smoothly, <br />
                  safely, and efficiently.
                </p>
              ) : (
                <p className="popins text-[10px] md:text-[1.2rem] lg:text-[20px] text-white mt-[18px]">
                  Delivering top-quality machinery and equipment to ensure every
                  project runs smoothly, <br className="md:hidden lg:block" />
                  safely, and efficiently.
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <motion.div
          className="w-fit flex flex-col gap-6 lg:gap-5  mx-auto [@media(min-width:650px)_and_(max-width:1200px)]:-mt-[140px] -mt-[100px] md:-mt-[150px] lg:-mt-[150px] pb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Heading */}
          <motion.p
            className="font-semibold text-white text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] underline decoration-[#FDC000] underline-offset-8 pl-3 [@media(min-width:650px)_and_(max-width:1200px)]:pl-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Our Services
          </motion.p>

          {/* Service Image Grid */}
          <div className="flex [@media(min-width:300px)_and_(max-width:410px)]:gap-0.5 [@media(min-width:650px)_and_(max-width:1200px)]:gap-0 gap-1 lg:gap-3 xl:gap-4 2xl:gap-3 ">
            {[s1, s2, s3, s4].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Link
                  to={
                    index === 0
                      ? "/ese"
                      : index === 1
                      ? "/rep"
                      : index === 2
                      ? "/srp"
                      : "/ds"
                  }
                >
                  <img
                    src={src}
                    className="w-[23vw] h-[13vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[19vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[40vh]  [@media(min-width:300px)_and_(max-width:410px)]:h-[17vh] [@media(min-width:300px)_and_(max-width:410px)]:w-[24vw] md:h-[20vh] lg:w-[20vw] xl:w-[22vw] 2xl:w-[18vw] lg:h-[47vh] object-cover 
           transition-transform duration-300 hover:scale-105 cursor-pointer rounded-md"
                    alt={`Service ${index + 1}`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Service;

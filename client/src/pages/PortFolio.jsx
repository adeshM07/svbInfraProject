import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import star from "../assets/star.png";
import reviewsIMG from "../assets/potfolioReviewIMG.png";
import c1 from "../assets/globalCard1.png";
import c2 from "../assets/globalCard2.png";
import c3 from "../assets/globalCard3.png";
import c4 from "../assets/globalCard4.png";
import c5 from "../assets/globalCard5.png";
import c6 from "../assets/globalCard6.png";
import c7 from "../assets/globalCard7.png";
import c8 from "../assets/globalCard8.png";
import c9 from "../assets/globalCard9.png";
import c10 from "../assets/globalCard10.png";
import g1 from "../assets/galleryIMG1.png";
import g2 from "../assets/galleryIMG2.png";
import g3 from "../assets/galleryIMG3.png";
import g4 from "../assets/galleryIMG4.png";
import g5 from "../assets/galleryIMG5.png";
import g6 from "../assets/galleryIMG6.png";
import g7 from "../assets/galleryIMG7.png";
import g8 from "../assets/galleryIMG8.png";
import g9 from "../assets/galleryIMG9.png";
import g10 from "../assets/galleryIMG10.png";
import g11 from "../assets/galleryIMG11.png";
import g12 from "../assets/galleryIMG12.png";
import g13 from "../assets/galleryIMG13.png";
import g14 from "../assets/galleryIMG14.png";
import g15 from "../assets/galleryIMG15.png";
import g16 from "../assets/galleryIMG16.png";
import g17 from "../assets/galleryIMG17.png";
import g18 from "../assets/galleryIMG18.png";
import g19 from "../assets/galleryIMG19.png";
import g20 from "../assets/galleryIMG20.png";
import g21 from "../assets/galleryIMG21.png";
import g22 from "../assets/galleryIMG22.png";
import g23 from "../assets/galleryIMG23.png";
import g24 from "../assets/galleryIMG24.png";
import g25 from "../assets/galleryIMG25.png";
import g26 from "../assets/galleryIMG26.png";
import g27 from "../assets/galleryIMG27.png";
import onc1 from "../assets/ongoingCard.png";

const PortFolio = () => {
  const galleryImages = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
    g17,
    g18,
    g19,
    g20,
    g21,
    g22,
    g23,
    g24,
    g25,
    g26,
    g27,
  ];
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
  return (
    <>
      <Helmet>
        <title>Portfolio | SVB Infra Projects</title>
        <meta
          name="description"
          content="SVB Infra PROJECTS is a 3rd generation family-run business..."
        />
        <link rel="canonical" href="https://svbinfraprojects.com/portfolio" />
      </Helmet>
      <div className="flex  flex-col gap-10 lg:gap-[13vh] py-10 lg:py-30 bg-[#F8F8F8]">
        <section className="flex  flex-col gap-8 lg:gap-8 px-2.5 md:px-8 lg:px-15 xl:px-30 ">
          
          <div className="flex flex-col  lg:flex-row   lg:w-full lg:justify-between  mx-4 lg:mx-0 [@media(min-width:2500px)]:gap-90">
            {/* Left Side - Texts + Button */}
            <motion.div
              className="flex flex-col gap-3  lg:gap-[44px]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.p
                className="fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Our Ongoing projects
              </motion.p>
              <div className="flex flex-col gap-4">

              
             
                <p className="fontMon text-[#333333] font-bold text-[2rem] leading-10 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[3.5rem] xl:leading-19">
                  Innovation That <br /> Strengthens{" "}
                  <br className="md:hidden lg:block" />{" "}
                  <span className="text-[#FDC000]">Infrastructure</span>
                </p>
              

              
                <p className="text-[#333333] popins text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem]"
                  >
                  Experience our proven track record through our diverse 
                  portfolio.
                </p>
              
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className=""
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="relative   lg:mx-0  lg:ml-[60px]  overflow-hidden  rounded-xl flex gap-2 lg:gap-[40px] ">
                {[onc1, c3].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-[30vw] h-[20vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] [@media(min-width:1400px)_and_(max-width:1500px)]:w-[20vw] [@media(min-width:1400px)_and_(max-width:1500px)]:h-[47vh]   xl:w-[20vw] xl:h-[50vh] 2xl:w-[18vw] lg:w-[18vw] lg:h-[47vh] 2xl:h-[47vh] lg:object-cover rounded-lg [@media(min-width:2500px)]:w-[19vw]"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section
          className="px-2.5 md:px-8 lg:px-15 xl:px-30 flex flex-col gap-12 overflow-hidden "
        >
          <p  className="fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8">
            Our Latest Projects
          </p>

          <div className="relative   w-[92vw] mx-auto lg:mx-0 lg:w-[92vw] lg:ml-0 lg:mr-[60px] overflow-hidden  rounded-xl flex gap-2 lg:gap-[40px] py-4">
            {[
              c1,
              c2,
              c3,
              c4,
              c5,
              c6,
              c7,
              c8,
              c9,
              c10,
              c1,
              c2,
              c3,
              c4,
              c5,
              c6,
              c7,
              c8,
              c9,
              c10,
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Project ${index + 1}`}
                className="w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] [@media(min-width:2500px)]:w-[19vw]   h-[20vh] lg:w-[18vw] xl:w-[22vw] 2xl:w-[18vw] lg:h-[47vh] lg:object-cover rounded-lg animate-cardScroll"
              />
            ))}
          </div>
        </section>
        {/* <section className="  flex flex-col gap-12 overflow-hidden"></section> */}
        <p  className="px-2.5 md:px-8 lg:px-15 xl:px-30 fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8">
          Reviews and ratings
        </p>
        <div className="flex  flex-col lg:flex-row w-full gap-y-15 justify-between  px-2.5 md:px-8 lg:px-15 xl:px-30">
          {/* Left Side - Texts + Button */}
          <motion.div
            className="flex flex-col gap-5 w-full lg:w-[50%]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            
              <p className="fontMon text-[#333333] font-bold text-[2rem] leading-9 md:text-[3rem] md:leading-16 lg:text-[3rem] lg:leading-15  xl:text-[3.5rem] xl:leading-19"
                >
                Industry{" "}
                <span className="text-[#FDC000]">
                  Trusted <br className="" /> Feedback
                </span>
              </p>
            

          
              <p  className="text-[#4D4D4D] popins text-[1rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.3rem]">
                Real feedback from clients who rely on our expertise for
                excavation, rock work, soil retention, and dewatering services.
                Every rating reflects our dedication to quality and reliability.
              </p>
            

            <div className="flex gap-4">
              <img
                src={star}
                className="w-10 h-10 md:w-15 md:h-15 lg:w-17 lg:h-17 xl:w-20 xl:h-20"
              />
              <img
                src={star}
                className="w-10 h-10 md:w-15 md:h-15 lg:w-17 lg:h-17 xl:w-20 xl:h-20"
              />
              <img
                src={star}
               className="w-10 h-10 md:w-15 md:h-15 lg:w-17 lg:h-17 xl:w-20 xl:h-20"
              />
              <img
                src={star}
                className="w-10 h-10 md:w-15 md:h-15 lg:w-17 lg:h-17 xl:w-20 xl:h-20"
              />
              <img
                src={star}
                className="w-10 h-10 md:w-15 md:h-15 lg:w-17 lg:h-17 xl:w-20 xl:h-20"
              />
            </div>
          </motion.div>

          {/* Right Side - Image */}
          {isMobile ? (
            <div
              className=""
              // initial={{ opacity: 0, x: 60 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              // viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={reviewsIMG}
                className="lg:w-[37vw] lg:h-[57vh]   2xl:w-[37vw] 2xl:h-[57vh]"
              />
            </div>
          ) : (
            <motion.div
              className=""
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={reviewsIMG} className="lg:w-[37vw] lg:h-[57vh]" />
            </motion.div>
          )}
        </div>
        <section id="gallery" className=" px-2.5 md:px-8 lg:px-15 xl:px-30 flex flex-col gap-20">
          {/* ===== HEADING ===== */}
          <motion.p
            className=" fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Gallery
          </motion.p>

          {/* ===== INTRO TEXT & COUNTER ===== */}

            <div className="flex w-full   justify-between">
              {/* Left text */}
              <motion.div
                className="flex flex-col w-full md:w-[65%] lg:w-[70%] xl:w-[55%]  gap-3"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p  className="fontMon text-[#333333] font-bold text-[2rem] leading-9 md:text-[2rem] md:leading-12 lg:text-[2.2rem] lg:leading-13  xl:text-[3.5rem]  xl:leading-19">
                  Our <span className="text-[#FDC000]">Work,</span> <br />{" "}
                  Captured in Action
                </p>
                <p className="text-[1rem] md:text-[1.3rem]  lg:text-[1rem] text-[#333333] font-semibold">
                  Explore our gallery to see SVB Infra Projects’ commitment to
                  quality,
                   precision, and trusted
                  execution in every project we deliver.
                </p>
              </motion.div>

              {/* Right stats */}
              <motion.div
                className="flex flex-col  place-items-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="fontMon text-[#FDC000] font-bold text-[1rem] leading-8 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[4rem] xl:leading-19">
                  45+
                </p>
                <p className="popins-bold text-[#333333] text-[0.6rem] md:text-[1.3rem] md:leading-7 lg:text-[1.5rem] lg:leading-8 xl:leading-11 xl:text-[2rem]">
                  Total number <br /> of machinery
                </p>
              </motion.div>
            </div>
          

          {/* ===== GALLERY (ORIGINAL DESIGN KEPT) ===== */}
          <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance] ">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid overflow-hidden mb-4 rounded-lg"
              >
                <motion.img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full rounded-lg object-cover hover:scale-[1.03] transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PortFolio;

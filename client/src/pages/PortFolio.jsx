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
      <div className="flex  flex-col gap-10 lg:gap-[13vh] my-13 lg:my-30 ">
        <section className="flex  flex-col gap-8 lg:gap-8 
        px-3 sm:px-5 xl:px-30 ">
          <div className="flex flex-col gap-y-4  lg:flex-row   lg:w-full lg:justify-between   [@media(min-width:2500px)]:gap-90">
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
                <p className="fontMon text-[#333333] font-bold text-[2rem] leading-10 md:text-[3rem] md:leading-16 lg:text-[2.5rem] lg:leading-14 xl:text-[3rem] xl:leading-14 2xl:text-[3.5rem] 2xl:leading-19">
                  Innovation That <br /> Strengthens{" "}
                  <br className="md:hidden lg:block" />{" "}
                  <span className="text-[#FDC000]">Infrastructure</span>
                </p>

                <p className="text-[#333333] popins text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[1.3rem]">
                  Experience our proven track record through our diverse
                  portfolio.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="w-full  lg:w-[70%] xl:w-[50%] 2xl:w-[45%]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="relative      overflow-hidden  rounded-xl flex lg:justify-between  ">
                {[onc1, c3].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Project ${index + 1}`}
                    // className="lg:w-71 lg:h-86 object-cover"
                    className=" min-w-[30vw] h-[20vh] 
              sm:min-w-[170px] sm:h-fit
              md:min-w-[240px] md:h-fit
              lg:min-w-[230px] lg:fit
             xl:w-70 xl:h-80
              2xl:min-w-[284px] 2xl:h-fit
              object-cover "
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className=" 
        px-3 sm:px-5 xl:px-30 flex flex-col gap-12 overflow-hidden ">
          <p className="fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8">
            Our Latest Projects
          </p>

          <div className="relative   w-full overflow-hidden  rounded-xl flex gap-[10px]  md:gap-[40px] xl:gap-8 py-4">
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
                // className="w-[30vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[60vh] [@media(min-width:2500px)]:w-[19vw]   h-[20vh] lg:w-[18vw] xl:w-[22vw] 2xl:w-[18vw] lg:h-[47vh] lg:object-cover rounded-lg animate-cardScroll"
                className="animate-cardScroll  w-[33.5vw] h-[20vh] 
              sm:min-w-[170px] sm:h-fit
              md:min-w-[240px] md:h-fit
              lg:min-w-[230px] lg:fit
              xl:w-70 xl:h-70
              2xl:min-w-[284px] 2xl:h-fit
              object-cover "
              />
            ))}
          </div>
        </section>
        {/* <section className="  flex flex-col gap-12 overflow-hidden"></section> */}
        <p className="
        px-3 sm:px-5 xl:px-30 fontMon text-[1.2rem] lg:text-[2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8">
          Reviews and ratings
        </p>
        <div className="flex  flex-col lg:flex-row w-full xl:h-100 2xl:h-110 gap-y-15 justify-between   mx-auto
        px-3 sm:px-5 xl:px-30">
          {/* Left Side - Texts + Button */}
          <motion.div
            className="flex  flex-col gap-5 w-full lg:w-[50%] xl:w-[45%] 2xl:w-[50%]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="fontMon text-[#333333] font-bold text-[2rem] leading-9 md:text-[3rem] md:leading-16 lg:text-[3rem] lg:leading-15  xl:text-[3rem] 2xl:text-[3.5rem] xl:leading-18">
              Industry{" "}
              <span className="text-[#FDC000]">
                Trusted <br className="" /> Feedback
              </span>
            </p>

            <p className="text-[#4D4D4D] text-justify popins text-[1rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem]">
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
              <img src={reviewsIMG} className="h-full w-full" />
            </div>
          ) : (
            <motion.div
              className=""
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={reviewsIMG} className="lg:w-[40vw] h-full" />
            </motion.div>
          )}
        </div>
        <section
          id="gallery"
          className="  mx-auto
        px-3 sm:px-5 xl:px-30 flex flex-col gap-20"
        >
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
              className="flex flex-col  w-full [@media(min-width:500px)_and_(max-width:639px)]:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[55%]  gap-3"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="fontMon text-[#333333] font-bold [@media(min-width:500px)_and_(max-width:639px)]:text-[1.5rem] text-[2rem] leading-9 md:text-[2rem] md:leading-12 lg:text-[2.2rem] lg:leading-13  xl:text-[3.5rem]  xl:leading-19">
                Our <span className="text-[#FDC000]">Work,</span> <br />{" "}
                Captured in Action
              </p>
              <p className="[@media(min-width:500px)_and_(max-width:639px)]:text-[0.6rem] text-[1rem] md:text-[1.3rem]  lg:text-[1rem] text-[#333333] font-semibold">
                Explore our gallery to see SVB Infra Projects’ commitment to
                quality, precision, and trusted execution in every project we
                deliver.
              </p>
            </motion.div>

            {/* Right stats */}
            <motion.div
              className="hidden [@media(min-width:500px)]:block flex flex-col  place-items-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="fontMon text-[#FDC000] font-bold [@media(min-width:500px)_and_(max-width:639px)]:text-[1.5rem] text-[1rem] leading-8 md:text-[3rem] md:leading-16 lg:text-[3.5rem] lg:leading-18  xl:text-[4rem] xl:leading-19">
                45+
              </p>
              <p className="popins-bold text-[#333333] [@media(min-width:500px)_and_(max-width:639px)]:text-[1rem] text-[0.6rem] md:text-[1.3rem] md:leading-7 lg:text-[1.5rem] lg:leading-8 xl:leading-11 xl:text-[2rem]">
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

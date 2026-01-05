import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/aboutIcon1.png";
import icon2 from "../assets/aboutIcon2.png";
import icon3 from "../assets/aboutIcon3.png";
import icon4 from "../assets/aboutIcon4.png";
import icon5 from "../assets/aboutIcon5.png";
import "../CSS/About.css";
import midIMG from "../assets/aboutMidIMG.png";
import { useState } from "react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutHighlights = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 740) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return (
    <div className="flex flex-col   gap-[80px]">
      <motion.div
        className="flex flex-col  gap-6 md:gap-10 w-fit  items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h3 className="text-[20px] inline lg:text-[32px] md:text-[30px] sm:text-[24px] border-b-2 border-b-primary font-semibold ">
          Why Choose Us
        </h3>

        <div className="flex flex-col gap-4">
          <p
            // className="popins-bold text-[1.6rem] md:text-[3rem] lg:text-[4rem] md:leading-14 lg:leading-19"
            className="text-[#333333] xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold leading-tight"
          >
            Know why we’re the{" "}
            <span className="text-[#FCD000] mr-2 sm:mr-4">
              trusted <br className="hidden sm:block" /> partner
            </span>
            for every construction <br className="hidden sm:block" /> need.
          </p>

          <p className="xl:text-xl lg:text-xl md:text-lg text-sm lg:max-w-[700px] md:max-w-[500px] leading-relaxed text-[#333333]">
            A fleet engineered for strength, accuracy, and unmatched efficiency.
          </p>
        </div>
      </motion.div>

      <motion.section
        id="aboutCardBG"
        className="flex flex-col relative  items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* ========== ROW 1 ========== */}
        <div className="flex flex-col  md:flex-row md:flex-wrap justify-center  items-center gap-10 md:gap-10 xl:gap-20 2xl:gap-20 lg:gap-20">
          {/* Left Item */}
          <motion.div
            className="flex  flex-col items-center xl:w-[21vw] 2xl:w-[19vw] md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] lg:w-[19vw] h-auto"
            variants={fadeUp}
          >
            <motion.div
              className="bg-[#FFE26C] rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
              variants={scaleIn}
            >
              <img
                src={icon1}
                className="w-[7vw] sm:w-[4vw] md:w-[2vw] lg:w-[2vw]  2xl:w-[2vw] h-auto"
              />
            </motion.div>
            <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] fontMon text-[#333333]">
              Upgraded Fleet
            </p>
            <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] popins">
              Advanced equipment for every project need
            </p>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="order-first md:order-0 mt-10 md:mt-[190px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[120px] z-999"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <img
              src={midIMG}
              alt="SVB Infra Projects"
              className="w-[65vw] sm:w-[45vw] md:w-[25vw] lg:w-[21vw] xl:w-[19vw] 2xl:w-[21vw] h-auto object-cover rounded-[2rem]"
            />
          </motion.div>

          {/* Right Item */}
          <motion.div
            className="flex flex-col items-center md:items-start  text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] xl:w-[20vw] 2xl:w-[19vw] lg:w-[19vw] h-auto"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="bg-[#FFE26C]  rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
              variants={scaleIn}
            >
              <img
                src={icon2}
                className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto"
              />
            </motion.div>
            <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] fontMon text-[#333333]">
              Qualified Team
            </p>
            <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] popins">
              Skilled Workforce Delivering Exceptional Results
            </p>
          </motion.div>
        </div>

        {/* ========== ROW 2 ========== */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center  gap-10 md:gap-3 xl:gap-20 2xl:gap-20 lg:gap-20  mt-10 md:-mt-[150px] lg:-mt-[100px] xl:-mt-35 2xl:-mt-30">
          {/* Bottom Left */}
          <motion.div
            className="flex flex-col items-center  md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] xl:w-[21vw] 2xl:w-[19vw] lg:w-[19vw] h-auto"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="bg-[#FFE26C] rounded-full aspect-square  w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
              variants={scaleIn}
            >
              <img
                src={icon3}
                alt=""
                className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto"
              />
            </motion.div>
            <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] fontMon text-[#333333]">
              Reliable Results
            </p>
            <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] popins">
              Trusted since 2003, delivering projects across Karnataka and AP
            </p>
          </motion.div>

          {/* Bottom Center */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] lg:w-[19vw] h-auto mt-6 md:mt-[200px]"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="bg-[#FFE26C] rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
              variants={scaleIn}
            >
              <img
                src={icon4}
                alt=""
                className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto"
              />
            </motion.div>
            <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] fontMon text-[#333333]">
              Safety Priority
            </p>
            <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] popins">
              Safety is our top priority in every project.
            </p>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] lg:w-[19vw] h-auto"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="bg-[#FFE26C] rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
              variants={scaleIn}
            >
              <img
                src={icon5}
                alt=""
                className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto"
              />
            </motion.div>
            <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] fontMon text-[#333333]">
              Client Priority
            </p>
            <p
              className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] md:text-[0.8rem] lg:text-[1rem] 
          xl:text-[1rem] 2xl:text-[1.3rem] popins"
            >
              Building strong partnerships with tailored client solutions
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutHighlights;

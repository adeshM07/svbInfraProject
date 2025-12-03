import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/aboutIcon1.png";
import icon2 from "../assets/aboutIcon2.png";
import icon3 from "../assets/aboutIcon3.png";
import icon4 from "../assets/aboutIcon4.png";
import icon5 from "../assets/aboutIcon5.png";
import "../CSS/About.css";
import midIMG from "../assets/aboutMidIMG.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutHighlights = () => {
  return (
    <motion.section
      id="aboutCardBG"
      className="flex flex-col relative bg-[#F8F8F8] items-center justify-center py-14 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ========== ROW 1 ========== */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 md:gap-7 lg:gap-20">
        {/* Left Item */}
        <motion.div
          className="flex  flex-col items-center md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] lg:w-[19vw] h-auto"
          variants={fadeUp}
        >
          <motion.div
            className="bg-[#FFE26C] rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
            variants={scaleIn}
          >
            <img src={icon1} className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto" />
          </motion.div>
          <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] fontMon text-[#333333]">
            Upgraded Fleet
          </p>
          <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] lg:text-[1.3rem] popins">
            Advanced equipment for every project need
          </p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="order-first md:order-none mt-10 md:mt-[190px] lg:mt-[120px] z-999"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img
            src={midIMG}
            alt="SVB Infra Projects"
            className="w-[65vw] sm:w-[45vw] md:w-[30vw] lg:w-[21vw] h-auto object-cover rounded-[2rem]"
          />
        </motion.div>

        {/* Right Item */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] lg:w-[19vw] h-auto"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="bg-[#FFE26C] rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
            variants={scaleIn}
          >
            <img src={icon2} className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto" />
          </motion.div>
          <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] fontMon text-[#333333]">
            Qualified Team
          </p>
          <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] lg:text-[1.3rem] popins">
            Skilled Workforce Delivering Exceptional Results
          </p>
        </motion.div>
      </div>

      {/* ========== ROW 2 ========== */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 md:gap-10 lg:gap-20 mt-10 md:-mt-[100px]">
        {/* Bottom Left */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left w-[80vw] sm:w-[60vw] md:w-[28vw] lg:w-[19vw] h-auto"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <motion.div
            className="bg-[#FFE26C] rounded-full aspect-square w-[18vw] sm:w-[10vw] md:w-[5vw] flex items-center justify-center shadow-sm mb-3"
            variants={scaleIn}
          >
            <img src={icon3} alt="" className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto" />
          </motion.div>
          <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] fontMon text-[#333333]">
            Reliable Results
          </p>
          <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] lg:text-[1.3rem] popins">
            Trusted since 2003, delivering projects across Karnataka
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
            <img src={icon4} alt="" className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto" />
          </motion.div>
          <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] fontMon text-[#333333]">
            Safety Priority
          </p>
          <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] lg:text-[1.3rem] popins">
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
            <img src={icon5} alt="" className="w-[7vw] sm:w-[4vw] md:w-[2vw] h-auto" />
          </motion.div>
          <p className="font-semibold text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] fontMon text-[#333333]">
            Client Priority
          </p>
          <p className="text-[#4D4D4D] text-[0.9rem] sm:text-[1.1rem] lg:text-[1.3rem] popins">
            Building strong partnerships with tailored client solutions
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHighlights;

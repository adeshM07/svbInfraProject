import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../CSS/Fleet.css";
import f1 from "../assets/fleetCardIMG1.png";
import f2 from "../assets/fleetCardIMG2.png";
import f3 from "../assets/fleetCardIMG3.png";
import f4 from "../assets/fleetCardIMG4.png";
import f5 from "../assets/fleetCardIMG5.png";
import f6 from "../assets/fleetCardIMG6.png";
import f7 from "../assets/fleetCardIMG7.png";
import f8 from "../assets/fleetCardIMG8.png";
import f9 from "../assets/fleetCardIMG9.png";
import f10 from "../assets/fleetCardIMG10.png";

const Fleet = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Responsiveness handling
  const handleResize = () => {
    setIsMobile(window.innerWidth < 740);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Framer Motion animation control
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount: 0.1, // triggers earlier for mobile
    margin: "-10% 0px", // ensures visibility trigger on small screens
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardDetails = [
    { img: f1, title: "Tata Hitachi EX 70", desc: "Compact power built for dependable excavation." },
    { img: f2, title: "Bharatbenz Tipper 20 CUM", desc: "Strong performance for heavy-duty hauling." },
    { img: f3, title: "L&T Komatsu PC 2", desc: "Reliable strength for consistent site performance." },
    { img: f4, title: "380 Xtra", desc: "High-performance excavator for demanding earthwork." },
    { img: f5, title: "Volvo EX 210", desc: "Precision and durability in every excavation task." },
    { img: f6, title: "Hydraulic Rock Splitter", desc: "Efficient and powerful tool for controlled rock breaking." },
    { img: f7, title: "Man Dumpers 18 CUM", desc: "Rugged and efficient for bulk material movement." },
    { img: f8, title: "Compressors", desc: "Reliable air power for all on-site construction tools." },
    { img: f9, title: "Diamond Rope Cutting", desc: "Accurate cutting for concrete and rock structures." },
    { img: f10, title: "JCB (3DX)", desc: "Versatile and efficient for all construction operations." },
  ];

  return (
    <div>
      {/* ===== Fleet Banner ===== */}
      <motion.div
        id="fleetBanner"
        className="w-screen h-[45vh] md:h-[45vh] lg:h-[95vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-7 w-fit lg:mx-auto mx-auto pt-[60px] lg:pt-[107px]">
          {/* Heading & Subtext */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-[1.5rem] md:text-[3.2rem] lg:text-[4rem] fontMon font-bold text-white leading-8 md:leading-14 lg:leading-20">
              Powering <span className="text-[#FDC000]">Progress</span> with <br /> Modern Machinery
            </p>

            <motion.p
              className="text-white text-[10px] md:text-[16px] lg:text-[1rem] popins-noweight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {isMobile ? (
                <>
                  Equipped with advanced machinery, we deliver <br /> efficient,
                  precise, and dependable results <br /> across all project scales.
                </>
              ) : (
                <>
                  Equipped with advanced machinery, we deliver efficient, precise,
                  and dependable <br /> results across all project scales.
                </>
              )}
            </motion.p>
          </motion.div>

          {/* Stats Box */}
          <motion.div
            className="w-[82vw] h-[6vh] lg:w-[52vw] lg:h-[17vh] bg-white rounded-xl lg:rounded-2xl flex justify-evenly place-items-center"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {[
              ["Total Machines", "40+ Machines"],
              ["Availability", "Immediate"],
              ["Fleet Diversity", "Heavy Machinery"],
              ["Successful Projects", "50+ Projects"],
            ].map(([title, value], i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col gap-[3px] lg:gap-[20px] text-center">
                  <p className="popins-noweight text-[0.6rem] md:text-[0.8rem] lg:text-[1.3rem] font-semibold text-[#333333]">
                    {title}
                  </p>
                  <p className="popins-noweight text-[0.4rem] md:text-[0.6rem] lg:text-[1rem] font-normal text-[#333333]">
                    {value}
                  </p>
                </div>
                {i < 3 && <div className="w-[1px] h-[40px] lg:h-[70px] bg-[#333333]" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ===== Section: Fleet Cards ===== */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: 0.2 }}
        className="overflow-hidden"
      >
        {/* Section Title */}
        <motion.div
          className="flex flex-col gap-2 w-fit mx-10 lg:mx-40 my-30 lg:my-30"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <p className="text-[#333333] text-[1rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold underline decoration-[#FDC000] underline-offset-8 mb-6">
            Our Powerfull Machines
          </p>

          <div>
            <p className="popins-bold text-[1.4rem] md:text-[3rem] lg:text-[4rem] md:leading-14 lg:leading-[69px]">
              Power, Precision, and <br /> Performance -{" "}
              <span className="text-[#FCD000]">All in One Fleet.</span>
            </p>
            {isMobile ? (
              <p className="text-[#333333] text-[0.8rem]">
                A fleet engineered for strength, accuracy, and <br /> unmatched
                efficiency.
              </p>
            ) : (
              <p className="text-[#333333] md:text-[1.4rem] lg:text-[1rem]">
                A fleet engineered for strength, accuracy, and unmatched efficiency.
              </p>
            )}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex gap-x-8 gap-y-10 w-[77vw] justify-between flex-wrap mx-auto mb-20"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {cardDetails.map((item, index) => (
            <motion.div
              key={index}
              className="w-[80vw] h-[50vh] md:h-[45vh] lg:w-[24vw] lg:h-[50vh] flex flex-col gap-2 lg:gap-5 px-4 py-4 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 },
                },
              }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="h-[30vh] w-[80vw] lg:w-[22vw] lg:h-[30vh]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col gap-2">
                <p className="text-[#333333] text-[1.5rem] md:text-[2.5rem] lg:text-[1.5rem] font-semibold fontMon">
                  {item.title}
                </p>
                <p className="text-[1rem] md:text-[1.3rem] lg:text-[1rem] popins">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Fleet;

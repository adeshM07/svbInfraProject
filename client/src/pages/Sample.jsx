{/* <div
  className="flex flex-col gap-[calc(0.5rem+0.4vw)] animate-fadeUp opacity-0 translate-y-3"
>
  <p className="text-[calc(1.2rem+1vw)] lg:text-[calc(2.5rem+1.5vw)] text-white aboutCom font-bold leading-[calc(1.8rem+0.6vw)] lg:leading-[calc(3rem+1vw)]">
    Building the Future with <br /> 
    <span className="text-[#FDC000]">Strength & Precision</span>
  </p>

  {isMobile ? (
    <p className="text-white w-[88%] text-[calc(0.9rem+0.3vw)] popins leading-[calc(1.4rem+0.3vw)]">
      Delivering reliable infrastructure solutions with modern machinery and expert execution.
    </p>
  ) : (
    <p className="text-white text-[calc(1rem+0.5vw)] popins leading-[calc(1.5rem+0.4vw)]">
      Delivering reliable infrastructure solutions with modern machinery <br /> and expert execution.
    </p>
  )}

  <button
    className="mt-[calc(1.5rem+0.5vw)] rounded-md bg-[#FDC000] text-[calc(0.8rem+0.3vw)] 
               font-semibold px-[calc(1rem+0.5vw)] py-[calc(0.4rem+0.3vw)] 
               lg:w-[calc(8vw+1rem)] lg:h-[calc(5vh+1rem)] popins-noweight
               hover:bg-[#ffcf33] transition-all duration-300"
  >
    See Our Fleet
  </button>
</div> */}



<div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
  {/* ===== IMAGE (Fades In Smoothly) ===== */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.4 }}
  >
    <img
      src={ic1}
      className="w-[85vw] h-[30vh] lg:w-[40vw] lg:h-[52vh]"
      alt="Commitment to health & safety"
    />
  </motion.div>

  {/* ===== TEXT SECTION ===== */}
  <div className="flex flex-col gap-[10px] lg:gap-[20px]">
    {/* Title (Spring Entry From Right + Slight Down) */}
    <motion.p
      className="text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold"
      initial={{ opacity: 0, x: 120, y: -30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.9,
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      Commitment to health & safety
    </motion.p>

    {/* List (Spring Entry With Slight Delay, Same Direction) */}
    <motion.ul
      id="HSEUL"
      className="text-[#333333] popins text-[14px] lg:text-[18px] bg-white -ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      initial={{ opacity: 0, x: 120, y: -30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.25,
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <li className="HSEUL">Setting out of corner benchmarks</li>
      <li className="HSEUL">Surveying ground levels</li>
      <li className="HSEUL">Surveying top levels</li>
      <li className="HSEUL">Excavation to approved depth</li>
      <li className="HSEUL">Dressing of loose soil</li>
      <li className="HSEUL">Making up to cut-off level</li>
    </motion.ul>
  </div>
</div>

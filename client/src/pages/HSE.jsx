import React from 'react'
import '../CSS/HSE.css'
import '../App.css'
import c1 from '../assets/hseCard1.png'
// import c1 from '../assets/hseCard1.png'
import { motion } from "framer-motion";
import c2 from '../assets/hseCard2.png'
import c3 from '../assets/hseCard3.png'
import c4 from '../assets/hseCard4.png'
import ic1 from '../assets/infoCardIMG1.png'
import ic2 from '../assets/infoCardIMG2.png'
import ic3 from '../assets/infoCardIMG3.png'
import ic4 from '../assets/infoCardIMG4.png'
import { useState, useEffect } from 'react'



const HSE = () => {
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
            <div className='bg-[F8F8F8]'>
                <div
                    className="h-[45vh] md:h-[45vh] lg:h-[95vh] w-screen"
                    id="hseBanner"
                >
                    <div className="lg:pl-[135px] pl-[20px] flex flex-col gap-[20px] lg:gap-[12px] pt-[80px] lg:pt-[195px]">
                        {/* Animated Title */}
                        <motion.p
                            className="hseBannerTitle text-[1.4rem] md:text-[2.5rem] md:leading-10 leading-6 lg:text-[4rem] text-[#FDC000] lg:leading-20"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            Health, Safety & Environmental <br />
                            <span className="text-white">Practices</span>
                        </motion.p>

                        {/* Animated Description */}
                        <motion.p
                            className="hseBannerDesc text-white text-[14px] md:text-[1.5rem] lg:text-[20px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            Delivering infrastructure that’s safe,
                            <br className="lg:hidden" /> responsible, and built for the
                            <br className="hidden lg:block" /> future.
                        </motion.p>
                    </div>
                </div>

                {isMobile ? (
                    <motion.div
                        className="relative w-full overflow-hidden -mt-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex animate-scroll gap-[2px] lg:gap-[24px] min-w-full">
                            <img src={c1} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c2} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c3} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c4} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c1} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c2} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c3} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c4} className="w-[47vw] h-[30vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="relative w-full overflow-hidden -mt-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex justify-center gap-[2px] lg:gap-[1.5rem] min-w-full">
                            <img src={c1} className="w-[47vw] h-[30vh] md:w-[25vw] md_h-[17vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c2} className="w-[47vw] h-[30vh] md:w-[25vw] md_h-[17vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c3} className="w-[47vw] h-[30vh] md:w-[25vw] md_h-[17vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                            <img src={c4} className="w-[47vw] h-[30vh] md:w-[25vw] md_h-[17vh] lg:w-[18vw] lg:h-[47vh] flex-shrink-0 scale-3d" />
                        </div>
                    </motion.div>
                )}


                <div className="flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mx-[20px] lg:mx-[200px]">
                    {/* Section Heading */}
                    <motion.p
                        className="text-[14px] md:text-[1.3rem] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        Our Commitment to HSE
                    </motion.p>

                    {/* Title + Description */}
                    <motion.div
                        className="flex flex-col gap-2 lg:gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        {/* Main Title */}
                        <motion.p
                            className="lg:text-[4rem] md:text-[2.5rem] text-[1.4rem] text-[#333333] fontMon font-bold"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Your Safety, <span className="text-[#FDC000]">Our</span> Priority.
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="popins text-[14px] md:text-[1.3rem] lg:text-[20px] text-[#333333]"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            At SVB Infra Projects, health, safety, and environmental protection are at the core of everything we do.
                        </motion.p>
                    </motion.div>
                </div>
                <div className=' w-full flex flex-col place-items-center gap-[27px] my-14 md:gap-[150px] lg:gap-[150px] lg:my-[81px]'>
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
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] lg:h-[52vh]"
                                alt="Commitment to health & safety"
                            />
                        </motion.div>

                        {/* ===== TEXT SECTION ===== */}
                        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                            {/* Title (Spring Entry From Right + Slight Down) */}
                            <motion.p
                                className=" text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
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
                                className="text-[#333333] popins text-[14px] bg-white  lg:-ml-20 lg:text-[18px] pl-7  lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl md:text-[15px] lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
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
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic2}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] lg:h-[52vh]"
                                alt="Commitment to health & safety"
                            />
                        </motion.div>

                        {/* ===== TEXT SECTION ===== */}
                        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                            {/* Title (Spring from Left → Right + Slight Down) */}
                            <motion.p
                                className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
                                initial={{ opacity: 0, x: -120, y: -30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15,
                                    duration: 0.9,
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                Monitoring & risk management
                            </motion.p>

                            {/* List (Spring Entry from Left, Slight Delay) */}
                            <motion.ul
                                id="HSEUL"
                                className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-999"
                                initial={{ opacity: 0, x: -120, y: -30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15,
                                    delay: 0.25,
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <li className="HSEUL">Continuous monitoring is used to maintain a safe work environment.</li>
                                <li className="HSEUL">Health and Safety Managers supervise all site operations.</li>
                                <li className="HSEUL">Regular inspections and toolbox talks support ongoing safety awareness.</li>
                                <li className="HSEUL">Real-time risk assessments help identify potential hazards early.</li>
                                <li className="HSEUL">Corrective actions are taken promptly to ensure safety and maintain productivity.</li>  
                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0  lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic1}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] lg:h-[52vh]"
                                alt="Commitment to health & safety"
                            />
                        </motion.div>

                        {/* ===== TEXT SECTION ===== */}
                        <div className="flex flex-col  gap-[10px] lg:gap-[20px]">
                            {/* Title (Spring Entry From Right + Slight Down) */}
                            <motion.p
                                className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
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
                               Certified Equipment operators
                            </motion.p>

                            {/* List (Spring Entry With Slight Delay, Same Direction) */}
                            <motion.ul
                                id="HSEUL"
                                className="text-[#333333] popins text-[14px] md:text-[15px] bg-white lg:-ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
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
                                <li className='HSEUL'>Certified operators handle all heavy machinery and equipment safely and efficiently.</li>
                                <li className='HSEUL'>Regular training and evaluations keep operators current with the latest safety protocols.</li>
                                <li className='HSEUL'>Third-party inspections verify compliance with industry standards and regulations.</li>
                                <li className='HSEUL'>These measures ensure smooth, reliable operations while maintaining a safe work environment.</li>

                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 lg:flex-row-reverse px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-col gap-7 lg:gap-[39px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic2}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[40vw] lg:h-[52vh]"
                                alt="Commitment to health & safety"
                            />
                        </motion.div>

                        {/* ===== TEXT SECTION ===== */}
                        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                            {/* Title (Spring from Left → Right + Slight Down) */}
                            <motion.p
                                className="text-[#FDC000] text-[1.4rem] md:text-[2rem] lg:text-[2rem] fontMon font-semibold"
                                initial={{ opacity: 0, x: -120, y: -30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15,
                                    duration: 0.9,
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                Compliance & Adaptability
                            </motion.p>

                            {/* List (Spring Entry from Left, Slight Delay) */}
                            <motion.ul
                                id="HSEUL"
                                className="text-[#333333] popins text-[14px] md:text-[15px] lg:text-[18px] lg:-mr-22 bg-white pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-999"
                                initial={{ opacity: 0, x: -120, y: -30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15,
                                    delay: 0.25,
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <li className='HSEUL'>Strict adherence to site-specific HSE guidelines, statutory regulations, and client safety policies.</li>
                                <li className='HSEUL'>Regular audits ensure full compliance with legal and operational standards.</li>
                                <li className='HSEUL'>Teams remain adaptable to changing site conditions and project requirements.</li>
                                <li className='HSEUL'>These practices ensure operations are conducted safely, efficiently, and without risk to employees, the public, or surrounding environments.</li>
                                
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HSE
import React from 'react'
import '../CSS/HSE.css'
import { motion } from 'framer-motion'
import ic1 from '../assets/REPCardIMG1.png'
import ic2 from '../assets/REPCardIMG2.png'
import ic3 from '../assets/REPCardIMG3.png'
import ic4 from '../assets/REPCardIMG4.png'
import ic5 from '../assets/REPCardIMG5.png'
import ic6 from '../assets/REPCardIMG6.png'


const REP = () => {
    return (
        <>
            <div>
                <div className='flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mt-[40px] mx-[20px]  lg:ml-[119px]'>
                    <p className='text-[14px] md:text-[1.4rem] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]'>Rock Excavation</p>
                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <p className='lg:text-[4rem] md:text-[2.5rem] text-[1.4rem] text-[#333333] fontMon font-bold'> <span className='text-[#FDC000]'>Rock Excavation</span> Services</p>
                        <p className='popins text-[14px] md:text-[20px] lg:text-[20px] text-[#333333]'>Rock excavation involves precise removal of hard rock layers to <br /> prepare the site for safe and stable construction.</p>
                    </div>
                </div>
                <div className=' w-full flex flex-col px-2 lg:px-0  gap-[27px] my-21 md:gap-[150px] lg:gap-[2.5rem]  place-items-center'>
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
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[50vw] lg:h-[52vh]"
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
                                Diamond Rope Cutting
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
                                <li className='HSEUL'>Precision cutting technique using diamond wire saws for controlled rock removal.</li>
                                <li className='HSEUL'>Ideal for confined spaces or sensitive sites requiring vibration-free excavation.</li>
                                <li className='HSEUL'>Ensures smooth and accurate cutting of hard rock or concrete.</li>
                                <li className='HSEUL'>Minimizes structural damage and allows for reuse of cut rock sections.</li>
                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic2}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[50vw] lg:h-[52vh]"
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
                                Controlled Rock Blasting
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
                                <li className='HSEUL'>Involves use of explosives in a calculated pattern to fracture rock efficiently.</li>
                                <li className='HSEUL'>Carried out under strict safety and environmental guidelines.</li>
                                <li className='HSEUL'>Reduces excessive vibration and fly-rock through controlled charge design.</li>
                                <li className='HSEUL'>Ideal for large-scale excavation in hilly or rocky terrains.</li>
                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic3}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[50vw] lg:h-[52vh]"
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
                                Chemical Rock Cutting
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
                                <li className='HSEUL'>Uses non-explosive chemical agents to fracture rock through expansion pressure.</li>
                                <li className='HSEUL'>Suitable for urban or sensitive zones where blasting is restricted.</li>
                                <li className='HSEUL'>Environmentally safe and produces minimal noise or vibration.</li>
                                <li className='HSEUL'>Allows precise cutting without disturbing adjacent structures.</li>
                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic4}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[50vw] lg:h-[52vh]"
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
                                Hydraulic Rock Splitting
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
                                <li className='HSEUL'>Employs hydraulic pressure to split large boulders or rock masses.</li>
                                <li className='HSEUL'>Provides controlled and low-noise excavation alternatives to blasting.</li>
                                <li className='HSEUL'>Enables safe removal of rock close to existing foundations or utilities.</li>
                                <li className='HSEUL'>Portable and adaptable for deep or narrow excavation zones.</li>
                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[20px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic5}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[50vw] lg:h-[52vh]"
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
                                Excavation Rock breaker
                            </motion.p>

                            {/* List (Spring Entry With Slight Delay, Same Direction) */}
                            <motion.ul
                                id="HSEUL"
                                className="text-[#333333] popins md:text-[15px] text-[14px] bg-white lg:-ml-20 lg:text-[18px] pl-7 lg:pl-12 font-semibold flex flex-col gap-[12px] py-2 rounded-xl lg:gap-[15px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
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
                                <li className='HSEUL'>Heavy-duty excavator attachments used to break hard rock or reinforced concrete.</li>
                                <li className='HSEUL'>Provides flexibility for selective demolition and excavation tasks.</li>
                                <li className='HSEUL'>Cost-effective for medium-scale rock removal.</li>
                                <li className='HSEUL'>Operated by skilled technicians ensuring precision and safety.</li>
                            </motion.ul>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center">
                        {/* ===== IMAGE (Fades In Smoothly) ===== */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={ic6}
                                className="w-[85vw] h-[30vh] md:w-[85vw] md:h-[34vh] lg:w-[50vw] lg:h-[52vh]"
                                alt="Commitment to health & safety"
                            />
                        </motion.div>

                        {/* ===== TEXT SECTION ===== */}
                        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
                            {/* Title (Spring from Left → Right + Slight Down) */}
                            <motion.p
                                className="text-[#FDC000] text-[1.4rem] lg:text-[2rem] md:text-[2rem] fontMon font-semibold"
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
                                Excavation Chiselling Method
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
                                <li className='HSEUL'>Manual or mechanical chiselling to remove stubborn or small rock sections.</li>
                                <li className='HSEUL'>Used in areas where precision or limited access prevents use of heavy machinery.</li>
                                <li className='HSEUL'>Labor-intensive but ensures high control over excavation boundaries.</li>
                                <li className='HSEUL'>Common in foundation trimming or utility trenching.</li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default REP
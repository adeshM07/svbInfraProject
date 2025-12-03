import React from "react";
import '../CSS/ProjectVideoBanner.css'

const ProjectVideoBanner = () => {
    return (
        <div className="relative w-[90vw] border-2 border-red-500 lg:w-[85vw] h-[70vh] mx-auto overflow-hidden banner-shape shadow-lg">
            {/* 🎥 Background Video */}
            <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1"
                title="SVB Infra Project Video"
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media"
            ></iframe>

            {/* Overlay */}
            <div className="absolute  inset-0 bg-black/40"></div>

            {/* Text Layer */}
            <div className="absolute z-10 top-[20%] left-[7%] flex flex-col gap-4 text-white">
                <div className="bg-black/60 px-4 py-1 rounded-full text-[0.8rem] w-fit">
                    Our Latest Project
                </div>

                <h1 className="text-[2rem] lg:text-[3rem] font-bold leading-tight">
                    Powering Your Future with <br /> Innovative Infrastructure Projects
                </h1>

                <p className="text-[1rem] lg:text-[1.2rem]">
                    SVB Infra – Engineering the Future of Infrastructure
                </p>

                <button className="bg-[#FDC000] text-black font-semibold px-5 py-2 rounded-md w-fit mt-2 hover:bg-[#ffd84f] transition-all">
                    Explore All
                </button>
            </div>
        </div>
    );
};

export default ProjectVideoBanner;

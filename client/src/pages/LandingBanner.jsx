import React from "react";
import bg from "../assets/tempBG.png";

const LandingBanner = () => {
  let bannerList = [
    { home: { img: '', title: '', desc: '', btnContent:'',btnLink:'' } },
    { about: { img: '', title: '', desc: '', btnContent:'',btnLink:'' } }
  ]
  return (
    <>
      <div className="w-screen h-[88vh]">
        <img src={bg} className="w-full h-full" />
      </div>
    </>
  );
};

export default LandingBanner;

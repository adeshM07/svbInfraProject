import React from "react";
import "../CSS/CustomShape.css";
import lvideo from "../assets/landingVideo.mov";

const CustomShape = () => {
  return (
    <div className="custom-shape-container">
      {/* Put anything inside this shape */}
      <video src={lvideo} autoPlay muted loop playsInline></video>
    </div>
  );
};

export default CustomShape;

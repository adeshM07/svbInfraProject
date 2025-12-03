import React from "react";
import bannerBG from "../assets/contactUSBannerBG.png";
import "../App.css";
import "../CSS/ContactUS.css";
import mail from "../assets/mail_marker_black.png";
import phone from "../assets/phone_marker_black.png";
import address from "../assets/address_marker_black.png";
import lin from "../assets/contact-in-icon.png";
import fb from "../assets/facebook-black-marker.png";
import yt from "../assets/contact-yt-icon.png";
import ins from "../assets/contact-ins-icon.png";
import { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/clientRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please check your connection.");
    }
  };

  return (
    <>
      <div className="w-screen">
        <div
          id="contactUSBanner"
          className=" flex  flex-col gap-[51px] w-full h-[45vh] md:h-[45vh] lg:h-[95vh] mb-[30rem] "
        >
          <p className="contactUSbannertitle text-white text-[1.2rem] md:text-[2.5rem] md:leading-12 lg:text-[4rem] leading-7 lg:leading-19 ml-12 lg:ml-48 pt-[40px] lg:pt-[90px] ">
            Contact SVB Infra Projects — Your <br /> Partner for Reliable{" "}
            <span className="text-[#FDC000]">
              Construction <br /> Solutions
            </span>{" "}
          </p>
          <div className="w-[88vw]  lg:w-[69vw] h-[100vh] lg:h-[88vh]  lg:pl-[5rem]   bg-white rounded-lg lg:py-[60px] lg:gap-[80px] lg:pr-[48px] mx-auto">
            <p className="contactUSBannerInfoTitle font-semibold text-[1.2rem] text-center lg:text-[2rem] text-[#333333] my-10 lg:my-0 lg:text-start lg:mb-14">
              Get in touch
            </p>
            <div className="flex flex-col-reverse lg:flex-row gap-[4rem]">
              <div className="lg:w-[30vw]   ">
                <div className="flex flex-col gap-10 lg:gap-10">
                  <div className="flex flex-col gap-[20px]  lg:gap-[26px]">
                    <div className="flex gap-6  mx-auto lg:mx-0 lg:gap-7   w-[80vw] lg:w-[26vw] h-fit ">
                      <img
                        src={address}
                        className="w-[3vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh] mt-3"
                      />
                      <div className="flex flex-col">
                        <span className="popins text-[10px] md:text-[0.9rem] lg:text-[1rem] text-[#FDC000]">
                          Karnataka Office
                        </span>
                        <p className="text-black popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                          UB Tower, UB City, 24, Vittal Mallya Road,
                          <br />
                          Bengaluru, Karnataka - 560001
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6  mx-auto lg:mx-0 lg:gap-7   w-[80vw] lg:w-[26vw] h-fit ">
                      <img
                        src={address}
                        className="w-[3vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh] mt-3"
                      />
                      <div className="flex flex-col">
                        <span className="popins text-[10px] md:text-[0.9rem] lg:text-[1rem] text-[#FDC000]">
                          Andhra / Telangana Office
                        </span>
                        <p className="text-black popins text-[8px] md:text-[0.8rem] lg:text-[0.85rem] leading-relaxed">
                          PCS Business Centre 40-6/3-3,
                          <br />
                          Co-operative, State Bank Colony, Labbipet,
                          <br />
                          Vijayawada, Andhra Pradesh - 520010
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 mx-auto lg:mx-0 lg:gap-7 place-items-center w-[80vw] lg:w-[26vw] h-fit">
                      <a href="tel:9900641808" className="flex gap-6">
                        <img
                          src={phone}
                          className="w-[3vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh]"
                        />
                        <p className="text-[#333333] popins-contact text-[0.9rem] lg:text-[1rem]">
                          9900641808 , 9980851508
                        </p>
                      </a>
                    </div>
                    <div className="flex gap-6 mx-auto lg:mx-0 lg:gap-7 place-items-center  w-[80vw] lg:w-[26vw] h-fit">
                      <a
                        href="mailto:info@svbinfraprojects.com"
                        className="flex gap-6"
                      >
                        <img
                          src={mail}
                          className="w-[4vw] h-[1.7vh] lg:w-[1.5vw] lg:h-[2.8vh]"
                        />
                        <p className="text-[#333333] popins-contact text-[0.9rem] lg:text-[1rem]">
                          info@svbinfraprojects.com
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="bg-[#333333]   h-px pr-[9rem]"></div>
                  <div className="flex gap-[20px]  lg:mt-[40px]">
                    <p className="popins text-[#333333] text-[1rem]">
                      Follow for More
                    </p>
                    <div className="flex gap-[12px]  place-items-center">
                      <a
                        href="https://www.youtube.com/@svbinfraprojects5316"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={yt}
                          className="w-[5vw]  h-[2vh] md:w-[3vw] md:h-[2vh] lg:w-[1.1vw] lg:h-[2vh]"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/share/17Yn7q28DJ/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={fb}
                          className="w-[5vw]  h-[2.6vh] md:w-[3vw] md:h-[2vh] lg:w-[1.3vw] lg:h-[2.9vh]"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="   w-[90vw] lg:w-[30vw]  lg:px-0 pl-[12px]  lg:pl-[20px]">
                {/* <p className='contactUSBannerInfoTitle text-[#333333] font-semibold text-[2rem] mb-[50px]'>Send us a message</p> */}
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="  w-full lg:w-[30vw]  flex flex-col"
                >
                  <div className="flex flex-wrap   w-full gap-2 lg:gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      className="px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="lg:w-[27.2vw] w-[82vw] lg:h-[14vh] p-3 rounded-md mt-5 border"
                    placeholder="Message"
                    id=""
                  ></textarea>
                  <div className=" w-full    lg:w-[27.2vw] flex justify-end mt-[33px]">
                    <button
                    //   type="submit"
                      className="contactUSBannerFormButton font-semibold text-[#333333] w-[60vw] h-[4vh] lg:w-[9vw] lg:h-[6vh] rounded-md bg-[#FDC000] mx-auto lg:mx-0"
                    >
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;

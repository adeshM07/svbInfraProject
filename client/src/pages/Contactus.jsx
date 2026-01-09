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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // remove alphabets, allow only digits, max length 10
      const numeric = value.replace(/[^0-9]/g, "");
      if (numeric.length <= 10) {
        setFormData({ ...formData, phone: numeric });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.message.trim()
    ) {
      alert("All fields are mandatory.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycbxP-roj2iur4-w4nHWJ8lqp8y7mWy9APEnllJ3_77_CnfaHVeOcPFpLCXFa9dT3Bm1qRg/exec";

    const formBody = `Email=${encodeURIComponent(
      formData.email
    )}&Name=${encodeURIComponent(formData.name)}&Phone=${encodeURIComponent(
      formData.phone
    )}&Address=${encodeURIComponent(
      formData.address
    )}&Message=${encodeURIComponent(formData.message)}`;
    setIsSubmitting(true);
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    })
      .then(() => {
        alert("Thank you! We’ll notify you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((err) => {
        alert("Something went wrong. Try again.");
        console.error(err);
      });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SVB_Brochure.pdf";
    link.download = "SVB_Brochure.pdf";
    link.click();
  };

  return (
    <>
      <div className="w-screen  ">
        <div
          id="contactUSBanner"
          className=" flex   flex-col gap-[51px] w-full [@media(min-width:650px)_and_(max-width:1200px)]:min-h-fit min-h-[45vh] md:min-h-[45vh] lg:min-h-[95vh] mb-[5rem] "
        >
          <p className="contactUSbannertitle text-white text-[1.2rem] md:text-[2.5rem] md:leading-12 lg:text-[4rem] leading-7 lg:leading-19 ml-12 lg:ml-48 pt-[40px] lg:pt-[90px] ">
            Contact SVB Infra Projects — Your
            <br className="[@media(min-width:300px)_and_(max-width:410px)]:hidden md:block xl:hidden 2xl:block" />{" "}
            Partner for Reliable{" "}
            <span className="text-[#FDC000]">
              Construction <br className="xl:hidden 2xl:block" /> Solutions
            </span>{" "}
          </p>
          <div className="w-[88vw]  lg:w-[69vw] min-h-fit  lg:pl-[5rem]   bg-white rounded-lg lg:py-[60px] lg:gap-[80px] lg:pr-[48px] mx-auto">
            <p className="contactUSBannerInfoTitle  flex flex-col gap-y-2 md:flex-row justify-between font-semibold text-[1.2rem] text-center lg:text-[2rem] text-[#333333] my-10 lg:my-0 lg:text-start lg:mb-14">
              Get in touch
              <div
                onClick={downloadResume}
                className="contactUSBannerFormButton font-normal   text-[#333333] flex justify-evenly place-items-center text-center bg-[#FDC000] border-none md:bg-transparent w-[40vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[11vh] h-[5vh] md:w-[13vw] lg:h-[7vh] rounded-md md:border hover:border-none mx-auto lg:mx-0  transition duration-300 transform
  hover:bg-[#ffcf00] hover:scale-105 hover:shadow-lg cursor-pointer text-[1rem] md:text-[1.5rem]"
              >
                Brochure{" "}
                <i class="fa-solid fa-download text-[1rem] md:text-[1.5rem]"></i>
              </div>
            </p>
            <div className="flex   flex-col-reverse lg:flex-row gap-[4rem]">
              <div className="lg:w-[30vw]   h-fit">
                <div className="flex flex-col gap-10 lg:gap-10">
                  <div className="flex flex-col gap-[20px]  lg:gap-[26px]">
                    <div className="flex gap-6  mx-auto lg:mx-0 lg:gap-7   w-[80vw] lg:w-[26vw] h-fit ">
                      <img
                        src={address}
                        className="w-[3vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[2vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh] mt-3"
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
                        className="w-[3vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[2vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh] mt-3"
                      />
                      <div className="flex flex-col">
                        <span className="popins text-[10px] md:text-[0.9rem] lg:text-[1rem] text-[#FDC000]">
                          Andhra & Telangana Office
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
                          className="[@media(min-width:650px)_and_(max-width:1200px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[2vw] w-[3vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh]"
                        />
                        <p className="text-[#333333] popins-contact text-[0.9rem] lg:text-[1rem]">
                          +91 9900641808 , +91 9980851508
                        </p>
                      </a>
                    </div>
                    <div className="flex  gap-6 mx-auto lg:mx-0 lg:gap-7   w-[80vw] lg:w-[26vw] h-fit">
                      <a
                        href="mailto:info@svbinfraprojects.com"
                        className="flex gap-6 place-items-center"
                      >
                        <img
                          src={mail}
                          className="[@media(min-width:650px)_and_(max-width:1200px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[2vw] w-[4vw] h-[1.7vh] lg:w-[1.5vw] lg:h-[2.8vh]"
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
                          className="w-[5vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[4vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[2vw]  h-[2vh] md:w-[3vw] md:h-[2vh] lg:w-[1.1vw] lg:h-[2vh]"
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
                          className="w-[5vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[6vh] [@media(min-width:650px)_and_(max-width:1200px)]:w-[3vw]  h-[2.6vh] md:w-[3vw] md:h-[2vh] lg:w-[1.3vw] lg:h-[2.9vh]"
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
                      className="px-3 lg:px-4 [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] [@media(min-width:300px)_and_(max-width:400px)]:h-[5vh] w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-3 lg:px-4 w-[40vw] [@media(min-width:300px)_and_(max-width:400px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                    <div className="flex items-center px-3 lg:px-4 w-[40vw] [@media(min-width:300px)_and_(max-width:400px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] h-[4vh] lg:w-[13vw] lg:h-[7vh] border  rounded-md bg-white">
                      <span className="text-gray-500 mr-1">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="outline-none w-full placeholder:text-sm lg:placeholder:text-base"
                      />
                    </div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      className="px-3 lg:px-4 w-[40vw] [@media(min-width:300px)_and_(max-width:400px)]:h-[5vh] [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base"
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="lg:w-[27.2vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[25vh] w-[82vw] lg:h-[14vh] p-3 rounded-md mt-5 border"
                    placeholder="Message"
                    id=""
                  ></textarea>
                  <div className=" w-full    lg:w-[27.2vw] flex justify-end mt-[33px]">
                    <button
                      disabled={isSubmitting}
                      //   type="submit"
                      className={`contactUSBannerFormButton font-semibold text-[#333333] w-[60vw] [@media(min-width:650px)_and_(max-width:1200px)]:h-[10vh] h-[4vh] lg:w-[9vw] lg:h-[6vh] rounded-md bg-[#FDC000] mx-auto lg:mx-0  transition duration-300 transform 
                       ${
                         isSubmitting
                           ? "bg-[#f1d36a] opacity-70 cursor-not-allowed"
                           : "bg-[#FDC000] hover:bg-[#ffcf00] hover:scale-105 hover:shadow-lg cursor-pointer"
                       }
  hover:bg-[#ffcf00] hover:scale-105 hover:shadow-lg cursor-pointer`}
                    >
                      {isSubmitting ? "Sending..." : "Send Now"}
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

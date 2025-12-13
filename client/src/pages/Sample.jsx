import React, { useState } from "react";
import "../App.css";
import "../CSS/ContactUS.css";
import mail from "../assets/mail_marker_black.png";
import phone from "../assets/phone_marker_black.png";
import address from "../assets/address_marker_black.png";
import fb from "../assets/facebook-black-marker.png";
import yt from "../assets/contact-yt-icon.png";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numeric = value.replace(/[^0-9]/g, "");
      if (numeric.length <= 10) {
        setFormData({ ...formData, phone: numeric });
      }
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.message
    ) {
      alert("All fields are mandatory.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbxMXXpLSjDzpyndl3juxYhJuiNTXMTnHjMbZELESB_2lnrbVgLOp43iZzaoGw8ESi7TDg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Email=${encodeURIComponent(formData.email)}&Name=${encodeURIComponent(
          formData.name
        )}&Phone=${encodeURIComponent(formData.phone)}&Address=${encodeURIComponent(
          formData.address
        )}&Message=${encodeURIComponent(formData.message)}`,
      }
    ).then(() => {
      alert("Thank you! We’ll notify you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    });
  };

  return (
    <div className="w-screen">
      <div
        id="contactUSBanner"
        className="
          flex flex-col gap-[51px] w-full
          min-h-[45vh] md:min-h-[45vh] lg:min-h-[95vh]
          pb-[6rem]
          [@media(min-width:800px)_and_(max-width:1200px)]:min-h-fit
        "
      >
        <p className="contactUSbannertitle text-white text-[1.2rem] md:text-[2.5rem] lg:text-[4rem] ml-12 lg:ml-48 pt-[40px] lg:pt-[90px]">
          Contact SVB Infra Projects — Your <br className="hidden md:block" />
          Partner for Reliable <span className="text-[#FDC000] mx-1">Construction Solutions</span>
        </p>

        <div
          className="
            w-[88vw] lg:w-[69vw]
            min-h-fit
            bg-white rounded-lg
            lg:pl-[5rem] lg:pr-[48px] lg:py-[60px]
            mx-auto
          "
        >
          <p className="font-semibold text-[1.2rem] lg:text-[2rem] text-[#333333] text-center lg:text-left lg:mb-14 my-10 lg:my-0">
            Get in touch
          </p>

          <div className="flex flex-col-reverse lg:flex-row gap-[4rem]">
            {/* LEFT INFO */}
            <div className="lg:w-[30vw]">
              <div className="flex flex-col gap-10">
                {[{
                  title: "Karnataka Office",
                  text: "UB Tower, UB City, 24, Vittal Mallya Road, Bengaluru - 560001",
                },{
                  title: "Andhra / Telangana Office",
                  text: "PCS Business Centre, Vijayawada - 520010",
                }].map((item, i) => (
                  <div key={i} className="flex gap-6 w-[80vw] lg:w-[26vw]">
                    <img src={address} className="w-[3vw] lg:w-[1vw] h-[3vh]" />
                    <div>
                      <span className="text-[#FDC000]">{item.title}</span>
                      <p className="text-black">{item.text}</p>
                    </div>
                  </div>
                ))}

                <a href="tel:9036354261" className="flex gap-6">
                  <img src={phone} className="w-[3vw] lg:w-[1vw]" />
                  <p>+91 9036354261 , +91 9980851508</p>
                </a>

                <a href="mailto:info@svbinfraprojects.com" className="flex gap-6">
                  <img src={mail} className="w-[4vw] lg:w-[1.5vw]" />
                  <p>info@svbinfraprojects.com</p>
                </a>

                <div className="flex gap-4 items-center mt-6">
                  <p>Follow for More</p>
                  <a href="https://www.youtube.com/@svbinfraprojects5316">
                    <img src={yt} className="w-[5vw] lg:w-[1.1vw]" />
                  </a>
                  <a href="https://www.facebook.com/share/17Yn7q28DJ/">
                    <img src={fb} className="w-[5vw] lg:w-[1.3vw]" />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="w-[90vw] lg:w-[30vw]">
              <form onSubmit={handleSubmit} className="flex flex-col  ">
                <div className="flex flex-wrap gap-3 justify-between">
                  {["name", "email", "address"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      className="w-[43vw] md:w-[14vw] h-[5vh] md:h-[7vh] border rounded-md px-3"
                    />
                  ))}

                  <div className="flex items-center w-[43vw] md:w-[14vw] h-[5vh] md:h-[7vh] border rounded-md px-3">
                    <span className="mr-2">+91</span>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full outline-none"
                    />
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full lg:w-[29vw] h-[14vh] border rounded-md p-3 mt-5"
                />

                <button className="mt-8 w-full lg:w-[9vw] h-[6vh] bg-[#FDC000] rounded-md font-semibold hover:scale-105 transition">
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

import React from "react";
import SectionWrapper from "../component/common/SectionWrapper";
import NavLink from "../component/common/nav-link";
import logo from "../assets/svb_logo_footer.png";
import footerBg from "../assets/footerBG.jpeg";

import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";

import { Link } from "react-router-dom";

const FooterNew = () => {
  return (
    <footer
      className="relative bg-[#101010] text-gray-300"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <SectionWrapper className="relative pt-16 pb-12 flex flex-col gap-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 text-left">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Link to="/">
              <img
                src={logo}
                alt="SVB Infra Projects"
                className="w-32 object-contain"
              />
            </Link>

            <p className="text-[16px] leading-relaxed max-w-md">
              At SVB Infra Projects, we are a trusted provider of comprehensive
              infrastructure solutions, specializing in construction,
              earthmoving, land development, and project execution.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:items-center">
            <h4 className="font-semibold text-2xl border-b-2 border-primary inline-block pb-1">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3 text-[16px]">
              <li><NavLink href="/about-us">About Us</NavLink></li>
              <li><NavLink href="/services">Services</NavLink></li>
              <li><NavLink href="/our-fleet-2">Our Fleet</NavLink></li>
              <li><NavLink href="/portfolio">Portfolio</NavLink></li>
              <li><NavLink href="/gallery">Gallery</NavLink></li>
              <li><NavLink href="/hse">HSE</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <h4 className="font-semibold text-2xl border-b-2 border-primary inline-block pb-1">
              Get in Touch
            </h4>

            <div className="flex flex-col gap-4 text-[16px]">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p>
                  #1851/A, 2nd Cross, 3rd Stage, Prakashnagar,
                  Bangalore – 560021, Karnataka, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div className="flex gap-1">
                  <a href="tel:+919900641808" className="hover:text-primary">
                    9900641808
                  </a>,
                  <a href="tel:+919980851508" className="hover:text-primary">
                    9980851508
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <a
                  href="mailto:info@svbinfraprojects.com"
                  className="hover:text-primary"
                >
                  info@svbinfraprojects.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/20"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
          <div className="flex gap-3 justify-center md:justify-start">
            <SocialIcon href="https://www.youtube.com/@svbinfraprojects">
              <Youtube />
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/company/svbinfraprojects">
              <Linkedin />
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/svbinfraprojects">
              <Instagram />
            </SocialIcon>
          </div>

          <p className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} SVB Infra Projects. All rights reserved.
          </p>
        </div>
      </SectionWrapper>
    </footer>
  );
};

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full border border-white/30 hover:border-primary hover:bg-primary/10 transition"
  >
    {React.cloneElement(children, { className: "w-5 h-5 text-white" })}
  </a>
);

export default FooterNew;

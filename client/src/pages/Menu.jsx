import React, { useEffect, useState } from "react";
import Button from "../component/common/Button";
import NavLink from "../component/common/nav-link";
import { Menu, X } from "lucide-react";
import svbLogo from "../assets/SVB_Logo.png";
import SectionWrapper from "../component/common/SectionWrapper";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const vh = window.innerHeight;

      // ✅ ALWAYS show header at top
      if (currentScrollY <= 5) {
        setShowHeader(true);
        setIsAtTop(true);
        setLastScrollY(0);
        return;
      }

    
      const heroTransparentEnd = vh * 1; // 100vh
      const heroEnd = vh * 0.9; // ~150vh

      // -------------------------
      // HOME PAGE LOGIC
      // -------------------------
      if (isHome) {
        setIsAtTop(currentScrollY < heroTransparentEnd);

        // Always visible inside hero
        if (currentScrollY < heroEnd) {
          setShowHeader(true);
          setLastScrollY(currentScrollY);
          return;
        }
      } else {
        // -------------------------
        // OTHER PAGES LOGIC
        // -------------------------
        setIsAtTop(false); // ALWAYS force background
      }

      // -------------------------
      // DEFAULT SCROLL BEHAVIOR
      // -------------------------
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <SectionWrapper>
    <div
      className={`
        fixed top-0 left-0 w-full  
        transition-all duration-300 ease-in-out
        z-999
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${
          isHome && isAtTop && !open
            ? "bg-transparent"
            : "bg-[#333333] shadow-lg"
        }
      `}
    >
      <section
        className="
          py-6 text-white 
          mx-auto
        px-3 sm:px-5 xl:px-30
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link to="/">
          <div className="w-24 h-9 sm:w-28 sm:h-11 md:w-32 md:h-12 lg:w-34.5 lg:h-13">
            <img
              src={svbLogo}
              alt="svb-logo"
              className=" w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-7 font-medium text-white">
          <NavLink className="text-lg font-semibold" to="/about-us">
            About Us
          </NavLink>
          <NavLink className="text-lg font-semibold" to="/services">
            Services
          </NavLink>
          <NavLink className="text-lg font-semibold" to="/our-fleet-2">
            Our Fleet
          </NavLink>
          <NavLink className="text-lg font-semibold" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="text-lg font-semibold" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="text-lg font-semibold" to="/hse">
            HSE
          </NavLink>
        </ul>

        {/* ACTIONS */}
        <div className="flex  items-center gap-4">
          <Link to="/contact">
            <Button text="Contact Us" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </section>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        } bg-[#333333]`}
      >
        <ul className="flex text-white flex-col px-6 py-6 gap-5 font-medium border-t border-white/10">
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/our-fleet-2">Our Fleet</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/hse">HSE</NavLink>
        </ul>
      </div>
    </div>
    </SectionWrapper>
  );
};

export default Header;

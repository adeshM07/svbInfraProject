import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children, className = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className="flex">
      <Link
        to={to}
        className={`
          transition cursor-pointer
          ${className}
          ${
            isActive
              ? "text-primary border-b-2 border-primary"
              : "hover:text-primary"
          }
        `}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;

import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <section
      className="
        mx-auto
        px-3 sm:px-5 xl:px-30
        flex items-center justify-between
        xl:max-w-360 2xl:max-w-400
      "
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

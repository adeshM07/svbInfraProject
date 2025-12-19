import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // wait for page render (important for large pages like Portfolio)
    setTimeout(() => {
      const element = document.querySelector(hash);

      if (element) {
        const yOffset = -90; // navbar height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  }, [hash]);

  return null;
};

export default ScrollToHash;

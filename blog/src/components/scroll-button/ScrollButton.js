import { useEffect, useState } from "react";
import "./scroll-button.css";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="ScrollButton">
      <div className="container">
        <div className="box box--1"></div>
        <div className="box box--2"></div>
        <div className="box box--3"></div>
        <div className="box box--4"></div>
        <div className="box box--5"></div>
      </div>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
};

export default ScrollButton;

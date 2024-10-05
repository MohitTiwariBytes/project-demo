import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Success.css";
import tickAnimation from "../../assets/tickAnimation.gif";

const Success = () => {
  const imgRef = useRef(null); // Create a ref for the image element

  useEffect(() => {
    gsap.fromTo(
      ".confirmation",
      { opacity: 0, y: -200 },
      { opacity: 1, y: 30, duration: 0.6, ease: "power1.inOut" }
    );

    return () => {
      gsap.to(".confirmation", { y: -50, duration: 0.5 });
    };
  }, []);

  return (
    <div className="confirmation">
      <div className="innerConfirmation">
        <img ref={imgRef} src={tickAnimation} alt="Success" />
        <h4>Successfully added!</h4>
      </div>
    </div>
  );
};

export default Success;

import React from "react";
import CV from "../../assets/Kaho_Cheng_Resume_13-12-2022-20-03-28.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;

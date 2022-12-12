import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      {/* Tutorial said to use double underscore but the icons wont load, using single underscore for now */}
      <a
        href="https://www.linkedin.com/in/ka-ho-cheng-19584b223/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Azusa89" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

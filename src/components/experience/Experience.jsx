import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { DiRor } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icons" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icons" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiJavascript className="experience__details-icons" />
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icons" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icons" />
              <h4>Sass</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icons" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* End of front end */}
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiRuby className="experience__details-icons" />
              <h4>Ruby</h4>
            </article>
            <article className="experience__details">
              <DiRor className="experience__details-icons" />
              <h4>Ruby On Rails</h4>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icons" />
              <h4>Postgresql</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

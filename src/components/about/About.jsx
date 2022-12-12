import React from "react";
import "./about.css";
import ME from "../../assets/59798103.jpg";
import { BiBook } from "react-icons/bi";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiBook className="about__icon" />
              <h5>Experience</h5>
              <small>Boot Camp Grad</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            numquam nostrum iusto amet quia commodi dolorum cum earum ullam
            libero doloribus harum magnam dolore sint saepe eum hic, natus rerum
            nulla consequuntur modi nihil nisi! Laudantium, cumque! Officiis
            sequi saepe blanditiis et. Amet laudantium beatae in facilis ratione
            quos odio.
          </p>

          <a href="contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;

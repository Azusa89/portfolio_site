import React from "react";
import "./about.css";
import ME from "../../assets/59798103.jpg";
import { BiBook } from "react-icons/bi";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
            <AnimationOnScroll
              offset={200}
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
            >
              <article className="about__card">
                <BiBook className="about__icon" />
                <h5>Experience</h5>
                <small>Boot Camp Grad</small>
              </article>
            </AnimationOnScroll>
            <AnimationOnScroll
              delay={250}
              offset={200}
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
            >
              <article className="about__card">
                <BiBook className="about__icon" />
                <h5>Experience</h5>
                <small>Boot Camp Grad</small>
              </article>
            </AnimationOnScroll>
            <AnimationOnScroll
              delay={500}
              offset={200}
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
            >
              <article className="about__card">
                <BiBook className="about__icon" />
                <h5>Experience</h5>
                <small>Boot Camp Grad</small>
              </article>
            </AnimationOnScroll>
          </div>

          <p>
            "Hi there, my name is Kaho Cheng and I am a British-born Hong Kong
            person with a passion for 3D modeling and web development. I have
            experience working as a casino dealer and English teacher, and have
            spent many years honing my 3D modeling skills as a hobby. I am now
            looking to use my skills and experiences to pursue a career in web
            development and am excited to take on new challenges in this field."
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

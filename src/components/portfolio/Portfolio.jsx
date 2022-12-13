import React from "react";
import "./portfolio.css";
import PONGIMG from "../../assets/PongGame.jpg";
import RENTARETROIMG from "../../assets/rentaretro.jpg";
import SUBSTRACKEDIMG from "../../assets/substracked.jpg";
import TODOLISTIMG from "../../assets/ToDo_List.jpg";

const data = [
  { id: 1, image: PONGIMG, title: "Pong Clone", github: "", demo: "" },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PONGIMG} alt="tech-doc-img" />
          </div>
          <h3>Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target={"_blank"}>
              Github
            </a>
            <a href="" className="btn btn-primary" target={"_blank"}>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

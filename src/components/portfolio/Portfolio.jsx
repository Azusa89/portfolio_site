import React from "react";
import "./portfolio.css";
import PONGIMG from "../../assets/PongGame.jpg";
import TODOLISTIMG from "../../assets/ToDo_List.jpg";
import RENTARETROIMG from "../../assets/rentaretro.jpg";
import SUBSTRACKEDIMG from "../../assets/substracked.jpg";

const data = [
  {
    id: 1,
    image: PONGIMG,
    title: "Pong Clone",
    github: "https://github.com/Azusa89/PongClone",
    demo: "../../pongDemo/pongindex.html",
  },
  {
    id: 2,
    image: TODOLISTIMG,
    title: "ToDo List",
    github: "https://github.com/Azusa89/ToDoList",
    demo: "../../ToDoList/index.html",
  },
  {
    id: 3,
    image: RENTARETROIMG,
    title: "Rent-a-Retro",
    github: "https://github.com/clementckmc/Rent-a-retro",
    demo: "https://rent-a-retro.herokuapp.com/",
  },
  {
    id: 4,
    image: SUBSTRACKEDIMG,
    title: "Substracked",
    github: "https://github.com/a-vasse/substracked",
    demo: "https://www.substracked.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target={"_blank"}>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

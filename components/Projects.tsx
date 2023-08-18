import React from "react";
import Title from "./Title";
import { SiInformatica } from "react-icons/si";
import ProjectCards from "./ProjectCards";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import dashboard from "../public/img/projects/dashboard.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import noorShop from "../public/img/projects/noorShop.webp";
import orebiShopping from "../public/img/projects/orebiShopping.png";
import reactBD from "../public/img/projects/reactBD.png";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<SiInformatica />}></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCards
          title="Amazon Clone"
          img={amazonClone.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
        <ProjectCards
          title="Cyber Blog"
          img={cyberBlog.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
        <ProjectCards
          title="Dashboard"
          img={dashboard.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
        <ProjectCards
          title="Dynamic Portfolio"
          img={dynamicPortfolio.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
        <ProjectCards
          title="Noor Shop"
          img={noorShop.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
        <ProjectCards
          title="Orebi Shopping"
          img={orebiShopping.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
        <ProjectCards
          title="React BD"
          img={reactBD.src}
          link="https://www.amazon.in/ref=nav_logo"
        ></ProjectCards>
      </div>
    </div>
  );
};

export default Projects;

import mealRushImg from "../../../img/mealRush.png";
import foqusedImg from "../../../img/foqused.png";
import hustlerImg from "../../../img/hustler.png";

import "./Projects.css";
import Project from "./Project";
import Slider from "./Slider";

const Projects = () => {
  const components = [
    <Project
      link={"https://github.com/vajkke/MealRush"}
      demoLink={"https://vajkke.github.io/MealRush/"}
      heading={"MealRush"}
      img={mealRushImg}
      projectName={"mealRushProject--container project-container"}
      technologies={[
        "Figma",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Postman",
      ]}
    />,
    <Project
      link={"https://github.com/vajkke/hustler"}
      demoLink={"https://vajkke.github.io/hustler/"}
      heading={"Hustler"}
      img={hustlerImg}
      projectName={"hustlerProject--container project-container"}
      technologies={["HTML5", "CSS3", "JavaScript"]}
    />,
    <Project
      link={"https://github.com/vajkke/Foqused"}
      demoLink={"https://vajkke.github.io/Foqused/"}
      heading={"Foqused"}
      img={foqusedImg}
      projectName={"foqusedProject--container project-container"}
      technologies={["Figma", "HTML5", "CSS3", "JavaScript"]}
    />,
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-heading">My best work</h1>
      {/* <div className="vertical-line1"></div> */}
      <Slider slides={components} />
    </section>
  );
};

export default Projects;

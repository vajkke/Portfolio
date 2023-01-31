import { FaGithub } from "react-icons/fa";

const Project = (props) => {
  return (
    <div className={props.projectName}>
      <div className="icon--container">
        <a href={props.link} target="_blank">
          <FaGithub className="github-icon" />
        </a>
        <a href={props.demoLink} target="_blank" className="demo">
          <p>demo</p>
        </a>
      </div>
      <h1 className="project-heading">{props.heading}</h1>
      <div className="project-img--container">
        <img src={props.img} className="project-img" />
      </div>
      {/* <p className="project-technologies">
          Technologies used: Figma, HTML, CSS, JavaScript, Node.js
        </p> */}
      <button className="about-project">About</button>
    </div>
  );
};

export default Project;

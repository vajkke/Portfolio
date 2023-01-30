import "./Abilities.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaFigma,
  FaWordpress,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSublimetext,
  SiVisualstudiocode,
  SiPostman,
  SiGnubash,
} from "react-icons/si";

const Abilities = () => {
  return (
    <section className="abilities-section">
      <h1 className="abilities--heading">What do I bring to the table?</h1>
      <div className="languages-tools--container">
        <div className="languages--container">
          <h1 className="languages-heading">Languages & Frameworks</h1>
          <div className="languages-icons">
            <div className="languages-icons--top">
              <h1 className="hover-fx hover-html">
                <AiFillHtml5 className="icon" />
              </h1>
              <h1 className="hover-fx hover-css">
                <FaCss3Alt className="icon" />
              </h1>
              <h1 className="hover-fx hover-js">
                <SiJavascript className="icon icon-js" />
              </h1>
            </div>
            <div className="languages-icons--bottom">
              <h1 className="hover-fx hover-bootstrap">
                <FaBootstrap className="icon" />
              </h1>
              <h1 className="hover-fx hover-sass">
                <FaSass className="icon" />
              </h1>
              <h1 className="hover-fx hover-react">
                <FaReact className="icon" />
              </h1>
            </div>
          </div>
        </div>

        <div className="tools--container">
          <h1 className="tools-heading">Tools</h1>
          <div className="tools-icons">
            <div className="tools-icons--top">
              <h1 className="hover-fx hover-figma">
                <FaFigma className="icon" />
              </h1>
              <h1 className="hover-fx hover-git">
                <FaGitAlt className="icon" />
              </h1>
              <h1 className="hover-fx hover-wordpress">
                <FaWordpress className="icon" />
              </h1>
            </div>
            <div className="tools-icons--bottom">
              <h1 className="hover-fx hover-postman">
                <SiPostman className="icon" />
              </h1>
              <h1 className="hover-fx hover-bash">
                <SiGnubash className="icon" />
              </h1>
              <h1 className="hover-fx hover-vscode">
                <SiVisualstudiocode className="icon" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;

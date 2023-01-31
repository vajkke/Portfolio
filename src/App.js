import "../styles/Portfolio.css";
import Intro from "./portfolio/Intro/Intro";
import About from "./portfolio/About/About";
import Abilities from "./portfolio/Abilities/Abilities";
import Projects from "./portfolio/Projects/Projects";
import Contact from "./portfolio/Contact/Contact";

const App = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Abilities></Abilities>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default App;

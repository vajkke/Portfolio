import "../styles/Portfolio.css";
import Intro from "./portfolio/Intro/Intro";
import About from "./portfolio/About/About";
import Abilities from "./portfolio/Abilities/Abilities";
import Projects from "./portfolio/Projects/Projects";

const App = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Abilities></Abilities>
      <Projects></Projects>
    </div>
  );
};

export default App;

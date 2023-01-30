import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro-section">
      <nav className="main-nav">
        <ul>
          <li>About</li>
          <li>Abilities</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="introduction">
        <h1 className="intro-hello">Hello, my name is</h1>
        <h1 className="intro-name">Aleksandar Vajukic</h1>
        <h1 className="intro-finish">I build things for the web</h1>
      </div>
    </section>
  );
};

export default Intro;

import "./Intro.css";

const Intro = () => {
  const handleClickScrollAbout = () => {
    const aboutSection = document.querySelector(".about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickScrollAbilities = () => {
    const section = document.querySelector(".abilities-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickScrollProjects = () => {
    const section = document.querySelector(".projects-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickScrollContact = () => {
    const section = document.querySelector(".contact-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="intro-section">
      <nav className="main-nav">
        <ul>
          <li onClick={handleClickScrollAbout}>About</li>
          <li onClick={handleClickScrollAbilities}>Abilities</li>
          <li onClick={handleClickScrollProjects}>Projects</li>
          <li onClick={handleClickScrollContact}>Contact</li>
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

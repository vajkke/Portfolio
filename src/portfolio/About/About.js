import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="who--container about--container">
        <h1 className="who--heading">Who am I?</h1>
        <div className="who--line"></div>
        <div className="who--text">
          I am a 23 year old Front End developer from Serbia. My love for
          technology and desire to learn have driven me to self-teach web
          development for the past year, with a focus on Front End. However, my
          ultimate goal is to expand my expertise and become a Full Stack Web
          developer, capable of tackling complex projects and delivering high
          quality results.
        </div>
      </div>
      <div className="story--container about--container">
        <h1 className="story--heading">What's my story?</h1>
        <div className="story--line"></div>
        <div className="story--text">
          My initial goal was to pursue a career as a freelance web developer,
          but I decided to take an internship opportunity at a startup company
          instead. During my time there, I gained valuable experience
          participating in client business calls and contributing to the
          development of the company's website. This experience has further
          solidified my passion for web development and has given me a greater
          appreciation for the technical and interpersonal skills required to
          succeed in this field.
        </div>
      </div>
    </section>
  );
};

export default About;

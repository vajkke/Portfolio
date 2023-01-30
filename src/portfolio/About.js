import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="who--container about--container">
        <h1 className="who--heading">Who am I?</h1>
        <div className="who--line"></div>
        <div className="who--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          mauris vestibulum, lobortis mi eget, vestibulum tortor. Vestibulum
          quis nunc vulputate diam malesuada auctor. Donec consectetur mattis
          dapibus. Vivamus nulla augue, pulvinar sed purus in, iaculis tincidunt
          metus. Suspendisse potenti. Nam consequat nunc neque, at consequat sem
          ultricies eu. Sed eget finibus tellus. Donec imperdiet orci sed ligula
          pharetra, eu.
        </div>
      </div>
      <div className="story--container about--container">
        <h1 className="story--heading">What's my story?</h1>
        <div className="story--line"></div>
        <div className="story--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          mauris vestibulum, lobortis mi eget, vestibulum tortor. Vestibulum
          quis nunc vulputate diam malesuada auctor. Donec consectetur mattis
          dapibus. Vivamus nulla augue, pulvinar sed purus in, iaculis tincidunt
          metus. Suspendisse potenti. Nam consequat nunc neque, at consequat sem
          ultricies eu. Sed eget finibus tellus. Donec imperdiet orci sed ligula
          pharetra, eu.
        </div>
      </div>
    </section>
  );
};

export default About;

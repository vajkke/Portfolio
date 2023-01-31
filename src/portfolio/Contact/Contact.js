import "./Contact.css";

import { useRef } from "react";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2l6lib",
        "template_zzl301i",
        form.current,
        "jxpjXLifLEOdTy9lN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="contact--container">
        <h1 className="contact-heading">Let's work together</h1>
        <div className="form-and-social">
          <div className="email-form--container">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  required
                  name="user_name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  required
                  name="user_email"
                />
              </div>
              <div>
                <textarea
                  id="body"
                  placeholder="message"
                  required
                  name="message"
                />
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>

          <div className="social-media--container">
            <h1 className="social-media--heading">You can find me here</h1>
            <ul className="social-media--icons">
              <a href="https://github.com/vajkke" target="_blank">
                <AiFillGithub className="social-media--icon" />
              </a>
              <a href="https://www.instagram.com/vajke__/" target="_blank">
                <AiFillInstagram className="social-media--icon" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

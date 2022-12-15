import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3vnf5ir",
      "template_06uymay",
      form.current,
      "CVCj6LVv0lO6HJPcy"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get Tn Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <AnimationOnScroll
            offset={200}
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
          >
            <article className="contact__option">
              <MdEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>Chengy1989@hotmail.com</h5>
              <a href="mailto:Chengy1989@hotmail.com" target="_blank">
                Shoot me an Email!
              </a>
            </article>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={200}
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
          >
            <article className="contact__option">
              <AiFillPhone className="contact__option-icon" />
              <h4>Phone</h4>
              <h5>N/A</h5>
              <a href="mailto:Chengy1989@hotmail.com" target="_blank">
                Ring me at work
              </a>
            </article>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={200}
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
          >
            <article className="contact__option">
              <FaMobileAlt className="contact__option-icon" />
              <h4>Mobile</h4>
              <h5>N/A</h5>
              <a href="mailto:Chengy1989@hotmail.com" target="_blank">
                Ring me out of work
              </a>
            </article>
          </AnimationOnScroll>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

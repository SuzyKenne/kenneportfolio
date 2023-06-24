import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xiluxii','template_caiuj5r', form.current, 'HMwsQX_OaHJxAFOlR')
    .then(
      (result) => {
        console.log(result.text);
        e.target.reset()
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>suzyndatewo@gmail.com</h5>
            <a href="mailto:suzyndatewo@gmail.com" target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineTwitter className="contact__option__icon" />
            <h4>Twitter</h4> <h5>Profile</h5>
            <a
              href="https://www.twitter/Suzydatewo"
              target="_blank"
            >
              Tape me on Twitter
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4> <h5>Direct message</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+237650398429"
              target="_blank"
            >
              Whatsapp me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="full name" required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="your message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;

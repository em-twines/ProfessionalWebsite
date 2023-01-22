import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
        )
  }

  return (
    <div className="contact-me">
      <div>Contact Me</div>
      <form ref={form} className="form" onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" name="user_name"/>
        <label>email:</label>
        <input type="email" name="user_email"></input>
        <label>message:</label>
        <textarea name="message" required></textarea>
        <div className="submit-button">
          <button className="button-51 font-link " type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

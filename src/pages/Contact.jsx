import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [newContactAttempt, setNewContactAttempt] = useState("");
  const form = useRef();
  // async function addNewContactAttempt() {
  //   let res = await axios.post(
  //     "http://127.0.0.1:8000/api/contactAttempts/",
  //     newContactAttempt
  //   );
  //   if (res.status === 201) {
  //     console.log(res);
  //   }
  // }

  function handleSubmit(event) {
    event.preventDefault();
        console.log( process.env.SERVICE_ID , process.env.TEMPLATE_ID, process.env.PUBLIC_KEY)

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
        )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    // let newContactAttempt = {
    //   email: email,
    //   message: message,
    // };
    // console.log(newContactAttempt);
    // setNewContactAttempt(newContactAttempt);
    // addNewContactAttempt(newContactAttempt);
    // setEmail("");
    // setMessage("");
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

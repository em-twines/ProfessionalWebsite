import React, { useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newContactAttempt, setNewContactAttempt] = useState("");

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

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    // let newContactAttempt = {
    //   email: email,
    //   message: message,
    // };
    // console.log(newContactAttempt);
    // setNewContactAttempt(newContactAttempt);
    // addNewContactAttempt(newContactAttempt);
    setEmail("");
    setMessage("");
  }

  return (
    <div className = 'contact-me'>
      <div >Contact Me</div>
      <form className = "form" onSubmit={handleSubmit}>
        <label>email:</label>
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          required
          value={email}
        ></input>
        <label>message:</label>
        <textarea
          className="text-area"
          type="text" rows="5" cols="40"
          onChange={(event) => setMessage(event.target.value)}
          required
          value={message}
        ></textarea>
        <div className="submit-button">
          <button className="button-51 font-link " type="submit">
            Submit
          </button>
        </div>
      </form>

    </div>
  );
}

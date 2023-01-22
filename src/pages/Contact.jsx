import React, { useState } from "react";
import axios from "axios";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newContactAttempt, setNewContactAttempt] = useState("");

  async function addNewContactAttempt() {
    let res = await axios.post(
      "http://127.0.0.1:8000/api/contactAttempts/",
      newContactAttempt
    );
    if (res.status === 201) {
      console.log(res);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newContactAttempt = {
      email: email,
      message: message,
    };
    console.log(newContactAttempt);
    setNewContactAttempt(newContactAttempt);
    addNewContactAttempt(newContactAttempt);
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <div className="title contact">Contact Me</div>
      {/* <div className = "email"> */}
      <form className="form" onSubmit={handleSubmit}>
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
        {/* <div className = "message">message:</div> */}
        <div className="submit-button">
          <button className="button-51 font-link " type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* </div> */}
    </div>
  );
}

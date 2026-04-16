import { useState } from "react";

function Contact() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [message, setMessage] = useState("");
  var [status, setStatus] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
      return;
    }

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
  setStatus("Message sent successfully!");

  setName("");
  setEmail("");
  setMessage("");
})
      .catch(function (error) {
  setStatus("Something went wrong");
});
  }

  return (
    <section id="contact" className="contact section">
      <h2>Contact Me</h2>
      <p className="section-text">
        Have a project idea or want to connect? Send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {status && <p className="success-msg">{status}</p>}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
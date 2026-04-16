import { useState } from "react";

function ContactPage() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [message, setMessage] = useState("");
  var [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setStatus("Please fill all fields");
      return;
    }

    fetch("/api/contact", {
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
      .catch(function () {
        setStatus("Something went wrong");
      });
  }

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>

        <p className="contact-text">
          Have a project idea or want to collaborate? Feel free to send me a
          message.
        </p>

        {status && <p className="contact-status">{status}</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={function (e) {
              setName(e.target.value);
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value);
            }}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            value={message}
            onChange={function (e) {
              setMessage(e.target.value);
            }}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>📍 Kerala, India</p>
          <p>📧 yourmail@example.com</p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
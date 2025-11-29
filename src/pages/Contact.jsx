import React, { useState } from "react";
import { contact } from "../assets/assets";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    const { name, email, subject, message } = form;

    const mailtoLink = `mailto:kshitij.vijay.pawar@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="container py-5 w-100">
      <h2 className="text-center mb-5 pb-5 fs-1 fw-bold" style={{marginBottom:"620px"}}>Contact Me</h2>

      <div className="contact w-100">
        <div className="w-50">
          <img src={contact} alt=""/>
        </div>

        <div className="row justify-content-center w-50">
          <div className="col-md-7">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter subject"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                rows="5"
                className="form-control"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="btn btn-primary w-100" onClick={sendMail}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

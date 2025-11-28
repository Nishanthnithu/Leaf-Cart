import React, { useState } from 'react'
import Navbar from './Navbar'
import '../componenets/Contact.css'

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name,
      email,
      phone,
      message
    };

    const oldData = JSON.parse(localStorage.getItem("contactData")) || [];

    oldData.push(userData);

    localStorage.setItem("contactData", JSON.stringify(oldData));

    alert("Message Saved Successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <>
      <div className='contact-header'>
        <Navbar />
        <div className='head'>
          <h1>Contact</h1>
          <p>Let’s Connect</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-info">
            <h1>Send us Message</h1>

            <div className="info-box">
              <div className="icon-circle">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>555-1234-678</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-circle">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>mail@example.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-circle">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name *</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email *</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Phone *</label>
            <input 
              type="number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label>Message</label>
            <textarea 
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

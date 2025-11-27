import React from 'react'
import Navbar from './Navbar'
import '../componenets/Contact.css'

export default function Contact() {
  
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

          <form className="contact-form">
            <label>Name *</label>
            <input type="text" placeholder="" />

            <label>Email *</label>
            <input type="email" placeholder="" />

            <label>Phone *</label>
            <input type="text" placeholder="" />

            <label>Message</label>
            <textarea rows="5"></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>

        </div>
      </section>
      <div className="App">
      <header className="header-social">
        <div className="social-icons">
          
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Ready to Find your Perfect Plant?</h1>
          <p>
            Browse our online store or visit us in person to
            <br />
            experience the beauty of nature.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
       
      </section>
          </div>
    
    </>
  )
}

import React, { useEffect } from "react";
import "./About.css";
import Navbar from "./Navbar";

export default function About() {

  return (
    <>
      <div className="header">
        <Navbar />
        <div className="header-sub">
          <h1>ABOUT</h1>
          <h2>We are Passionate About Our Work</h2>
        </div>
      </div>

      <div className="herosection">
        <img
          className="herosection-right"
          src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/about-us.jpg"
          alt=""
        />
      </div>

      <div className="herosection-left">
        <h1>We strive to provide our customers with the highest quality</h1>
        <p>
          Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts
          who recognized the positive impact that plants can have on our lives.
        </p>

        <hr />

        <i>
          “We love what we do & create partnerships with our clients to ensure
          long-term success.”
        </i>
      </div>

      <div className="herosection-body">
        <div className="herosection-head">
          <h1>
            <b> Our Core Values that Drive Everything We Do</b>
          </h1>
        </div>

        <div className="herosection-body-sub">
          <div className="herosection-body-sub1">
            <div>
              <h2>Passionate About Work</h2>
              <p>Passion for work is enthusiasm and excitement.</p>
            </div>
            <div>
              <h2>Qualitiful products</h2>
              <p>Quality refers to customer satisfaction.</p>
            </div>
            <div>
              <h2>Creative team members</h2>
              <p>Our team designs smart solutions.</p>
            </div>
          </div>

          <div className="herosection-body-sub1">
            <div>
              <h2>Customer satisfaction</h2>
              <p>Happy customers make us stronger.</p>
            </div>
            <div>
              <h2>Innovation solutions</h2>
              <p>We find new ways using modern techniques.</p>
            </div>
            <div>
              <h2>Simplicity interface</h2>
              <p>We simplify processes for ease.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-container">
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p>
            Our mission is to make the world greener by providing the best
            plants and guidance.
          </p>

          <div className="mission-features">
            <div className="feature">
              <span>✔</span> Quality and Variety
            </div>
            <div className="feature">
              <span>✔</span> Expert Guidance
            </div>
            <div className="feature">
              <span>✔</span> Sustainable Practices
            </div>
            <div className="feature">
              <span>✔</span> Experienced Team
            </div>
          </div>
        </div>

        <div className="mission-image">
          <img
            src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/our-mission.jpg"
            alt="Mission"
          />
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Ready to Find your Perfect Plant?</h1>
          <p>Browse our store and experience nature.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>

      <div className="menu-footer-section">
        <div className="footer-top">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="logo"
            />
            <span>URBAN JUNGLE CO.</span>
          </div>

          <div className="footer-menu">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <hr/>

        <p className="copyright">
          Copyright © 2025 Generic eCommerce
        </p>
      </div>
    </>
  );
}

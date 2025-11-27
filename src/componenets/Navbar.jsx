import React, { useState } from 'react'
import'./Navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {

  const [itopen,setValue]=useState(false)

  const changeToggle=()=>{
    setValue(!itopen)
  }

  return (
    <>
      {/* ******NAVBAR****** */}
      <div className="overlay">
        <div className="parentnav">
          <div className="navbarr">
            <div className="logo">
              <h1>LEAF CART</h1>
            </div>

            <button onClick={changeToggle} className="toggle">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="toggleBtn">
              {itopen && (
                <ul>
                  <li>
                    <a href="">HOME</a>
                  </li>
                  <li>
                    <a href="">SHOP</a>
                  </li>
                  <li>
                    <a href="">ABOUT</a>
                  </li>
                  <li>
                    <a href="">CONTACT US</a>
                  </li>
                </ul>
              )}
            </div>

            <div className="main">
              <ul>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">SHOP</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </ul>

              <div className="cartBag"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ******NAVBAR****** */}
    </>
  );
}

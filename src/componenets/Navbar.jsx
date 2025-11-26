import React from 'react'
import'./Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className='overlay'>
        <div className="parentnav">
          <div className="navbarr">
            <div className="logo">
              <h1>LEAF CART</h1>
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
    </>
  );
}

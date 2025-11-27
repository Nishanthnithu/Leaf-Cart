import React, { useState } from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen]= useState(false)

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
                <Link to={"/"} onClick={()=>setOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/Shop" onClick={()=>setOpen(false)}>Shop</Link>
                </li>
                <li>
                  <Link to="/About" onClick={()=>setOpen(false)}>ABOUT</Link>
                </li>
                <li>
                  <Link to="/Contact" onClick={()=>setOpen(false)}>CONTACT US</Link>
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

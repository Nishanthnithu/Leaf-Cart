import React, { useState } from 'react'
import'./Navbar.css'
<<<<<<< HEAD
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {

  const [itopen,setValue]=useState(false)

  const changeToggle=()=>{
    setValue(!itopen)
  }
=======
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen]= useState(false)
>>>>>>> 40a85c609c8ca4887f9d21b0f16d8a87fcd1e2e5

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

      {/* ******NAVBAR****** */}
    </>
  );
}

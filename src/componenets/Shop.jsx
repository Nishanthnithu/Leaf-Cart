import React, { useState } from "react";
import Navbar from "./Navbar";
import"./Shop.css"
import { Link } from "react-router-dom";
import {productss,} from "./Homeprod"

export default function Shop() {

  const [search,setSearch]=useState("")
  const filterProducts = productss.filter((p)=>p.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <div className="navbarShop">
        <Navbar />
      </div>

      <div className="shopBanner">
        <div className="bannerOverlay">
          <center>
            <h1>Shop</h1>
          </center>
        </div>
      </div>

      <div className="Filterline">
        <p>Showing all 6 results</p>
        <input
          type="text"
          placeholder="    Search  Plants...."
          className="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="productGrid">
          {filterProducts.map((products) => (
            <Link
              to={`/products/${products.id}`}
              key={products.id}
              className="productCard"
            >
              <img src={products.img} alt="" className="productsImage" />
              <h3>{products.title}</h3>
              <p>{products.category}</p>
              <span className="productPrice">{products.price}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="shopEnd">
        <div className="readytofind">
          <div className="readToFindOverlay">
            <center>
              <h1>Ready to Find your Perfect Plant?</h1>
              <p>
                Browse our online store or visit us in person to <br />
                experience the beauty of nature.
              </p>
              <button>Shop Now</button>
            </center>
          </div>
        </div>
      </div>
    </>
  );

}

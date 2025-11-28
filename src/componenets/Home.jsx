import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import {faMoneyCheck} from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faTruckFast}from "@fortawesome/free-solid-svg-icons"
import{faTruckRampBox} from "@fortawesome/free-solid-svg-icons"
import{faHeart} from "@fortawesome/free-solid-svg-icons"
import { products, productsTwo } from './Homeprod';

export default function Home() {
  return (
    <>
      <div className="Container">
        <Navbar />
        <div className="overlayblack">
          <center>
            <div className="maincenter">
              <p>WELCOME TO LEAF CART</p>
              <h1>
                Discover the Beauty of <br /> Nature at Your Fingertips
              </h1>
              <a href="">
                <button>Shop Now</button>
              </a>
            </div>
          </center>
        </div>
      </div>



      <div className="homeSecondLine">
        <div className="image1">
          <FontAwesomeIcon icon={faMoneyCheck} className="payment" />
          <h2>
            <b>Secure Payment</b>
          </h2>
          <p>Elementum feugiat diam</p>
        </div>

        <div className="image1">
          <FontAwesomeIcon icon={faTruckFast} className="payment" />
          <h2>
            <b>Free Shipping</b>
          </h2>
          <p>For $50 order</p>
        </div>

        <div className="image1">
          <FontAwesomeIcon icon={faTruckRampBox} className="payment" />
          <h2>
            <b>Delivered with Care</b>
          </h2>
          <p>Lacinia pellentesque leo</p>
        </div>

        <div className="image1">
          <FontAwesomeIcon icon={faHeart} className="payment" />
          <h2>
            <b>Excellent Service</b>
          </h2>
          <p>Blandit gravida viverra</p>
        </div>
      </div>
      <hr style={{ width: "80%", marginTop: "50px" }} />

      {/* **********SECOND LINE********** */}

      {/* **********THIRD LINE********** */}

      <div className="trendingstore">
        <center>
          <h1>Trending Products</h1>
        </center>
      </div>
      {/* **********THIRD LINE********** */}

      {/* **********FOURTH LINE********** */}

      <div className="homeimages">
        {products.map((items) => (
          <div className="productCards" key={items.id}>
            <img src={items.img} alt={items.title} />
            <div className="stars">★★★★★</div>
            <h3>{items.title}</h3>
            <p className="category">{items.category}</p>
            <p className="price">{items.price}</p>
          </div>
        ))}
      </div>
      {/* **********FOURTH LINE********** */}

      {/* **********FIFTH LINE********** */}

      <div className="FlashSale">
        <div className="flashoverlay">
          <center>
            <div className="flashContent">
              <h1>
                Flash Sale: Up to 50% Off <br /> On Select Items!
              </h1>
              <br />
              <p>
                Don't miss out on our flash sale event! For a limited time,
                enjoy up to 50% <br /> off on a selection of our best-selling
                products.
              </p>
              <button>Shop Now</button>
            </div>
          </center>
        </div>
      </div>

      {/* **********FIFTH LINE********** */}

      {/* **********CATEGORY LINE********** */}

      <div id="ourCategory">
        <center>
          <h1>Our Categories</h1>
        </center>
      </div>

      <div className="categoryCards">
        <div className="categoryImages">
          {productsTwo.map((prods) => (
            <div className="categoryCards" key={prods.id}>
              <img src={prods.img} alt={prods.title} />
              <h3>{prods.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="premierDestination">
        <div className="premierDestinationContents">
          <h1>
            Your Premier <br /> Destination for All <br /> Green.
          </h1>
          <p>
            At Urban Jungle Co., we believe in the transformative power of
            plants. <br /> Whether you’re a seasoned gardener or just starting your
            green journey, <br/> our curated selection of plants will inspire and
            enrich your living space.
          </p>
          
        </div>
      </div>
    </>
  );
}

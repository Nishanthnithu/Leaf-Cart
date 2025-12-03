import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import {faMoneyCheck} from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faTruckFast}from "@fortawesome/free-solid-svg-icons"
import{faTruckRampBox} from "@fortawesome/free-solid-svg-icons"
import{faHeart} from "@fortawesome/free-solid-svg-icons"
import { products, productsTwo, popularproduct } from "./Homeprod"
import{faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import {faCircleUser} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

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
              <Link to={"/Shop"}>
                <button>Shop Now</button>
              </Link>
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
      <hr
        style={{
          width: "80%",
          marginTop: "50px",
          marginLeft: "150px",
          color: "rgb(245, 245, 245)",
        }}
      />

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
              <Link to={"/"}>
                <button>Shop Now</button>
              </Link>
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
        <img
          src="	https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/stats-count.jpg"
          alt=""
        />

        <div className="premierDestinationContents">
          <h1>
            Your Premier <br /> Destination for All <br /> Green.
          </h1>
          <br />
          <p>
            At Urban Jungle Co., we believe in the transformative power of
            plants. <br /> Whether you’re a seasoned gardener or just starting
            your green journey, <br /> our curated selection of plants will
            inspire and enrich your living space.
          </p>
          <br />
          <hr />

          <div className="customer">
            <div className="customerone">
              <h3>98%</h3>
              <span>Customer Satisfaction</span>
            </div>
            <div className="customertwo">
              <h3>103K</h3>
              <span> Plants Sold</span>
            </div>
          </div>
        </div>
      </div>

      <div className="popularproduct">
        <center>
          <h1>Popular Products</h1>
        </center>
      </div>

      <div className="popularPlants">
        {popularproduct.map((popul) => (
          <div className="popularthree" key={popul.id}>
            <img src={popul.img} alt="" />
            <div className="starss">★★★★★</div>
            <h3>{popul.title}</h3>
            <p className="popularCategory">{popul.category}</p>
            <span>{popul.price}</span>
          </div>
        ))}
      </div>

      <div className="theLastDiv">
        <div className="reviewheading">
          <h1>What Our Customers Say</h1>
          <p>
            Discover the reasons why people loves us and become your go-to
            partner.
          </p>
        </div>

        <div className="firstreview">
          <div className="colon">
            <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" />
          </div>
          <p>
            I am absolutely thrilled with the service I received <br /> from
            their company! They were attentive, responsive,
            <br /> and genuinely cared about meeting my needs. I <br /> highly
            recommend them.
          </p>
          <div className="profile">
            <FontAwesomeIcon icon={faCircleUser} />

            <div className="client">
              <p>Your Client</p>
            </div>
          </div>
        </div>

        <div className="firstreview2">
          <div className="colon">
            <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" />
          </div>
          <p>
            I am absolutely thrilled with the service I received <br /> from
            their company! They were attentive, responsive,
            <br /> and genuinely cared about meeting my needs. I <br /> highly
            recommend them.
          </p>
          <div className="profile">
            <FontAwesomeIcon icon={faCircleUser} />

            <div className="client2">
              <p>Your Client</p>
            </div>
          </div>
        </div>

        <div className="firstreview3">
          <div className="colon">
            <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" />
          </div>
          <p>
            I am absolutely thrilled with the service I received <br /> from
            their company! They were attentive, responsive,
            <br /> and genuinely cared about meeting my needs. I <br /> highly
            recommend them.
          </p>
          <div className="profile">
            <FontAwesomeIcon icon={faCircleUser} />

            <div className="client3">
              <p>Your Client</p>
            </div>
          </div>
        </div>
      </div>

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

      <div className="final">
        <footer>
          <center>
            <p>Copyright © 2025 Generic eCommerce</p>
          </center>
        </footer>
      </div>
    </>
  );
}


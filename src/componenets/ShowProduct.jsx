import React from 'react'
import Navbar from './Navbar'
import "./ShowProduct.css"
import { useParams } from 'react-router-dom';
import{productss} from"./Homeprod"
import { Link } from 'react-router-dom';


export default function ShowProduct() {

  const {id}=useParams('')
  const product=productss.find(p=>p.id===Number(id))
  return (
    <>
      <div className="cartNavbar">
        <Navbar />
      </div>

      <div className="singleProductContainer">
        <div className="containerImage">
          <img src={product.img} alt={product.title} />
        </div>

        <div className="containerContent">
          <p className="prodCategory">{product.category}</p>
          <h1>{product.title}</h1>

          <span
            className="proPrice"
            style={{ fontSize: "2em", fontWeight: 200, color: "grey" }}
          >
            {product.price} <p>& Free Shipping</p>
          </span>
          <p className="description">
            Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
            molestie <br />
            purus tristique sed tempor consequat risus tellus amet augue egestas{" "}
            <br /> mauris scelerisque donec ultrices.
          </p>

          <p className="description2" style={{ marginTop: "30px" }}>
            Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac{" "}
            <br />
            egestas elementum ut in ornare sit malesuada.
          </p>

          <div className="prodCart">
            <input type="number" placeholder="1" />
            <Link>
              <button> Add to cart</button>
            </Link>
          </div>

          <hr style={{ marginTop: "50px", color: "grey" }} />
        </div>
      </div>
      <hr />

      <div className="shopEndprod">
        <div className="readytofindd">
          <div className="readToFindOverlayy">
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

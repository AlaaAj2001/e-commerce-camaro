import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./topNavbar.css";

const TopNavbar = () => {
  return (
    <>
      <div className="icons_div">
        <FontAwesomeIcon className="icons" icon={faRepeat} />
        <FontAwesomeIcon className="icons" icon={faHeart} />
        <FontAwesomeIcon className="icons" icon={faCartPlus} />
        <div className="cart_div">
          <p className="your_cart">Your Cart</p>
          <p className="price">$ 0.00</p>
        </div>
      </div>
      <p className="title">CAMARO</p>
      <div className="bar_div">
        <button>HOME</button>
        <button>SHOP</button>
        <button>PAGES</button>
        <button>LOOKBOOK</button>
        <button>BRANDS</button>
      </div>
    </>
  );
};

export default TopNavbar;

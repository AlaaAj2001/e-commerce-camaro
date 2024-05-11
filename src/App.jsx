// App.js
import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import productImage3 from "./productsImages/JPLHeadphone.png";
import TopNavbar from "./topNavbar/topNavbar.jsx";
import Products from "./products/products.jsx";
import smartphonesLaptopsTabletsData from "./smartphonesLaptopsTabletsData.js";
import camerasData from "./camerasData.js";
import headphonesData from "./headphonesData.js";
import logosData from "./logosData.js";

class App extends Component {
  state = {
    products: [],
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        smartphonesLaptopsTabletsData: smartphonesLaptopsTabletsData,
        cameras: camerasData,
        headphones: headphonesData,
        logos: logosData,
        loading: false,
      });
    }, 1000);
  }

  render() {
    const {
      smartphonesLaptopsTabletsData,
      loading,
      headphones,
      cameras,
      logos,
    } = this.state;

    return (
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              <TopNavbar />
              <div className="laptops_div">
                <Products
                  ProductTitle={"Smartphone & Tablet"}
                  ProductArray={smartphonesLaptopsTabletsData}
                />
              </div>
              <div className="big_audio_sound_div">
                <div className="audio_sound_div">
                  <Products
                    ProductTitle={"Audio & Sound"}
                    ProductArray={headphones}
                  />
                  <img
                    className="adv_img"
                    src={productImage3}
                    alt="advertising"
                  />
                </div>
                <div className="learn_more_div">
                  <div className="dark_div">
                    Save your moneys with super promotion, available every
                    Sunday in the weekend!
                  </div>
                  <div className="red_div">
                    <p>LEARN MORE</p>
                    <FontAwesomeIcon
                      className="arrow_icon"
                      icon={faArrowRightLong}
                    />
                  </div>
                </div>
              </div>

              <div className="camera_div">
                <Products
                  ProductTitle={"Camera & Lens"}
                  ProductArray={cameras}
                />
                <div className="logos_div">
                  {logos.map((logo, index) => (
                    <img
                      className="logos_img"
                      key={index}
                      src={logo.logoImage}
                      alt={`Logo ${index}`}
                    />
                  ))}
                </div>
              </div>
              <div className="subscribe_div">
                Newsletter
                <p>Subscribe to recieve coupons and gift cards</p>
                <form>
                  <input
                    className="email_div"
                    type="email"
                    placeholder="Email address"
                  />
                  <button className="subscribe_button">SUBSCRIBE</button>
                </form>
              </div>
              <div className="nav_div">
                <p>Subscribe to recieve coupons and gift cards</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;

// App.js
import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faRepeat,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Product from "./Product";
import productImage from "./productsImages/dell_laptop.jpg";
import productImage2 from "./productsImages/headphones.png";
import productImage3 from "./productsImages/JPLHeadphone.png";
import productImage4 from "./productsImages/camera.png";
import canon from "./logosImages/canon.jpg";
import fujifilm from "./logosImages/Fujifilm.jpg";
import leica from "./logosImages/Leica.png";
import nikon from "./logosImages/Nikon.png";
import panasonic from "./logosImages/panasonic.jpg";
import pentax from "./logosImages/pentax.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.devicesDivRef = React.createRef();
  }

  state = {
    products: [],
    loading: true,
    devicesDivHieght: "auto",
  };

  componentDidMount() {
    setTimeout(() => {
      const laptopsData = [
        {
          ProductUrl: productImage,
          ProductAlt: "Dell Laptop",
          ProductName: "Latitude 5540 Laptop",
          ProductPrice: "$979.00",
        },
        {
          ProductUrl: productImage,
          ProductAlt: "Dell Laptop",
          ProductName: "Latitude 5540 Laptop",
          ProductPrice: "$979.00",
        },
        {
          ProductUrl: productImage,
          ProductAlt: "Dell Laptop",
          ProductName: "Latitude 5540 Laptop",
          ProductPrice: "$979.00",
        },
        {
          ProductUrl: productImage,
          ProductAlt: "Dell Laptop",
          ProductName: "Latitude 5540 Laptop",
          ProductPrice: "$979.00",
        },
        {
          ProductUrl: productImage,
          ProductAlt: "Dell Laptop",
          ProductName: "Latitude 5540 Laptop",
          ProductPrice: "$979.00",
        },
        {
          ProductUrl: productImage,
          ProductAlt: "Dell Laptop",
          ProductName: "Latitude 5540 Laptop",
          ProductPrice: "$979.00",
        },
      ];

      const camerasData = [
        {
          ProductUrl: productImage4,
          ProductAlt: "Camera",
          ProductName:
            "Canon EOS R8 Mirrorless Camera with RF 24-50mm f/4.5-6.3 IS STM Lens",
          ProductPrice: "$1,399.99",
        },
        {
          ProductUrl: productImage4,
          ProductAlt: "Camera",
          ProductName:
            "Canon EOS R8 Mirrorless Camera with RF 24-50mm f/4.5-6.3 IS STM Lens",
          ProductPrice: "$1,399.99",
        },
        {
          ProductUrl: productImage4,
          ProductAlt: "Camera",
          ProductName:
            "Canon EOS R8 Mirrorless Camera with RF 24-50mm f/4.5-6.3 IS STM Lens",
          ProductPrice: "$1,399.99",
        },
        {
          ProductUrl: productImage4,
          ProductAlt: "Camera",
          ProductName:
            "Canon EOS R8 Mirrorless Camera with RF 24-50mm f/4.5-6.3 IS STM Lens",
          ProductPrice: "$1,399.99",
        },
      ];

      const headphonesData = [
        {
          ProductUrl: productImage2,
          ProductAlt: "Navy",
          ProductName: "Beats Studio Pro Wireless Headphones — Navy",
          ProductPrice: "$349.99",
        },
        {
          ProductUrl: productImage2,
          ProductAlt: "Navy",
          ProductName: "Beats Studio Pro Wireless Headphones — Navy",
          ProductPrice: "$349.99",
        },
        {
          ProductUrl: productImage2,
          ProductAlt: "Navy",
          ProductName: "Beats Studio Pro Wireless Headphones — Navy",
          ProductPrice: "$349.99",
        },
        {
          ProductUrl: productImage2,
          ProductAlt: "Navy",
          ProductName: "Beats Studio Pro Wireless Headphones — Navy",
          ProductPrice: "$349.99",
        },
      ];

      const logos = [
        {
          logoImage: canon,
        },
        {
          logoImage: fujifilm,
        },
        {
          logoImage: leica,
        },
        {
          logoImage: nikon,
        },
        {
          logoImage: panasonic,
        },
        {
          logoImage: pentax,
        },
      ];

      this.setState(
        {
          products: laptopsData,
          cameras: camerasData,
          headphones: headphonesData,
          logos: logos,
          loading: false,
        },
        () => {
          this.calculateDevicesDivHeight();
        }
      );
    }, 1000);
  }

  calculateDevicesDivHeight = () => {
    const devicesDiv = this.devicesDivRef.current;
    if (devicesDiv) {
      const height = devicesDiv.scrollHeight;
      this.setState({ devicesDivHeight: height + "px" });
    }
  };

  render() {
    const { products, loading, devicesDivHieght } = this.state;
    const { headphones } = this.state;
    const { cameras } = this.state;
    const { logos } = this.state;

    return (
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
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
              <div
                id="devices_div"
                ref={this.devicesDivRef}
                className="devices_div laptops_div"
                style={{ height: devicesDivHieght }}
              >
                <p className="devices_div_title">Smartphone & Tablet</p>
                <div className="horizontal_line"></div>
                <div className="red_horizontal_line"></div>
                <div className="products_div">
                  {products.map((product, index) => (
                    <React.Fragment key={index}>
                      <Product
                        ProductUrl={product.ProductUrl}
                        ProductAlt={product.ProductAlt}
                        ProductName={product.ProductName}
                        ProductPrice={product.ProductPrice}
                      />
                      {index !== products.length - 1 && (
                        <div className="vertical_line"></div>
                      )}{" "}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="audio_sound_camera_div">
                <div className="devices_div">
                  <p className="devices_div_title">Audio & Sound</p>
                  <div className="horizontal_line"></div>
                  <div className="red_horizontal_line"></div>
                  <div className="products_div">
                    {headphones.map((headphones, index) => (
                      <React.Fragment key={index}>
                        <Product
                          ProductUrl={headphones.ProductUrl}
                          ProductAlt={headphones.ProductAlt}
                          ProductName={headphones.ProductName}
                          ProductPrice={headphones.ProductPrice}
                        />
                        {index !== headphones.length - 1 && (
                          <div className="vertical_line"></div>
                        )}{" "}
                      </React.Fragment>
                    ))}
                    <img
                      className="adv_img"
                      src={productImage3}
                      alt="advertising"
                    />
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
                </div>
              </div>
              <div className="audio_sound_camera_div">
                <div className="devices_div">
                  <p className="devices_div_title">Camera & Lens</p>
                  <div className="horizontal_line"></div>
                  <div className="red_horizontal_line"></div>
                  <div className="products_div">
                    {cameras.map((cameras, index) => (
                      <React.Fragment key={index}>
                        <Product
                          ProductUrl={cameras.ProductUrl}
                          ProductAlt={cameras.ProductAlt}
                          ProductName={cameras.ProductName}
                          ProductPrice={cameras.ProductPrice}
                        />
                        {index !== cameras.length - 1 && (
                          <div className="vertical_line"></div>
                        )}{" "}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
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

import React from "react";

const Product = ({ ProductUrl, ProductAlt, ProductName, ProductPrice }) => {
  return (
    <div className="product_div">
      <img className="product_img" src={ProductUrl} alt={ProductAlt} />
      <div className="name_price_div">
        <p className="product_name">{ProductName}</p>
        <p className="product_price">{ProductPrice}</p>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import Product from "./productImage.jsx";
import "./products.css";

const Products = ({ ProductTitle, ProductArray, advImage }) => {
  return (
    <div className="devices_div">
      <p className="devices_div_title">{ProductTitle}</p>
      <div className="horizontal_line"></div>
      <div className="red_horizontal_line"></div>
      <div className="big_div">
        <div className="products_div">
          {ProductArray.map((product, index) => (
            <React.Fragment key={index}>
              <Product
                ProductUrl={product.ProductUrl}
                ProductAlt={product.ProductAlt}
                ProductName={product.ProductName}
                ProductPrice={product.ProductPrice}
              />
              {index !== ProductArray.length - 1 && (
                <div className="vertical_line"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {advImage && <div>{advImage}</div>}
      </div>
    </div>
  );
};

export default Products;

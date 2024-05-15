import React, { useState } from "react";
import Product from "./productImage.jsx";
import "./products.css";

const Products = ({ ProductTitle, ProductArray, advImage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(ProductArray.length / productsPerPage);

  const currentProducts = ProductArray.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="devices_div">
      <div className="big_div">
        <p className="devices_div_title">{ProductTitle}</p>
        <div className="horizontal_line"></div>
        <div className="red_horizontal_line"></div>
        <div className="products_div">
          {currentProducts.map((product, index) => (
            <React.Fragment key={index}>
              <Product
                ProductUrl={product.ProductUrl}
                ProductAlt={product.ProductAlt}
                ProductName={product.ProductName}
                ProductPrice={product.ProductPrice}
              />
              {index !== currentProducts.length - 1 && (
                <div className="vertical_line"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {advImage && <div>{advImage}</div>}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;

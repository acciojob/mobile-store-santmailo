import React, { useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(data);
  return (
    <div className="products-container">
      {products.map((item) => {
        return (
          <div className="product-container" key={item.id}>
            <div className="product-img-container">
              <img className="product-img" src={item.image} alt="abc" />
            </div>

            <div className="product-details">
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <div>
                <Link to={`/product/${item.id}`}>
                  <button>buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import { Link } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const item = data[id - 1];
  console.log(item);
  return (
    <div className="product-container-c">
      <div className="product-img-container-c">
        <img src={item.image} alt="item-img" />
      </div>
      <div className="product-details-c">
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Description: {item.description}</p>
        <div>
          <Link to="/">
            <button>Other Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

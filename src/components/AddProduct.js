import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddProduct = ({ data, setData }) => {
  const id = data.length + 1;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="edit-product-container">
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          className="input-field"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          id="description"
          className="input-field"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          id="price"
          className="input-field"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <br />
        <input
          type="text"
          id="image"
          className="input-field"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </div>

      <div>
        <Link to="/admin">
          <button
            onClick={() => {
              const temp = {
                id,
                name,
                price,
                image,
                description,
              };
              setData([...data, temp]);
            }}
          >
            Save
          </button>
        </Link>
        <Link to="/admin">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;

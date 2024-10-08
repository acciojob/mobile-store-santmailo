import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const EditProduct = ({ data, setData }) => {
  const { id } = useParams();
  const item = data[id - 1];
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [image, setImage] = useState(item.image);
  const [description, setDescription] = useState(item.description);
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
              const temp = data.map((item) => {
                if (item.id == id) {
                  return {
                    id,
                    name,
                    price,
                    image,
                    description,
                  };
                }
                return item;
              });
              setData(temp);
            }}
          >
            Save
          </button>
        </Link>
        <Link to="/admin">
          <button
            onClick={() => {
              const temp = data.filter((item) => {
                if (item.id != id) {
                  return item;
                }
              });
              setData(temp);
            }}
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditProduct;

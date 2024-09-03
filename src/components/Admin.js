import React from "react";
import { Link } from "react-router-dom";
const Admin = ({ data }) => {
  return (
    <>
      <div className="admin-panel">
        <Link to="/admin/add-product">
          <button>Add Products</button>
        </Link>
        <div className="admin-panel-products">
          {data.map((item) => {
            return (
              <Link
                to={`/admin/products/${item.id}`}
                key={`admin-panel-${item.id}`}
              >
                <div
                  className="admin-panel-product"
                  key={`admin-panel-${item.id}`}
                >
                  <div className="admin-panel-product-img">
                    <img src={item.image} alt="product-img" />
                  </div>
                  <p>{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;

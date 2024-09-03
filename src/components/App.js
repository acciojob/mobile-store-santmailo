import React, { useState } from "react";
import "./../styles/App.css";
import Products from "./Products";
import Product from "./Product";
import Admin from "./Admin";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import random from "./data";
import AddProduct from "./AddProduct";
const App = () => {
  const [data, setData] = useState(random);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products data={data} />} />
        <Route path="/products/:id" element={<Product data={data} />} />
        <Route path="/admin" element={<Admin data={data} />} />
        <Route
          path="/admin/products/:id"
          element={<EditProduct data={data} setData={setData} />}
        />
        <Route
          path="/admin/add-product"
          element={<AddProduct data={data} setData={setData} />}
        />
      </Routes>
    </div>
  );
};

export default App;

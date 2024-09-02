import React from "react";
import "./../styles/App.css";
import Products from "./Products";
import Product from "./Product";
import Admin from "./Admin";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editAdmin" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default App;

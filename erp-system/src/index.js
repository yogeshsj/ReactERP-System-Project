import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import ProductManagement from "./ProductManagement";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Product-management" element={<ProductManagement />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

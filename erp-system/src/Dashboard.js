import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import products from "./data";

const Dashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ERP System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/Product-management"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Order View
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="dashboard">
        {/* Product container */}
        <div className="container mt-5">
          <h2 className="mb-4">Dashboard</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <div className="card">
                  {/* <img
                    src={product.image}
                    className="card-img-top"
                    alt="Product"
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

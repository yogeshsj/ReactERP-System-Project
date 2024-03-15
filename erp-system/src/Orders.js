import React, { useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: "Moisture Sensor",
      productPrice: 100,
      address: "123 Main St",
      status: "Process",
      date: "2024-03-15", // Example date
    },
    {
      id: 2,
      productName: "Heat Sensor",
      productPrice: 150,
      address: "456 Elm St",
      status: "Pending",
      date: "2024-03-16", // Example date
    },
    {
      id: 3,
      productName: "Temperature Sensor",
      productPrice: 200,
      address: "789 Oak St",
      status: "Completed",
      date: "2024-03-17", // Example date
    },
  ]);

  const handleDateChange = (e, orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, date: e.target.value } : order
    );
    setOrders(updatedOrders);
  };

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
      <div className="container mt-5">
        <h2>Orders Management</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.productName}</td>
                  <td>${order.productPrice}</td>
                  <td>{order.address}</td>
                  <td>
                    <input
                      type="date"
                      value={order.date}
                      onChange={(e) => handleDateChange(e, order.id)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select className="form-select">
                      <option
                        value="Process"
                        selected={order.status === "Process"}
                      >
                        Process
                      </option>
                      <option
                        value="Pending"
                        selected={order.status === "Pending"}
                      >
                        Pending
                      </option>
                      <option
                        value="Completed"
                        selected={order.status === "Completed"}
                      >
                        Completed
                      </option>
                      <option
                        value="Cancel"
                        selected={order.status === "Cancel"}
                      >
                        Cancel
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;

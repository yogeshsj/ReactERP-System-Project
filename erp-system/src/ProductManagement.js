import React, { useState } from "react";
import products from "./data";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const [productList, setProductList] = useState(products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProductName, setEditedProductName] = useState("");
  const [editedQuantity, setEditedQuantity] = useState(0);
  const [editedPrice, setEditedPrice] = useState(0);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setEditedProductName(product.title);
    setEditedQuantity(product.quantity);
    setEditedPrice(product.price);
  };

  const handleSaveEdit = () => {
    const updatedProducts = productList.map((product) =>
      product.id === editingProduct.id
        ? {
            ...product,
            title: editedProductName,
            quantity: editedQuantity,
            price: editedPrice,
          }
        : product
    );
    setProductList(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    const updatedProducts = productList.filter((product) => product.id !== id);
    setProductList(updatedProducts);
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
        <h2 className="mt-4">Products Management</h2>
        <table className="table table-striped table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id}>
                {editingProduct && editingProduct.id === product.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editedProductName}
                        onChange={(e) => setEditedProductName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={editedQuantity}
                        onChange={(e) =>
                          setEditedQuantity(parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={editedPrice}
                        onChange={(e) =>
                          setEditedPrice(parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        className="btn btn-info me-2"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;

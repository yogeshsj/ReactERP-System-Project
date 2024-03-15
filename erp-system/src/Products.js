import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category A", price: 10, stock: 100 },
    { id: 2, name: "Product 2", category: "Category B", price: 20, stock: 50 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  const [editProduct, setEditProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);

    setNewProduct({ name: "", category: "", price: 0, stock: 0 });
  };

  const handleEditProduct = () => {
    const index = products.findIndex(
      (product) => product.id === editProduct.id
    );

    const updatedProducts = [...products];
    updatedProducts[index] = editProduct;
    setProducts(updatedProducts);

    setEditProduct(null);
  };

  const startEditProduct = (product) => {
    setEditProduct(product);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="container">
      <h1>Products Management</h1>

      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          className="namebtn"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          className="namebtn"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          className="namebtn"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="number"
          className="namebtn"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          placeholder="Stock"
        />
        <button onClick={handleAddProduct} className="namebtn">
          Add Product
        </button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editProduct && editProduct.id === product.id ? (
                  <input
                    type="text"
                    className="namebtn"
                    name="name"
                    value={editProduct.name}
                    onChange={(e) =>
                      setEditProduct({ ...editProduct, name: e.target.value })
                    }
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editProduct && editProduct.id === product.id ? (
                  <input
                    type="text"
                    className="namebtn"
                    name="category"
                    value={editProduct.category}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        category: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.category
                )}
              </td>
              <td>
                {editProduct && editProduct.id === product.id ? (
                  <input
                    type="number"
                    className="namebtn"
                    name="price"
                    value={editProduct.price}
                    onChange={(e) =>
                      setEditProduct({ ...editProduct, price: e.target.value })
                    }
                  />
                ) : (
                  `$${product.price}`
                )}
              </td>
              <td>
                {editProduct && editProduct.id === product.id ? (
                  <input
                    type="number"
                    className="namebtn"
                    name="stock"
                    value={editProduct.stock}
                    onChange={(e) =>
                      setEditProduct({ ...editProduct, stock: e.target.value })
                    }
                  />
                ) : (
                  product.stock
                )}
              </td>
              <td>
                {editProduct && editProduct.id === product.id ? (
                  <button onClick={handleEditProduct} className="namebtn">
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditProduct(product)}
                    className="namebtn"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="namebtn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

import React, { useState } from 'react';

export default function AddProductModal({ isOpen, onClose, onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Electronics',
    price: '',
    quantity: '',
    image: '',
    description: '',
    specification: '',
    rating: ''
  });

  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation: Ensure all fields are filled
    const { name, category, price, quantity, image, description, specification, rating } = formData;
    if (!name || !category || !price || !quantity || !image || !description || !specification || !rating) {
      setError('All fields are required!');
      return;
    }

    if (Number(price) <= 0 || Number(quantity) < 0 || Number(rating) < 0 || Number(rating) > 5) {
      setError('Please enter valid numeric values (Rating: 0 - 5).');
      return;
    }

    // Pass new product object up to parent state
    onAddProduct({
      id: Date.now(),
      name,
      category,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
      image,
      description,
      specification,
      rating: parseFloat(rating)
    });

    // Reset & Close
    setFormData({
      name: '',
      category: 'Electronics',
      price: '',
      quantity: '',
      image: '',
      description: '',
      specification: '',
      rating: ''
    });
    setError('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Product</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="product-form">
          <label>Product Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Smart Watch" />

          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
          </select>

          <label>Feature Image URL</label>
          <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." />

          <label>Price ($)</label>
          <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} placeholder="99.99" />

          <label>Quantity</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="10" />

          <label>Rating (0 to 5)</label>
          <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} placeholder="4.5" />

          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Brief product overview..." />

          <label>Product Specification</label>
          <textarea name="specification" value={formData.specification} onChange={handleChange} placeholder="Technical specs..." />

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}
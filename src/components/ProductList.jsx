import React from 'react';

export default function ProductList({ products, selectedCategory, onSelectCategory, onSelectProduct }) {
  // Category Filtering
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div className="product-list-container">
      {/* Category Filter Controls */}
      <div className="filter-bar">
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Product Cards Layout */}
      <div className="product-grid">
        {filteredProducts.map((product) => {
          // Subtotal calculation per product (price * quantity)
          const subtotal = product.price * product.quantity;
          const isLowStock = product.quantity < 5;

          return (
            <div
              key={product.id}
              className={`product-card ${isLowStock ? 'low-stock' : ''}`}
            >
              {isLowStock && <span className="badge-low-stock">Low Stock</span>}
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p className="category-tag">{product.category}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <p className="subtotal-text"><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>

              <button
                className="btn-detail"
                onClick={() => onSelectProduct(product)}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
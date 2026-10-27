import React, { useState } from 'react';

export default function ProductDetail({ product, onBack, onUpdateQuantity }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={onBack}>&larr; Back to Products</button>
      
      <div className="detail-container">
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h2>{product.name}</h2>
          <span className="category-badge">{product.category}</span>
          <p className="rating">Rating: ⭐ {product.rating} / 5</p>

          <p className="description">{product.description}</p>
          <p className="specs"><strong>Specifications:</strong> {product.specification}</p>

          <div className="price-tag">${product.price.toFixed(2)}</div>

          {/* Quantity Controls */}
          <div className="quantity-controls">
            <span><strong>Quantity in Stock:</strong> </span>
            <button
              onClick={() => onUpdateQuantity(product.id, -1)}
              disabled={product.quantity <= 0}
            >
              -
            </button>
            <span className="qty-value">{product.quantity}</span>
            <button onClick={() => onUpdateQuantity(product.id, 1)}>+</button>
          </div>

          <p><strong>Subtotal:</strong> ${(product.price * product.quantity).toFixed(2)}</p>

          {/* Conditional Rendering: Cart Button & Stock Status */}
          <div className="cart-section">
            {product.quantity > 0 ? (
              inCart ? (
                <button className="btn-added" disabled>✓ Added to Cart</button>
              ) : (
                <button className="btn-add-cart" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              )
            ) : (
              <p className="out-of-stock-text">⚠️ Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
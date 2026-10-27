import React from 'react';

export default function Summary({ products }) {
  // Use .reduce() to compute grand overall total value of all products
  const overallTotal = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalItemsCount = products.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <div className="summary-banner">
      <div className="summary-item">
        <span>Total Product Types:</span>
        <strong>{products.length}</strong>
      </div>
      <div className="summary-item">
        <span>Total Units in Stock:</span>
        <strong>{totalItemsCount}</strong>
      </div>
      <div className="summary-item total-price">
        <span>Overall Total Value:</span>
        <strong>${overallTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
}
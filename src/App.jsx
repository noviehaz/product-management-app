import React, { useState } from 'react';
import { initialProducts } from './data/defaultProducts';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProductModal from './components/AddProductModal';
import Summary from './components/Summary';
import './App.css';

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add new product handler
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  // Adjust product quantity handler
  const handleUpdateQuantity = (productId, delta) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const updatedQty = Math.max(0, p.quantity + delta);
          return { ...p, quantity: updatedQty };
        }
        return p;
      })
    );

    // Keep selected product in sync if viewing detail page
    if (selectedProduct && selectedProduct.id === productId) {
      setSelectedProduct((prev) => ({
        ...prev,
        quantity: Math.max(0, prev.quantity + delta)
      }));
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📦 Product Management App</h1>
        <button className="btn-add-new" onClick={() => setIsModalOpen(true)}>
          + Add New Product
        </button>
      </header>

      {/* Computation Banner */}
      <Summary products={products} />

      {/* Main View Switcher */}
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onUpdateQuantity={handleUpdateQuantity}
        />
      ) : (
        <ProductList
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* Modal Dialog */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}
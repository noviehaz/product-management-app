export const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    quantity: 12,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "High-quality wireless over-ear headphones with active noise cancellation.",
    specification: "Bluetooth 5.2, 30-hour battery life, USB-C charging.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 129.50,
    quantity: 3, // Triggers "Low Stock" (< 5)
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    description: "RGB mechanical gaming keyboard with tactile switches.",
    specification: "Hot-swappable switches, aluminum frame, customizable RGB.",
    rating: 4.8
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.99,
    quantity: 2, // Triggers "Low Stock" (< 5)
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400",
    description: "Breathable mesh chair designed for optimal posture and comfort.",
    specification: "Adjustable armrests, lumbar support, 360-degree swivel.",
    rating: 4.2
  },
 
  {
    id: 4,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 149.99,
    quantity: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Advanced fitness tracker with heart rate monitor, GPS, and sleep analysis.",
    specification: "Water-resistant up to 50m, AMOLED display, 7-day battery life.",
    rating: 4.6
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    category: "Furniture",
    price: 45.00,
    quantity: 4, // Triggers "Low Stock" (< 5)
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    description: "Modern LED desk lamp with adjustable brightness levels and color temperatures.",
    specification: "Touch control, USB charging port, energy-efficient LED bulbs.",
    rating: 4.4
  },
  {
    id: 6,
    name: "Canvas Daily Backpack",
    category: "Accessories",
    price: 59.99,
    quantity: 15,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description: "Durable, water-resistant canvas backpack with a dedicated padded laptop compartment.",
    specification: "Fits up to 15.6-inch laptops, multiple utility pockets, breathable straps.",
    rating: 4.7
  }
];
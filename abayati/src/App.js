import React from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Abayati E-Commerce</h1>
      </header>
      <main>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Abayati E-Commerce</p>
      </footer>
    </div>
  );
}

export default App;
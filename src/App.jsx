
import React, { useState } from "react";
import Home from "./Pages/Home";
import "./App.css";
import Navbar from "./Components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>

     <Sidebar />
      <Navbar onProductsClick={() => setShowProducts(true)} />

      {!showProducts ? (
        <div className="landing">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
            alt="Pizza"
            className="landing-img"
          />
          <h1>Welcome to PizzaShop</h1>
          <p>Click <strong>Products</strong> above to explore our menu 🍕</p>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../css/Navbar.css";

export default function Navbar({ onProductsClick }) {
  const [activeTab, setActiveTab] = useState("");

  const handleProductsClick = () => {
    setActiveTab("products");
    onProductsClick();
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🍕 PizzaShop</h2>
      <ul className="nav-links">
        <li 
          onClick={handleProductsClick}
          className={activeTab === "products" ? "active" : ""}
        >
          Products
        </li>
        <li 
          onClick={() => setActiveTab("meals")}
          className={activeTab === "meals" ? "active" : ""}
        >
          Meal Deals/Promotions
        </li>
        <li 
          onClick={() => setActiveTab("pickups")}
          className={activeTab === "pickups" ? "active" : ""}
        >
          Open Pickups
        </li>
      </ul>
    </nav>
  );
}
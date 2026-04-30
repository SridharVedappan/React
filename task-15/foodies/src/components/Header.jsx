import React, { useContext, useEffect, useState, useMemo } from "react";
import "./Header.css";
import { IoBagHandleOutline, IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const foodData = [
  { id: 1, name: "Margherita Pizza", price: 250 },
  { id: 2, name: "Cheese Burger", price: 180 },
  { id: 3, name: "Veg Pizza", price: 220 },
  { id: 4, name: "Chicken Burger", price: 210 },
  { id: 5, name: "Pasta", price: 200 },
];

export default function Header() {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    if (!query) return [];
    return foodData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  useEffect(() => {
    const header = document.querySelector(".header");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.add("show");
        } else {
          header.classList.remove("show");
        }
      },
      { threshold: 0.2 },
    );

    if (header) observer.observe(header);
  }, []);

  return (
    <header className="header">
      <div className="logo">Foodies</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>

      <div className="right-section">
        <div className="search-wrapper">
          <div className="search-box">
            <IoSearchSharp size={17} color="#212121" />
            <input
              type="text"
              placeholder="Search food..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {query && (
            <div className="search-results">
              {results.length === 0 ? (
                <p className="no-result">No items found</p>
              ) : (
                results.map((item) => (
                  <div className="search-item" key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => addToCart(item)}>Add</button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="cart" onClick={() => navigate("/cart")}>
          <IoBagHandleOutline size={23} />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
    </header>
  );
}

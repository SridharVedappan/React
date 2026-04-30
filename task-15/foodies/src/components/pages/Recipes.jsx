import React, { useEffect } from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import "./Recipes.css";

export default function Recipes() {
  useEffect(() => {
    const cards = document.querySelectorAll(".recipe-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 50);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="recipes-page">
      <h2 className="recipes-title">🍽️ Recipes</h2>
      <p className="recipes-subtitle">
        Explore pizza, burger, biryani and more{" "}
        <FaPizzaSlice className="food-icon" />
        <FaHamburger className="food-icon" />
        <FaBowlFood className="food-icon" />
      </p>

      <section className="recipe-section">
        <h3>
          <FaPizzaSlice className="food-icon" /> Pizza Recipes
        </h3>
        <div className="recipe-grid">
          {[
            "Margherita Pizza",
            "Cheese Burst Pizza",
            "Veggie Supreme Pizza",
            "Pepperoni Pizza",
            "BBQ Chicken Pizza",
            "Paneer Tikka Pizza",
            "Mushroom Pizza",
            "Corn & Cheese Pizza",
            "Four Cheese Pizza",
            "Spicy Jalapeno Pizza",
            "Farmhouse Pizza",
            "Mexican Pizza",
            "Chicken Sausage Pizza",
            "Double Cheese Margherita",
            "Italian Herb Pizza",
            "Onion & Capsicum Pizza",
            "Buffalo Chicken Pizza",
            "Hawaiian Pizza",
            "Garlic Cheese Pizza",
            "Peri Peri Pizza",
          ].map((item, i) => (
            <div className="recipe-card" key={i}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="recipe-section">
        <h3>
          {" "}
          <FaHamburger className="food-icon" /> Burger Recipes
        </h3>
        <div className="recipe-grid">
          {[
            "Classic Veg Burger",
            "Chicken Burger",
            "Cheese Burger",
            "Double Patty Burger",
            "Crispy Veg Burger",
            "Spicy Chicken Burger",
            "BBQ Burger",
            "Paneer Burger",
            "Mushroom Burger",
            "Aloo Tikki Burger",
            "Egg Burger",
            "Chicken Cheese Burger",
            "Veg Supreme Burger",
            "Jalapeno Burger",
            "Peri Peri Burger",
            "Crispy Chicken Deluxe",
            "Mayo Burger",
            "American Classic Burger",
            "Bacon Burger",
            "Street Style Burger",
          ].map((item, i) => (
            <div className="recipe-card" key={i}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="recipe-section">
        <h3>
          <FaBowlFood className="food-icon" /> Biryani Recipes
        </h3>
        <div className="recipe-grid">
          {[
            "Chicken Biryani",
            "Veg Biryani",
            "Hyderabadi Biryani",
            "Mutton Biryani",
            "Egg Biryani",
            "Paneer Biryani",
            "Dum Biryani",
            "Spicy Chicken Biryani",
            "Kashmiri Biryani",
            "Kolkata Biryani",
            "Chettinad Biryani",
            "Ambur Biryani",
            "Tandoori Biryani",
            "Seafood Biryani",
            "Mushroom Biryani",
            "Garlic Chicken Biryani",
            "Green Peas Biryani",
            "Royal Biryani",
            "Street Style Biryani",
            "Special Biryani",
          ].map((item, i) => (
            <div className="recipe-card" key={i}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

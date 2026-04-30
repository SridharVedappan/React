import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Pizza.css";
import { CartContext } from "./CartContext";

export default function Pizza() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get(
          "https://free-food-menus-api-two.vercel.app/pizzas",
        );
        setFoods(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));
  }, [foods]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <section className="popular">
      <h2 className="title">🍕 Pizza Menu</h2>
      <div className="card-container">
        {foods
          .filter((item) => item.img)
          .slice(0, 10)
          .map((item) => (
            <div className="card" key={item.id}>
              <div className="image-box">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src =
                      "https://dummyimage.com/300x200/ffcc99/000000&text=PIZZA";
                  }}
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p className="price">₹{item.price}</p>
                <button className="btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

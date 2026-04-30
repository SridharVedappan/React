import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Burger.css";
import { CartContext } from "./CartContext";

export default function Burger() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  // FETCH DATA
  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const res = await axios.get(
          "https://free-food-menus-api-two.vercel.app/burgers",
        );

        const data = res.data || [];

        const formattedData = data
          .filter((item) => item?.img && item?.name)
          .map((item, index) => ({
            id: item.id || index,
            name: item.name,
            img: item.img,
            price: item.price || Math.floor(Math.random() * 250) + 120,
          }));

        setFoods(formattedData);
      } catch (error) {
        console.log("API Error:", error);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBurgers();
  }, []);

  // 🔥 SCROLL ANIMATION (UP + DOWN)
  useEffect(() => {
    const cards = document.querySelectorAll(".burger-card");

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
    return <p className="loading">🍔 Loading Burgers...</p>;
  }

  return (
    <section className="burger-popular">
      <h2 className="burger-title">🍔 Burger Menu</h2>

      <div className="burger-container">
        {foods.slice(0, 15).map((item) => (
          <div className="burger-card" key={item.id}>
            <div className="burger-image-box">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://dummyimage.com/300x200/ffcc99/000000&text=Burger";
                }}
              />
            </div>

            <div className="card-body">
              <h4>{item.name}</h4>
              <p className="burger-price">₹{item.price}</p>

              <button className="burger-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

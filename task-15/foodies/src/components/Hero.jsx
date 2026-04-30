import React, { useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    const hero = document.querySelector(".hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hero.classList.add("show");
        } else {
          hero.classList.remove("show");
        }
      },
      { threshold: 0.3 },
    );

    if (hero) observer.observe(hero);
  }, []);

  return (
    <section className="hero">
      <h1>Welcome to Foodies</h1>
      <p>Delicious food delivered to your door</p>
    </section>
  );
}

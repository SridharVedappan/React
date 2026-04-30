import React, { useEffect } from "react";
import {
  FaMotorcycle,
  FaPhoneAlt,
  FaHotjar,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaStar,
  FaUtensils,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    const items = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 120);
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="services-page">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        We provide the best food experience with speed, quality & care{" "}
        <FaPizzaSlice className="food-icon" />
        <FaHamburger className="food-icon" />
        <FaBowlFood className="food-icon" />
      </p>

      <div className="services-grid">
        <div className="service-card">
          <FaMotorcycle
            className="food-icon"
            style={{ color: "#ff5722", fontSize: "20px" }}
          />
          Fast Delivery <p>Hot food delivered in minutes</p>
        </div>

        <div className="service-card">
          <FaUtensils style={{ color: "#ff5722", marginRight: "6px" }} />{" "}
          Quality Food <p>Fresh ingredients & hygienic cooking</p>
        </div>

        <div className="service-card">
          <FaPhoneAlt style={{ marginRight: "8px", color: "#ff5722" }} /> 24/7
          Support <p>We are always here to help you</p>
        </div>

        <div className="service-card">
          <FaRupeeSign style={{ color: "#ff5722", marginRight: "5px" }} />{" "}
          Affordable Price <p>Best taste at low cost</p>
        </div>

        <div className="service-card">
          <FaHotjar style={{ color: "#ff5722", marginRight: "6px" }} /> Hot &
          Fresh <p>Food never delivered cold</p>
        </div>

        <div className="service-card">
          <FaPizzaSlice style={{ color: "#ff5722", marginRight: "6px" }} /> Wide
          Menu <p>Pizza, burger, biryani & more</p>
        </div>

        <div className="service-card">
          <FaMapMarkerAlt style={{ marginRight: "8px", color: "#ff5722" }} />{" "}
          Live Tracking <p>Track your order in real time</p>
        </div>

        <div className="service-card">
          <FaStar style={{ color: "#ff8000", marginRight: "5px" }} /> Top Rated
          Chefs <p>Professional food experts</p>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPizzaSlice,
  FaHamburger,
} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    const items = document.querySelectorAll(".contact-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="contact-page">
      <h2 className="contact-title"> Contact Us</h2>
      <p className="contact-subtitle">
        We’re here to help you anytime <FaPizzaSlice className="food-icon" />
        <FaHamburger className="food-icon" />
        <FaBowlFood className="food-icon" />
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <FaPhoneAlt style={{ marginRight: "8px", color: "#ff5722" }} />{" "}
          <h3>Call Us</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="contact-card">
          <FaEnvelope style={{ marginRight: "8px", color: "#ff5722" }} />
          <h3>Email</h3>
          <p>foodies@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#ff5722" }} />
            Location
          </h3>
          <p>Salem, Tamil Nadu</p>
        </div>

        <div className="contact-card">
          <FaClock style={{ marginRight: "8px", color: "#ff5722" }} />{" "}
          <h3>Working Hours</h3>
          <p>10:00 AM - 11:00 PM</p>
        </div>
      </div>

      <div className="contact-footer">
        <p> Fast delivery • Fresh food • Happy customers</p>
      </div>
    </div>
  );
}

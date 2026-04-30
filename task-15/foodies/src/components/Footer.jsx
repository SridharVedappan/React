import React, { useEffect } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaPizzaSlice,
  FaHamburger,
} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

export default function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("show");
        } else {
          footer.classList.remove("show");
        }
      },
      { threshold: 0.2 },
    );

    if (footer) observer.observe(footer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Foodies</h2>
        <p>
          Delicious food delivered fast to your doorstep{" "}
          <FaPizzaSlice className="food-icon" />
          <FaHamburger className="food-icon" />
          <FaBowlFood className="food-icon" />
        </p>
      </div>

      <div className="footer-grid">
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Foodies. All rights reserved.</p>
      </div>
    </footer>
  );
}

import React, { useContext, useMemo, useState } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + Number(item.price), 0);
  }, [cart]);

  const handleOrder = () => {
    setOrderPlaced(true);
    clearCart();

    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.img} alt={item.name} />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Bill Details</h3>

            <div className="row">
              <span>Items Total</span>
              <span>₹{total}</span>
            </div>

            <div className="row">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>

            <div className="row total">
              <span>Total</span>
              <span>₹{total + 40}</span>
            </div>

            <button className="order-btn" onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div className="order-popup">
          <div className="order-box">
            <h2> Order Placed!</h2>
            <p>Your food is on the way 🛵💨</p>

            <div className="tick-container">
              <svg viewBox="0 0 60 60" className="tick">
                <circle className="tick-circle" cx="30" cy="30" r="26" />
                <path className="tick-check" d="M18 32 L27 40 L44 22" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { createContext, useReducer, useCallback } from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  const addToCart = useCallback((item) => {
    const newItem = {
      ...item,
      id: item.id || Date.now(), // ensure id exists
    };
    dispatch({ type: "ADD", payload: newItem });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

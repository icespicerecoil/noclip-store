// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(product, plan) {
    if (!product) return;

    const planId = plan?.id || null;

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.planId === planId
      );

      if (existingIndex !== -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          qty: copy[existingIndex].qty + 1,
        };
        return copy;
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          image: product.image || product.heroImage || "",
          planId,
          planName: plan?.name || null,
          price: plan?.price ?? product.price ?? 0,
          qty: 1,
        },
      ];
    });
  }

  function removeFromCart(productId, planId = null) {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.planId === planId)
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const value = { items, addToCart, removeFromCart, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider />");
  return ctx;
}

// src/pages/cart.jsx
import React from "react";
import "./cart.css";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * item.qty,
    0
  );

  return (
    <main className="section section-dark cart-page">
      <div className="section-inner">
        <h1 className="section-title">Cart</h1>

        {items.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article
                  key={`${item.productId}-${item.planId || "base"}`}
                  className="cart-item"
                >
                  <div className="cart-item-left">
                    {item.image && (
                      <div className="cart-item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                    )}
                    <div>
                      <h2 className="cart-item-title">{item.name}</h2>
                      {item.planName && (
                        <p className="cart-item-plan">
                          Plan: {item.planName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <p className="cart-item-price">
                      ${item.price.toFixed(2)} × {item.qty}
                    </p>
                    <button
                      className="btn btn-ghost"
                      onClick={() =>
                        removeFromCart(item.productId, item.planId)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <div className="cart-actions">
                <button className="btn btn-ghost" onClick={clearCart}>
                  Clear cart
                </button>
                {/* Hook this to your real checkout later */}
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

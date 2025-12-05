import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Cart() {
  const { items, removeItem, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    navigate("/checkout");
  };

  const empty = !items || items.length === 0;

  return (
    <main className="section section-dark">
      <div className="section-inner">
        <h1 className="section-title">Your cart</h1>
        <p className="section-sub">
          Keys are delivered to your account email after payment.
        </p>

        {empty ? (
          <div style={{ marginTop: 24 }}>
            <p>Your cart is empty.</p>
            <Link to="/products" className="btn-outline">
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.planId}`}
                  className="cart-row"
                >
                  <div>
                    <div className="cart-title">{item.productTitle}</div>
                    <div className="cart-sub">
                      {item.planLabel} · Qty {item.quantity}
                    </div>
                  </div>
                  <div className="cart-right">
                    <span className="cart-price">{item.price}</span>
                    <button
                      className="btn-small"
                      onClick={() =>
                        removeItem(item.productId, item.planId)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="btn-outline" onClick={clearCart}>
                Clear cart
              </button>
              <button className="btn-primary" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

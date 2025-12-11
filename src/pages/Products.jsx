// src/pages/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { products } from "../data/products";
import { useCart } from "../context/CartContext.jsx";

// ✅ FIXED DISCORD LINK
const DISCORD_URL = "https://discord.gg/EuFPeMAqc3";

export default function Products() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const defaultPlan = product.plans?.[0] || null;
    addToCart(product, defaultPlan);
  };

  return (
    <main className="section section-dark products-page-v2">
      <div className="section-inner products-inner-v2">
        <header className="products-header-v2">
          <h1 className="products-title-v2">Rust services &amp; digital kits</h1>
          <p className="products-sub-v2">
            External, internal, HWID spoofing and Rust accounts. Built for players who
            want max performance without looking like a walking ban appeal.
          </p>
        </header>

        <div className="products-grid-v2">
          {products.map((product) => (
            <article key={product.id} className="product-card-v2">
              <div className="product-card-glow-v2" />

              <div className="product-media-v2">
                {product.image && <img src={product.image} alt={product.name} />}
              </div>

              <div className="product-body-v2">
                {product.ribbon && (
                  <span className="product-ribbon-v2">{product.ribbon}</span>
                )}

                <h2 className="product-name-v2">{product.name}</h2>

                {product.subtitle && (
                  <p className="product-subtitle-v2">{product.subtitle}</p>
                )}

                <div className="product-tags-v2">
                  {(product.tags || []).map((tag) => (
                    <span key={tag} className="product-tag-v2">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="product-price-row-v2">
                  <span className="product-price-label-v2">From</span>
                  <span className="product-price-v2">
                    {product.priceFrom || product.price || "$0.00"}
                  </span>
                </div>

                {product.comingSoon && (
                  <p className="product-comingsoon-v2">COMING SOON</p>
                )}
              </div>

              <div className="product-actions-v2">
                <Link
                  to={`/products/${product.id}`}
                  className="btn-v2 btn-primary-v2"
                >
                  Buy
                </Link>

                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-v2 btn-ghost-v2"
                >
                  More questions?
                </a>

                <button
                  type="button"
                  className="btn-v2 btn-cart-v2"
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

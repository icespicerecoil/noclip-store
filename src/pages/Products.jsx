// src/pages/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { products } from "../data/products";

export default function Products() {
  return (
    <main className="section section-dark products-page">
      <div className="section-inner">
        <h1 className="section-title">Core noclip° products</h1>
        <p className="section-sub">
          External, internal, HWID spoofer and Rust NFA accounts. Built for closet
          players and semi-rage demons who still care about surviving the next wave of
          bans.
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <article key={index} className="product-tile">
              <div className="product-tile-img">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-tile-body">
                <h2 className="product-tile-title">{product.name}</h2>
                <p className="product-tile-sub">
                  {product.subtitle || "Premium Rust service."}
                </p>

                <div className="product-tile-bottom">
                  <span className="product-tile-price">
                    {product.basePriceLabel || "From $4.99"}
                  </span>

                  {/* BUY → detail page (by index) */}
                  <Link
                    to={`/products/${index}`}
                    className="product-tile-btn"
                  >
                    BUY
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

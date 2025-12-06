// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext.jsx";

const DISCORD_URL = "https://discord.gg/EuFPeMAB6Q";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = getProductById(id);

  const [activePlanId, setActivePlanId] = useState(
    product?.plans?.[0]?.id || null
  );
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="section section-dark product-detail-page">
        <div className="section-inner">
          <p className="product-not-found">Product not found.</p>
        </div>
      </main>
    );
  }

  const activePlan =
    product.plans?.find((p) => p.id === activePlanId) ||
    product.plans?.[0] ||
    null;

  const handleBuyNow = () => {
    if (activePlan?.checkoutUrl) {
      window.open(activePlan.checkoutUrl, "_blank");
    } else if (product.checkoutUrl) {
      window.open(product.checkoutUrl, "_blank");
    }
  };

  const handleAddToCart = () => {
    addToCart(product, activePlan);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="section section-dark product-detail-page">
      <div className="section-inner product-detail-inner">
        <div className="product-detail-grid">
          {/* LEFT SIDE */}
          <section className="product-detail-main">
            <p className="product-detail-eyebrow">
              {product.ribbon || "Best for legit closet"}
            </p>

            <h1 className="product-detail-title">{product.name}</h1>

            <p className="product-detail-subtitle">
              {product.longSubtitle || product.subtitle}
            </p>

            <div className="product-detail-tags">
              {(product.tags || []).map((tag) => (
                <span key={tag} className="product-detail-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="product-detail-layout">
              <div className="product-detail-plans">
                <h2 className="product-detail-section-title">
                  Choose your plan
                </h2>

                <div className="plan-pill-row">
                  {product.plans?.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setActivePlanId(plan.id)}
                      className={
                        "plan-pill" +
                        (plan.id === activePlanId ? " plan-pill-active" : "")
                      }
                    >
                      <span>{plan.label}</span>
                      <span className="plan-pill-price">{plan.price}</span>
                    </button>
                  ))}

                  {!product.plans?.length && (
                    <div className="plan-pill plan-pill-active">
                      <span>Standard</span>
                      <span className="plan-pill-price">
                        {product.priceFrom || product.price || "$0.00"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="selected-plan-card">
                  <div className="selected-plan-price">
                    <span className="selected-plan-label">Selected option</span>
                    <span className="selected-plan-amount">
                      {activePlan?.price ||
                        product.priceFrom ||
                        product.price ||
                        "$0.00"}
                    </span>
                    {activePlan?.label && (
                      <span className="selected-plan-name">
                        Plan: {activePlan.label}
                      </span>
                    )}
                  </div>

                  <div className="selected-plan-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-big"
                      onClick={handleBuyNow}
                    >
                      Buy now
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-big"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </div>

                  {added && (
                    <p className="added-flash">Added to cart ✔</p>
                  )}

                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="product-detail-discord"
                  >
                    More questions? Join the Discord →
                  </a>
                </div>
              </div>

              <div className="product-detail-features">
                <h2 className="product-detail-section-title">What you get</h2>
                <ul className="feature-list">
                  {(product.features || []).map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE – ART */}
          <aside className="product-detail-aside">
            <div className="product-detail-art-wrap">
              {product.image && (
                <img src={product.image} alt={product.name} />
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

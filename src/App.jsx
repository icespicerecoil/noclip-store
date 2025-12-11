// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Status from "./pages/Status.jsx";
import Support from "./pages/Support.jsx";
import Guide from "./pages/Guide.jsx";
// import Cart from "./pages/Cart.jsx"; // ❌ Removed - file no longer exists
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import TOS from "./pages/TOS.jsx"; // Terms of Service page

import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />

          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Product list */}
            <Route path="/products" element={<Products />} />

            {/* Product detail
                Support BOTH /product/:id and /products/:id
                so even if the card links use /products/:id it still works. */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products/:id" element={<ProductDetail />} />

            {/* Other pages */}
            <Route path="/status" element={<Status />} />
            <Route path="/support" element={<Support />} />
            <Route path="/guide" element={<Guide />} />
            {/* <Route path="/cart" element={<Cart />} /> */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tos" element={<TOS />} />

            {/* Fallback – if some random path is hit, send to home instead of blank page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

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

            {/* Product detail */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Other pages */}
            <Route path="/status" element={<Status />} />
            <Route path="/support" element={<Support />} />
            <Route path="/guide" element={<Guide />} />

            {/* Removed cart route */}
            {/* <Route path="/cart" element={<Cart />} /> */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tos" element={<TOS />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

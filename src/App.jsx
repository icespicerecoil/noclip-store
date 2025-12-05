// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Status from "./pages/Status.jsx";
import Support from "./pages/Support.jsx";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/status" element={<Status />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import HowItWorks from "./components/HowItWorks";
import Products from "./components/Products";
import Features from "./components/Features";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function App() {
  const [selectedId, setSelectedID] = useState([]);

  return (
    <UserContext.Provider value={{ selectedId, setSelectedID }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/howItWorks" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;

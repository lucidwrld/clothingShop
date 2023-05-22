import React from "react";
import "./App.css";
import About from "./components/about";
import Contact from "./components/Contact";
import Nav from "./navbar";
import Home from "./components/home"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}


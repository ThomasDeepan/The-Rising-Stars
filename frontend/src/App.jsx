import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/gallery"
            element={<div className="bg-white min-h-screen">Gallery</div>}
          />
          <Route
            path="/franchise"
            element={<div className="bg-white min-h-screen">Franchise</div>}
          />
          <Route
            path="/contact"
            element={<div className="bg-white min-h-screen">Contact</div>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

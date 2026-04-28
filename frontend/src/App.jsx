import React from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Franchise from "./Pages/Franchise";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import AdminDashboard from "./Components/AdminDashboard";
import AdminLogin from "./Components/AdminLogin";
import ScrollToTop from "./Components/ScrollToTop";
import FloatingSocials from "./Components/FloatingSocials";
import AdmissionPopup from "./Components/AdmissionPopup";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        {/* <AdmissionPopup /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/admin-portal" element={<AdminDashboard />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
        <Footer />
        <FloatingSocials />
      </Router>
    </>
  );
}

export default App;

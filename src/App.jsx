import React from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import OurWork from "./pages/our-work/OurWork";
import Blog from "./pages/blog/Blog";
import PriceCalculator from "./pages/price-calculator/PriceCalculator";
import FloatingContact from "./components/floating-contact/FloatingContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/price-calculator" element={<PriceCalculator />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<Blog />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </BrowserRouter>
    </>
  );
}

export default App;

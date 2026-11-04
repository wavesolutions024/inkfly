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
import BestTattooShopWakad from "./pages/best-tattoo-shop-wakad/BestTattooShopWakad";
import BestTattooStudioWakad from "./pages/best-tattoo-studio-wakad/BestTattooStudioWakad";
import TattooShopNearHinjewadi from "./pages/tattoo-shop-near-hinjewadi/TattooShopNearHinjewadi";
import TattooShopNearMe from "./pages/tattoo-shop-near-me/TattooShopNearMe";

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
          <Route
            path="/best-tattoo-shop-wakad"
            element={<BestTattooShopWakad />}
          />
          <Route
            path="/best-tattoo-studio-wakad"
            element={<BestTattooStudioWakad />}
          />
          <Route
            path="/tattoo-shop-near-hinjewadi"
            element={<TattooShopNearHinjewadi />}
          />
          <Route path="/tattoo-shop-near-me" element={<TattooShopNearMe />} />
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

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import productsData from './cars.json';
import Coordinates from "./components/Coordinates";
import Menu from "./components/Menu";
import './css/font-awesome.min.css';
import './css/style.css';
import AboutUsPage from "./pages/AboutUsPage";
import CarsPage from "./pages/CarsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ProductPage from "./pages/ProductPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cars" element={<CarsPage />} />
          {/* Route for each product */}
          {productsData.map((product) => (
            <Route key={product.id} path={`/product/${product.id}`} element={<ProductPage product={product} />} />
          ))}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <footer id="footer">
            <Coordinates />
        </footer>
      </Router>
    </div>
  );
}

export default App;

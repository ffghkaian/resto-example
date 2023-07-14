import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Element/Menu/Menu";
import ProductDetail from './Element/Detail/ProductsDetail'
import Footer from "./Components/Footer/Footer";
import AppProvider from "./Utils/Context/AppContext";
import FilterProvider from "./Utils/Context/FilterProvider";
import CartPage from './Components/Cart/Cart'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:id' element={<ProductDetail/> }/>
        <Route path="/menu" element={<Menu />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </AppProvider>
  </Router>
);

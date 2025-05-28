import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Footer from './components/Footer'
import AboutPage from "./components/AboutPage";
import LoginSignup from "./components/LoginSignup";
import SearchResult from "./components/SearchResult";
import CheckOutPage from "./components/CheckOutPage";

const App = () => {
  return (
    // routers to change the directory
    <div className="page-container">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutPage />} />        
        <Route path="/search" element={<SearchResult />} />
        <Route path="/checkout"  element={<CheckOutPage/>}/>
        <Route path="/loginSignup" element={<LoginSignup/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import SignupForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { ProductCard } from "./Components/ProductCard";
import { ProductForm } from "./Components/ProductForm";
import { Shopping_Cart } from "./components/Shopping-Cart/Shopping_Cart";
import ContactPage from "./Components/contact-us/ContactPage";
import ProductDetails from "./Components/products/ProductDetails";
import { HomePage } from "./Components/home/HomePage";
import SearchedProducts from "./Components/products/SearchedProducts";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ProductList from "./Components/Admin/Product/ProductList";
import OrderList from "./Components/Admin/Order/OrderList";
import AboutPage from "./Components/about-us/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Womens } from "./Components/Category/Womens";
import { Mens } from "./Components/Category/Mens";
import { Kids } from "./Components/Category/Kids";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="dark:bg-gray-700 h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={<SignupForm toggleForm={toggleForm} />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/searched-products" element={<SearchedProducts />} />
          <Route path="/cart" element={<Shopping_Cart />} />
          <Route path="/admin/products/new" element={<ProductForm />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/orders" element={<OrderList />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/shop/womens" element={<Womens />} />
          <Route path="/shop/mens" element={<Mens />} />
          <Route path="/shop/kids" element={<Kids />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

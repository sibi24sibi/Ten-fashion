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
import ContactForm from "./pages/ContactPage";
import ProductDetails from "./Components/ProductDetails";
import { HomePage } from "./pages/HomePage";

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
          <Route path="/signup" element={<SignupForm toggleForm={toggleForm} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Shopping_Cart />} />
          <Route path="/admin/products/new" element={<ProductForm />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

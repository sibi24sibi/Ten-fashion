import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import SignupForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { ProductCard } from "./Components/ProductCard";
import { ProductForm } from "./Components/ProductForm";
import axios from "axios";
import { Shopping_Cart } from './components/Shopping-Cart/Shopping_Cart'
import ContactForm from "./pages/ContactPage";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [products]);




  return (
    <div className="dark:bg-gray-700 h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center p-4">
        <div className="w-full max-w-4xl text-center px-4 md:px-0">
          <span className="text-2xl text-gray-800 dark:text-white font-semibold">
            {isSignup ? "Sign Up" : "Login"}
          </span>
          <div className="mt-4 flex justify-center items-center w-full">

            {isSignup ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="flex justify-center mt-4">
            <span
              onClick={toggleForm}
              className="px-4 text-gray-600 hover:underline rounded cursor-pointer dark:text-white"
            >
              {isSignup
                ? "Already have an account? Log In"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
        </div>


      <ContactForm/>

      </div>

      <Footer />
    </div>
  );
}

export default App;




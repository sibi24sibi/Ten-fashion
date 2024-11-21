import { useState } from "react";
import StrawberryShort1 from "../assets/images/productDetails/Strawberry_short1.jpg";
import HeroImage from "../assets/images/productDetails/product_details_hero.jpg";
import { FaFilter } from "react-icons/fa";
import filterIcon1 from "../assets/images/searchedProducts/filter_icon1.jpeg";
import filterIcon2 from "../assets/images/searchedProducts/filter_icon2.jpeg";
import filterIcon3 from "../assets/images/searchedProducts/filter_icon3.jpeg";
import { Dropdown } from "flowbite-react";

function SearchedProducts() {
  const [isChecked, setIsChecked] = useState(false);
  const [flexBasis, setFlexBasis] = useState("23%");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort by Relevance");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFilterClick = (basis) => {
    setFlexBasis(basis);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(`Sort by ${option}`);
  };

  const products = [
    {
      id: 1,
      image: StrawberryShort1,
      name: "Denim Classic Jacket - Unisex",
      price: "₹1,250.00",
    },
    {
      id: 2,
      image: StrawberryShort1,
      name: "Cotton Summer Dress - Women",
      price: "₹799.00",
    },
    {
      id: 3,
      image: StrawberryShort1,
      name: "Basic Slim Fit T-Shirt - Men",
      price: "₹499.00",
    },
    {
      id: 4,
      image: StrawberryShort1,
      name: "Cargo Utility Pants - Men",
      price: "₹1,050.00",
    },
    {
      id: 5,
      image: StrawberryShort1,
      name: "Casual Canvas Shoes - Unisex",
      price: "₹1,299.00",
    },
    {
      id: 6,
      image: StrawberryShort1,
      name: "Floral Print Maxi Dress - Women",
      price: "₹1,450.00",
    },
    {
      id: 7,
      image: StrawberryShort1,
      name: "Athletic Running Shoes - Men",
      price: "₹2,200.00",
    },
    {
      id: 8,
      image: StrawberryShort1,
      name: "Woolen Winter Scarf - Unisex",
      price: "₹650.00",
    },
    {
      id: 9,
      image: StrawberryShort1,
      name: "Leather Tote Bag - Women",
      price: "₹1,899.00",
    },
    {
      id: 10,
      image: StrawberryShort1,
      name: "Classic White Sneakers - Unisex",
      price: "₹1,750.00",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[180px] bg-center bg-cover flex items-center justify-center md:items-center text-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <h1 className="w-auto text-white text-4xl font-semibold">
          Search Results: "....."
        </h1>
      </div>

      {/* Additional Feature Section */}
      <div className="w-[80%] flex justify-between m-auto my-8 max-2xl:w-[90%]">
        <div className="flex gap-4">
          <h1
            className="font-semibold flex items-center gap-2 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaFilter />
            Filter
          </h1>

          <div className="flex gap-4 h-5 my-auto">
            <img
              src={filterIcon1}
              alt="Filter Icon"
              className="cursor-pointer"
              onClick={() => handleFilterClick("45%")} // 2 items per row
            />
            <img
              src={filterIcon2}
              alt="Filter Icon"
              className="cursor-pointer"
              onClick={() => handleFilterClick("31%")} // 3 items per row
            />
            <img
              src={filterIcon3}
              alt="Filter Icon"
              className="cursor-pointer"
              onClick={() => handleFilterClick("23%")} // 4 items per row
            />
          </div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-gray-300 rounded-sm "
            />
            <span className="text-gray-800 dark:text-white">
              Show only products on sale
            </span>
          </label>
        </div>

        <div>
          <Dropdown
            label={
              <span className="text-gray-800 dark:text-gray-400">
                {selectedOption}
              </span>
            }
            inline
            className="dark:text-white"
          >
            <Dropdown.Item onClick={() => handleSelect("Relevance")}>
              Relevance
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Popularity")}>
              Popularity
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Average rating")}>
              Average rating
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Latest")}>
              Latest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Price: low to high")}>
              Price: low to high
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Price: high to low")}>
              Price: high to low
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          {/* Sidebar on the right */}
          <div className="w-[15%] bg-white dark:bg-gray-800 h-full p-4 shadow-lg">
            <button
              onClick={toggleSidebar}
              className="my-4 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white"
            >
              X
            </button>
            <ol className="space-y-4">
              <li className="cursor-pointer hover:underline">Accessories</li>
              <li className="cursor-pointer hover:underline">Bags</li>
              <li className="cursor-pointer hover:underline">Belts</li>
              <li className="cursor-pointer hover:underline">Designers</li>
              <li className="cursor-pointer hover:underline">Glasses</li>
              <li className="cursor-pointer hover:underline">Hats</li>
              <li className="cursor-pointer hover:underline">Heels</li>
              <li className="cursor-pointer hover:underline">Jewelry</li>
              <li className="cursor-pointer hover:underline">Lifestyle</li>
              <li className="cursor-pointer hover:underline">Men</li>
              <li className="cursor-pointer hover:underline">Sale</li>
              <li className="cursor-pointer hover:underline">Shoes</li>
              <li className="cursor-pointer hover:underline">Uncategorized</li>
              <li className="cursor-pointer hover:underline">Vintage</li>
              <li className="cursor-pointer hover:underline">Watches</li>
              <li className="cursor-pointer hover:underline">Women</li>
            </ol>
          </div>
          {/* Click outside to close */}
          <div className="flex-grow" onClick={toggleSidebar}></div>
        </div>
      )}

      {/* Products Section */}
      <div className="w-[80%] flex flex-wrap gap-6 justify-start m-auto max-2xl:w-[90%] max-lg:w-[95%]">
        {products.map((data) => (
          <div key={data.id} style={{ flexBasis }}>
            <img className="w-full" src={data.image} alt={data.name} />
            <h1 className="font-semibold">{data.name}</h1>
            <h1 className="text-gray-600">{data.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchedProducts;

import { useState } from "react";
import HeroImage from "../assets/images/productDetails/product_details_hero.jpg";
import StrawberryShort1 from "../assets/images/productDetails/Strawberry_short1.jpg";
import StrawberryShort2 from "../assets/images/productDetails/Strawberry_short2.jpg";
import StrawberryShort3 from "../assets/images/productDetails/Strawberry_short3.jpg";
import StrawberryShort4 from "../assets/images/productDetails/Strawberry_short4.jpg";
import StrawberryShort5 from "../assets/images/productDetails/Strawberry_short5.jpg";
import StrawberryShort6 from "../assets/images/productDetails/Strawberry_short6.jpg";
import Facebook from "../assets/images/productDetails/Facebook.png";
import Linkedin from "../assets/images/productDetails/Linkedin.webp";

function ProductDetails() {
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(StrawberryShort1);
  const [activeTab, setActiveTab] = useState("Description");
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const images = [
    StrawberryShort1,
    StrawberryShort2,
    StrawberryShort3,
    StrawberryShort4,
    StrawberryShort5,
    StrawberryShort6,
  ];

  return (
    <div className="w-full h-[auto]">
      {/* Main Header Section */}
      {/* <div
        className="w-full h-[180px] bg-center bg-cover flex items-center justify-center md:items-center text-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <h1 className="w-auto text-white">
          Home &gt; Women &gt; Shorts &gt; Strawberry loose wide-leg jeans women
        </h1>
      </div> */}

      {/* About Product Details Section */}
      <div className="w-[80%] mx-auto py-10 flex justify-between max-xl:w-[95%] max-md:flex-wrap">
        {/* Thumbnails */}
        <div className="w-[10%] max-md:w-[15%]">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-[60%] pb-4 cursor-pointer"
              src={image}
              alt={`Strawberry Short Image ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Display Selected Image */}
        <div className="w-[45%] max-md:w-[80%]">
          <img
            className="w-[100%] h-[90%]"
            src={selectedImage}
            alt="Selected Strawberry Short"
          />
        </div>

        {/* Product Information */}
        <div className="w-[45%] px-8 flex flex-col justify-center max-xs:w-[100%]">
          <h1>Write a review</h1>
          <div className="mt-10 flex max-md:mt-5">
            <div>
              <h1>Product code</h1>
              <h1>Availability</h1>
            </div>
            <div className="pl-8 font-semibold">
              <h1>CJNSXZDK02347</h1>
              <h1>In Stock</h1>
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-medium max-md:mt-4">₹850.00</h1>

          <div className="mt-16 flex justify-between max-xl:flex-wrap max-md:mt-8 max-md:gap-4">
            <div className="w-[25%] flex justify-center border border-gray-300 items-center rounded-3xl max-md:w-[100%]">
              <button
                className="py-2"
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
              >
                -
              </button>
              <h1 className="px-4">{count}</h1>
              <button className="py-2" onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>

            <button className="w-[70%] flex justify-center bg-black text-white font-bold border border-black py-2 rounded-3xl hover:bg-white hover:text-black max-md:w-[100%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l1.1-6H6.5m-3.5 6L4 3m4.5 10L5 21h14l1.5-8m-13.5 8h10"
                />
              </svg>
              Add to basket
            </button>
          </div>

          <button className="w-[100%] mt-10 py-2 font-bold border border-black rounded-3xl hover:bg-black hover:text-white max-md:mt-5">
            Buy it now
          </button>

          <div className="mt-10 flex items-center max-md:mt-5 max-md:flex-col max-md:items-start">
            <h1
              className="flex items-center cursor-pointer hover:text-blue-500"
              onClick={toggleHeart}
            >
              {isHeartFilled ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              )}
              Add to wishlist
            </h1>
            <h1 className="pl-12 flex items-center cursor-pointer hover:text-blue-500 max-md:pl-0">
              Add to compare
            </h1>
          </div>

          <div className="w-[10%] mt-10 flex gap-4">
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Linkedin} alt="Linkedin Logo" />
          </div>
        </div>
      </div>

      {/* More About Products */}
      <div className="w-[80%] mx-auto max-xl:w-[95%]">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-10 text-2xl font-medium max-xs:flex-wrap max-xs:text-xl max-xs:gap-5">
          {[
            "Description",
            "Additional Information",
            "Reviews",
            "Custom Tab",
          ].map((tab) => (
            <h1
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer ${activeTab === tab ? "text-blue-600 underline" : ""
                }`}
            >
              {tab}
            </h1>
          ))}
        </div>
        <hr className="w-full mx-auto m-4 h-0.5 bg-gray-600" />

        {/* Tab Content */}
        <div className="w-[100%] mx-auto py-10">
          {activeTab === "Description" && (
            <div>
              <ul>
                <li>Fabric name: Denim</li>
                <li>Main fabric composition: cotton</li>
                <li>The content of the main fabric ingredient: 71%-80%</li>
                <li>Style: straight pants</li>
                <li>Pants length: shorts</li>
                <li>Waist type: middle waist</li>
                <li>Cowboy color: dark</li>
                <li>Style: Japanese</li>
                <li>Thickness: General</li>
              </ul>
            </div>
          )}
          {activeTab === "Additional Information" && (
            <div>
              <table className="border table-auto w-full empty-cells:show">
                <tbody>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[12px] text-left">
                      Weight
                    </th>
                    <td className="border-b border-solid px-[20px] py-[12px] text-left">
                      0.22 kg
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[12px] text-left">
                      Dimensions
                    </th>
                    <td className="border-b border-solid px-[20px] py-[12px] text-left">
                      200 x 200 x 40 cm
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[12px] text-left">
                      Size
                    </th>
                    <td className="border-b border-solid px-[20px] py-[12px] text-left">
                      L, M, S
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[12px] text-left">
                      Color
                    </th>
                    <td className="border-b border-solid px-[20px] py-[12px] text-left">
                      Dark Blue, Light Blue
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "Reviews" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              <p>
                See what others are saying about this product or service in this
                section.
              </p>
            </div>
          )}
          {activeTab === "Custom Tab" && (
            <div>
              <table className="border table-auto w-full empty-cells:show">
                <tbody>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Product Dimensions
                    </th>
                    <td className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      17.32 x 13.39 x 2.36 inches; 1.5 Pounds
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Item model number
                    </th>
                    <td className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      YGZ53PUBLACKS
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Department
                    </th>
                    <td className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Womens
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Date First Available
                    </th>
                    <td className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      July 22, 2017
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Manufacturer
                    </th>
                    <td className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Sample
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      Raking
                    </th>
                    <td className="border-b border-solid px-[20px] py-[15px] text-left leading-[20px]">
                      #17,785 in Clothing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <hr className="w-full mx-auto m-10 h-0.5 bg-gray-600" />
      </div>
    </div>
  );
}

export default ProductDetails;

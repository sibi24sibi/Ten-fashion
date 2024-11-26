import React from "react";
import ContactForm from "../Components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col dark:bg-slate-900">
      {/* Top Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Left Section */}
            <div className="p-8 text-center lg:text-left flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Address</h2>
              <div className="text-lg text-gray-700 space-y-2">
                <p>
                  <span className="font-semibold">Building No./Flat No.:</span>{" "}
                  41/A
                </p>
                <p>
                  <span className="font-semibold">Name of Premises:</span> Shri
                  Shyam Trading Company
                </p>
                <p>
                  <span className="font-semibold">Road/Street:</span> Tirupati
                  Palace, Nipania
                </p>
                <p>
                  <span className="font-semibold">City:</span> Indore, Madhya
                  Pradesh
                </p>
                <p>
                  <span className="font-semibold">PIN Code:</span> 452016
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:support@ukbhatia.com"
                    className="text-blue-600 underline"
                  >
                    support@ukbhatia.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href="tel:+919106069902"
                    className="text-blue-600 underline"
                  >
                    +91 9106069902
                  </a>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex-1">
              <img
                src="https://ukbhatia.com/wp-content/uploads/2023/12/worker-using-digital-application-2048x1365.jpg"
                alt="Contact Illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50 py-16 dark:bg-slate-900">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Fill up the form if you have any question
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

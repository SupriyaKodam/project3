import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HeroSection2 = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle content and icon
  const [isProductOpen, setIsProductOpen] = useState(false); // State to toggle product description
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isContestOpen, setIsContestOpen] = useState(false);

  return (
    <section className="text-gray-600 body-font w-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-0">
        {/* Left Section - Image */}
        <div className="lg:w-1/2 md:w-1/2 w-full mb-6 md:mb-0">
          <img
            className="object-cover object-center w-full h-full rounded"
            alt="hero"
            src="./Images/image2.AVIF"
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left lg:ml-20 md:ml-5 ml-0">
          {/* Header */}
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-serif text-gray-900">
            Landing page templates that work <br /> hard for you
          </h1>

          {/* First Paragraph with Arrow to the Right */}
          <div className="flex items-center justify-between w-full md:w-5/6 mb-4">
            <p className="text-xl font-medium text-gray-500">
              Create a buzz for your new business
            </p>
            <button
              className="ml-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)} // Toggle state
            >
              {isOpen ? (
                <KeyboardArrowUpIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transform rotate-180 transition-all duration-300"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transition-all duration-300"
                />
              )}
            </button>
          </div>

          {/* Hidden Text */}
          {isOpen && (
            <p className="mt-4 text-lg text-gray-600">
              Test out your products, messaging, and ideas before you launch,
              so you can find your future customers, optimize your conversion
              rates, and get people excited about your brand.
            </p>
          )}

          {/* Full Width Line Below the First Paragraph */}
          <hr className="w-full border-gray-300 mt-4" />

          {/* New Paragraph for "Highlight Products" */}
          <div className="mt-4 flex justify-between items-center w-full md:w-5/6">
            <p className="text-xl font-medium text-gray-500">
              Highlight Products
            </p>
            <button
              className="ml-2 focus:outline-none"
              onClick={() => setIsProductOpen(!isProductOpen)} // Toggle state for product description
            >
              {isProductOpen ? (
                <KeyboardArrowUpIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transform rotate-180 transition-all duration-300"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transition-all duration-300"
                />
              )}
            </button>
          </div>

          {/* Hidden Text for Highlight Products */}
          {isProductOpen && (
            <p className="mt-4 text-lg text-gray-600">
              Our landing page builder pulls product imagery directly from your
              connected ecommerce store so you can feature a top seller or promote
              your latest collection.
            </p>
          )}

          {/* Full Width Line Below Highlight Products */}
          <hr className="w-full border-gray-300 mt-4" />

          {/* Paragraph 3 for "Offer a free download" */}
          <div className="mt-4 flex justify-between items-center w-full md:w-5/6">
            <p className="text-xl font-medium text-gray-500">
              Offer a free download
            </p>
            <button
              className="ml-2 focus:outline-none"
              onClick={() => setIsDownloadOpen(!isDownloadOpen)} // Toggle state for download paragraph
            >
              {isDownloadOpen ? (
                <KeyboardArrowUpIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transform rotate-180 transition-all duration-300"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transition-all duration-300"
                />
              )}
            </button>
          </div>

          {/* Hidden Text for Offer a Free Download */}
          {isDownloadOpen && (
            <p className="mt-4 text-lg text-gray-600">
              Grow your Mailchimp audience by offering a special download to
              new contacts.
            </p>
          )}

          {/* Full Width Line Below Offer a Free Download */}
          <hr className="w-full border-gray-300 mt-4" />

          {/* Paragraph 4 for "Hold a Contest" */}
          <div className="mt-4 flex justify-between items-center w-full md:w-5/6">
            <p className="text-xl font-medium text-gray-500">
              Hold a contest
            </p>
            <button
              className="ml-2 focus:outline-none"
              onClick={() => setIsContestOpen(!isContestOpen)} // Toggle state for contest paragraph
            >
              {isContestOpen ? (
                <KeyboardArrowUpIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transform rotate-180 transition-all duration-300"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="large"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 transition-all duration-300"
                />
              )}
            </button>
          </div>

          {/* Hidden Text for Hold a Contest */}
          {isContestOpen && (
            <p className="mt-4 text-lg text-gray-600">
              Run your own giveaway to collect email addresses and turn potential customers into loyal ones.
            </p>
          )}

          {/* Full Width Line Below Hold a Contest */}
          <hr className="w-full border-gray-300 mt-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;

import React from "react";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const pricingPlans = [
  {
    title: "Premium",
    price: "₹11,500",
    originalPrice: "₹23,000",
    features: [
      "Phone & Priority Support",
      "Custom-coded and Pre-built Email Templates",
      "Multivariate and A/B Testing",
      "Enhanced Automated Customer Journeys",
      "Dedicated Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    title: "Standard",
    price: "₹575",
    originalPrice: "₹1,150",
    features: [
      "24/7 Email & Chat Support",
      "Custom-coded and Pre-built Email Templates",
      "Multivariate and A/B Testing",
      "Enhanced Automated Customer Journeys",
      "Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    title: "Essentials",
    price: "₹385",
    originalPrice: "₹770",
    features: [
      "24/7 Email & Chat Support",
      "Pre-built Email Templates",
      "A/B Testing",
      "Basic Automated Customer Journeys",
    ],
  },
  {
    title: "Free",
    price: "₹0",
    features: [
      "Email support for first 30 days",
      "Pre-built Email Templates",
      "A/B Testing",
      "onboarding",
    ],
  },
];

const PricingTable = () => {
  return (
    <div>
    <div className="flex justify-center items-center px-4 sm:px-0 mt-20 pt-[80px]">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`relative ${
            index === 0 ? "ml-30" : ""
          } ${index === pricingPlans.length - 1 ? "mr-30" : ""}`}
        >
          <div
            className={`bg-white shadow-lg rounded-lg h-[800px] w-[100px] sm:h-[500px] sm:w-[96px] md:h-[550px] md:w-[220px] lg:h-[700px] ${
              index !== 0 ? "-ml-0" : ""
            } ${index === 1 ? "-mt-20" : ""}`}
          >
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{plan.title}</h3>
              <div className="border-t border-gray-300 my-4"></div>
              <h4 className="text-2xl font-extrabold text-green-600">
                {plan.price}
              </h4>
              {plan.originalPrice && (
                <p className="text-sm text-gray-500 line-through">
                  {plan.originalPrice}
                </p>
              )}
              <div className="border-t border-gray-300 my-4"></div>
              <ul className="list-disc ml-5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm mb-2 flex items-center">
                    <span className="mr-2 text-green-600">✔</span> {/* Checkmark */}
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-4 py-2 px-4 rounded-full ${
                  plan.title === "Free"
                    ? "bg-yellow-400 text-white"
                    : "bg-yellow-400 text-white"
                }`}
              >
                {plan.title === "Free" ? "Sign Up Free" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center">
    <p className=" mt-10 text-2xl">See all plan details</p>
    <TrendingFlatIcon className="mt-12 ml-5" />
    </div>
    </div>
  );
};

export default PricingTable;

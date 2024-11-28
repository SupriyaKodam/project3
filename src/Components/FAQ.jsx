import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  const faqData = [
    {
      question: "Can I use a landing page instead of a website?",
      answer:
        "Marketers often use landing pages to help users 'land' on specific web pages linked to an email, social media post, or ad. While they may not be an adequate replacement for a website, landing pages are valuable for short-term marketing objectives.",
    },
    {
      question: "How do I create a landing page without a domain?",
      answer:
        "You can create a landing page using various tools like Mailchimp or other platforms that provide hosted solutions, so you don't need to purchase a domain.",
    },
    {
      question: "How to create a landing page in Mailchimp?",
      answer:
        "Log in to Mailchimp, navigate to the landing pages section, and follow the step-by-step process to design and publish your page.",
    },
    {
      question: "How to design a landing page?",
      answer:
        "Design a landing page by focusing on your goal, creating clear CTAs, and using a clean, user-friendly layout that guides visitors to take action.",
    },
    {
      question: "What is the difference between a website and a landing page?",
      answer:
        "A website typically includes multiple pages with navigation, while a landing page is a standalone page focused on a single goal or campaign.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 mb-11">
      <h2 className="text-2xl font-bold mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-gray-800">{item.question}</h3>
              <button className="text-xl font-bold text-gray-600">
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
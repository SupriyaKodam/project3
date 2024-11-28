import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font mt-24 w-screen mb-8 md:mb-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-0">
        {/* Left Section */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left mb-6 md:mb-0 order-2 md:order-1 md:mt-8">
          <h6 className="text-black text-center md:text-left ml-0 lg:ml-20 md:mt-10">
            Landing page creator
          </h6>
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-serif text-gray-900 ml-0 lg:ml-20">
            Create must-click landing
            <br className="hidden lg:inline-block" />
            pages
          </h1>
          <p className="mb-8 leading-relaxed text-lg ml-0 lg:ml-20 text-center md:text-left">
            With Mailchimp's landing page builder, it takes just a <br />
            few minutes to design beautiful landing pages that
            <br />
            make visitors want to join your audience or buy your
            <br />
            stuff.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded-full text-lg lg:ml-20">
              Start Building
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 md:w-1/2 w-full order-1 md:order-2">
          <img
            className="object-cover object-center w-full h-full"
            alt="hero"
            src="./Images/image1.AVIF"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState } from 'react';

const Component1 = () => {
  const prices = Array.from({ length: 20 }, (_, i) => 500 + i * 500);
  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  return (
    <div>
      <div className='grid mb-40'>
        <div className='grid-item w-screen h-auto md:w-11/12 md:h-full bg-amber-700 relative md:mx-5 md:mt-40 md:shadow-2xl'>
          <div className='flex flex-col md:flex md:flex-row'>
            <div className='flex flex-col pl-10 text-white'> 
              <h1 className='text-xl mt-10 md:text-white md:text-4xl font-serif text-left md:mt-20 md:mb-4'>The ultimate expert-assisted platform for <br/>growth at scale</h1>
              <p className=' text-xs md:text-xl md:text-white md:mb-4'>Get our most comprehensive tools to engage your audience and increase sales, with the dedicated support of<br/> experts to migrate your data, provide strategic guidance, and more—exclusive to the Premium plan.</p>
              <div className='flex flex-col md:flex md:flex-row md:space-x-20'>
                <ul>
                  <li className="before:content-['✔'] before:mr-2">Unlimited seats & audiences</li>
                  <li className="before:content-['✔'] before:mr-2">Migration support</li>
                  <li className="before:content-['✔'] before:mr-2">Customer success manager</li>
                </ul>
                <ul>
                  <li className="before:content-['✔'] before:mr-2">Priority phone support</li>
                  <li className="before:content-['✔'] before:mr-2" >Dedicated onboarding</li>
                </ul>
              </div>
              <p className='mb-10 md:mt-10'>Free trial available for large list sizes. Call +1 (800) 330-4838 or contact sales.</p>


            </div>
            <div className='xl:flex xl:flex-col 2xl:text-right md:mt-20'>
              <div className='grid'>
                <div className='grid-item mb-10 w-screen rounded-lg h-auto sm:w-screen sm:h-auto md:flex md:flex-col md:w-auto md:h-auto bg-white shadow-2xl text-black text-center 2xl:w-96 2xl:mr-20 2xl:mt-10 2xl:ml-96 2xl:rounded 2xl:h-96'>
                  <h1 className="text-4xl font-serif text-left mb-3 pl-10 pt-3">Premium</h1>
                  <p className='text-left mb-4 pl-10'>Send up to 150,000 emails each month.</p>
                  <div className='text-left flex'>
                    <label htmlFor="contacts" className="text-gray-600 p-2 border-gray-400">Contacts</label>
                    <div className="relative">
                      {/* Select dropdown */}
                      <select
                        id="price"
                        className="w-60 text-right bg-white border border-black text-black font-bold rounded-md p-2 mb-3"
                        value={selectedPrice}
                        onChange={handlePriceChange}
                        aria-label="Select Price"
                        aria-placeholder="contact"
                      >
                        {/* Default Option */}
                        <option disabled value="">
                          Select Price
                        </option>
                        {/* Map over prices array to generate options */}
                        {prices.map((price) => (
                          <option key={price} value={price}>
                            {price}
                          </option>
                        ))}
                      </select>
                      {/* Down arrow icon for the dropdown */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 text-black font-bold pointer-events-none">
                        &#8595; {/* Down arrow symbol */}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-left text-xl pl-3'>starts at</p>
                    <div className='flex'>
                    <h1 className='text-left pl-3 font-bold text-gray-300 line-through text-3xl'>₹23,000</h1>
                    <h className='font-bold text-3xl pl-2'> ₹11,500 </h>
                    <p className='mt-3'>for 12 months</p>
                    </div>
                    <div className='text-center mt-5'>
                    <button className='w-80 p-3 bg-yellow-300 text-bold rounded-full items-center pl-10'>Buy Now</button>
                    </div>
                    <p>*SeeOffer Termstooltip Overages apply if contact or email send limit is exceeded. Learn moretoo..</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;

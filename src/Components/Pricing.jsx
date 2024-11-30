import {React,useState,useEffect} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from 'react-router-dom';
import Component1 from './Component1';


const Pricing = () => {
    const prices = Array.from({ length: 20 }, (_, i) => 500 + i * 500);
    const [selectedPrice, setSelectedPrice] = useState("");
    const [alignment, setAlignment] = useState('web');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);  // Scrolls the page to the top
      }, []);

     const  handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
      };

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

      const openModal = ()=>{
        setIsModalOpen(true);
      };
      const closeModal = ()=>{
        setIsModalOpen(false);
      };

      const navigate =useNavigate();
  return (
    <div>
    <div className="flex flex-col items-center sm:flex-col lg:flex-row justify-center text-black mt-40">
        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton  onClick={()=>navigate('/email-marketing')} value="web">Email Marketing</ToggleButton>
      <ToggleButton onClick={()=>navigate('/websites')} value="android">Websites</ToggleButton>
      <ToggleButton onClick={()=>navigate('/transactional-email')} value="ios">Transctional Email</ToggleButton>
    </ToggleButtonGroup>
    </div>
    <div className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:p-10 md:gap-x-5'>
    <div className="text-left pl-10 pt-10">
        <h1 className="text-4xl font-serif mb-3">Try our Standard plan for 50% off!</h1>
        <p className="mb-10">Spend less to grow more with 50% off for 12 months, even if you change to our Premium or Essentials plans.<br/> Cancel or downgrade to our basic Free plan at any time</p>
        <div className='mb-10 md:flex md:space-x-10'>
            <ul className="text-gray-400">
                <li className="before:content-['✔'] before:mr-2">Generative AI features</li>
                <li className="before:content-['✔'] before:mr-2">Advanced segmentation & reporting</li>
                <li className="before:content-['✔'] before:mr-2">Enhanced automations</li>
            </ul>
            <ul className='text-gray-400'>
                  <li className="before:content-['✔'] before:mr-2">Custom-coded email templates</li>
                  <li className="before:content-['✔'] before:mr-2">Data-driven optimization tools</li>
                  <li className="before:content-['✔'] before:mr-2">Personalized onboarding</li>
            </ul>
            </div>
        </div>
        <div className="text-center md:text-right">           
        <div className="grid">
    <div className="grid-item bg-white-300 shadow-2xl p-6 text-black text-center w-96 h-auto mx-10 md:w-96 md:h-auto md:mr-20 md:mt-10">
        <h1 className="text-4xl font-serif text-left mb-3">Standard</h1>
        <p className='text-left mb-4'>Send up to 6,000 emails each month.</p>
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
        <div>
            <p className='text-left mb-3'>Starts at</p>
            <div className='flex space-x-1 mb-3'>
            <h1 className='line-through text-2xl font-bold text-gray-400'>₹31,000</h1>
            <h1 className='text-2xl font-bold'>₹15,500 </h1>
            <p className='mt-2'>for 12 months</p>
            </div>
            <div className='text-left flex flex-col'> 
                <p className='mb-5'>Then, starts at ₹31,000 /month₹1</p>
                <button className='width-full bg-yellow-400 border-black rounded-full p-3 font-bold mb-5'>Buy now</button>
                <p>*SeeOffer Termstooltip Overages apply if contact or email send limit is exceeded. <a onClick={openModal} className='underline'>Learn more...</a></p>
            </div>
        </div>
    </div>
      </div>  
        </div>
    </div>
    {/* Modal */}
    {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md shadow-lg w-96">
                        <h2 className="text-2xl font-bold">Learn More</h2>
                        <p>Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.</p>
                        <p className="mt-3">Non-USD Pricing: Actual price may vary. Prices displayed are estimates based on current exchange rates. Exact amount charged will vary and depends on the exchange rate at the time of payment processing. Prices displayed exclude any applicable taxes and fees, which will be added to the cost of all services purchased. For exact base pricing please refer to prices listed in USD.</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 text-white p-2 rounded"
                                onClick={closeModal} // Close the modal
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Component1/>
    </div>
  )
}

export default Pricing

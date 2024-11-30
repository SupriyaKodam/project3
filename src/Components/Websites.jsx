import {React,useState} from 'react';
import Footer from './Footer';
import FAQ from './FAQ';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Websites = () => {
    const [alignment, setAlignment] = useState('web');
    const navigate= useNavigate();
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };
  return (
    <div className='flex flex-col items-center mt-52'>
    <div className="flex flex-col items-center sm:flex-col lg:flex-row justify-center text-black mb-10">
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
      <div className='flex flex-col md:flex md:flex-row justify-center'>
        {/* Left Section */}
        <div className='flex flex-col items-start justify-start border-2 border-gray-200 p-10 w-64'>
          <h1 className='font-serif text-xl mb-3'>Core</h1>
          <p className='text-xs mb-2'>
            For teams who need to personalize their
             website with a custom domain, all with 24/7
            support.
          </p>
          <h1 className='text-3xl mb-3'>₹849</h1>
          <p className='text-xs mb-3'>/month</p>
          <button className='bg-yellow-400 border-2 text-sm rounded-full p-2 w-40'>Buy Now</button>
        </div>

        {/* Right Section */}
        <div className='flex flex-col items-start justify-start border-2 border-gray-200 p-10 w-64'>
          <h1 className='font-serif text-xl mb-3'>Free</h1>
          <p className='text-xs mb-2'>
          For businesses who need a basic website with a <br/>Mailchimp-branded <br/>domain.
          </p>
          <h1 className='text-3xl mb-3'>₹0</h1>
          <p className='text-xs mb-3'>/month</p>
          <button className='bg-yellow-400 border-2 text-sm rounded-full p-2 w-40'>Sign Up Free</button>
        </div>
      </div>

      {/* "Compare our plans" Button */}
      <div className='sm:mt:10 md:mt-20'>
        <button className='bg-yellow-400 border-2 rounded-lg px-6 py-2 border-black'>Compare our plans</button>
      </div>
      <div className='flex flex-col'>
      <div className='flex flex-col md:flex md:flex-row items-center mt-20 md:gap-60 '>
        <div className='md:w-1/3 mt-10'>
           <img className='w-full h-auto' src="./Images/A.AVIF" />
        </div>
        <div className='md:w-2/3'>
            <h1 className='text-4xl font-serif text-black'>Also included: Free, built-in marketing tools</h1>
            <p className='mb-3'>All Websites plans come with Free marketing features<br/> like email and social posting, so you can find new customers and drive sales.<br/> But if you want more advanced marketing tools, like our Customer Journey Builder,<br/> try a paid Marketing plan.</p>
            <button className='rounded p-3 border-black border-2 hover:bg-yellow-400'>Explore Marketing plans</button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-20 md:gap-60'>
        <div className='md:w-1/3'>
           <img className='w-full h-auto' src="./Images/B.AVIF" />
        </div>
        <div className='md:w-2/3'>
            <h1 className='text-4xl font-serif text-black'>Need to help clients use Mailchimp?
            </h1>
            <p className='mb-3'>Unlock the tools you need to get work done for clients when you sign up through Mailchimp &<br/> Co, our community for freelancers and agencies.<br/> It’s free to join with any Mailchimp plan.</p>
            <button className='rounded p-3 border-black border-2 hover:bg-yellow-400'>Get Started</button>
        </div>
      </div>
      <FAQ/>
      <Footer/>
      </div>
    </div>
  );
};

export default Websites;

import React from 'react';
import FAQ from './FAQ';
import Footer from './Footer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const EmailMarketing = () => {
  const [alignment, setAlignment] = useState('web');
  const navigate = useNavigate();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const plans = [
    {
      name: "Premium",
      price: "₹11,500/mo for 10,000 contacts",
      support: "Phone & Priority Support",
      reporting: true,
      journeyPoints: "Up to 200 journey points",
      aiFeatures: true,
      customTemplates: true,
      emailSends: "15K contacts",
      users: "Unlimited",
      audiences: "Unlimited",
      roles: "5 Roles",
      features: ["Forms & Landing Pages", "Remove Branding", "A/B Testing", "Dynamic Content", "Advanced Segmentation", "Behavioral Targeting"],
    },
    {
      name: "Standard",
      price: "₹575/mo for 500 contacts",
      support: "24/7 Email & Chat Support",
      reporting: true,
      journeyPoints: "Up to 200 journey points",
      aiFeatures: true,
      customTemplates: true,
      emailSends: "12K contacts",
      users: "5 Seats",
      audiences: "5 Audiences",
      roles: "4 Roles",
      features: ["Forms & Landing Pages", "Remove Branding", "A/B Testing"],
    },
    {
      name: "Essentials",
      price: "₹335/mo for 500 contacts",
      support: "24/7 Email & Chat Support",
      reporting: false,
      journeyPoints: "Up to 4 journey points",
      aiFeatures: false,
      customTemplates: false,
      emailSends: "10K contacts",
      users: "3 Seats",
      audiences: "3 Audiences",
      roles: "2 Roles",
      features: ["Forms & Landing Pages"],
    },
    {
      name: "Free",
      price: "₹0/mo: limit of 500 contacts",
      support: "Email support for first 30 days",
      reporting: false,
      journeyPoints: "N/A",
      aiFeatures: false,
      customTemplates: false,
      emailSends: "Max of 1,000/mo or 500/day",
      users: "1 Seat",
      audiences: "1 Audience",
      roles: "N/A",
      features: [],
    },
  ];

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
      <div className="flex flex-col text-center justify-between mt-10 md:mt-40">
        <h1 className="text-md md:text-5xl font-bold mb-6 md:mb-10">Why do we recommend Standard?</h1>
        <p className="text-xs md:text-xl">
          Our Standard plan has the advanced automations and data-driven
          <br />
          optimization tools you need to scale and save time.
        </p>
      </div>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-950 text-sm md:text-base text-gray-950">
            <thead>
              <tr className="bg-yellow-100">
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Plan</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Starting Price</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Support</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Reporting & Analytics</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Journey Points</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Generative AI Features</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Custom-Coded Templates</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Monthly Email Sends</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Users</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Audiences</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Role-based Access</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Key Features</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2 font-semibold">{plan.name}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.price}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.support}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.reporting ? "✔" : "✘"}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.journeyPoints}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.aiFeatures ? "✔" : "✘"}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.customTemplates ? "✔" : "✘"}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.emailSends}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.users}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.audiences}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{plan.roles}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                    <ul className="list-disc pl-5">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5 mb-10'>
        <button className='p-3 bg-yellow-100 border-2 rounded-md shadow-xl border-gray-700 hover:bg-yellow-400'>Compare all features</button>
      </div>
      <div className='w-full h-auto bg-lime-400'>
           <div>
           <p className='text-xl text-white font-serif flex items-center justify-center mb-10 md:text-5xl pt-20 pb-10'>Work with a trusted industry leader</p>
           </div>
           <div className='flex flex-col lg:flex lg:flex-row lg:gap-x-16 w-80 h-auto lg:ml-16'>
                <img src="./Images/1.AVIF"/>
                <img src="./Images/2.AVIF"/>
                <img src="./Images/3.AVIF"/>
                <img src="./Images/4.AVIF"/>
           </div>
      </div>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default EmailMarketing;

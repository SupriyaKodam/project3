import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Seeallfeatures() {
  return (
    <div className='mt-40'>
       <div className='flex flex-col items-center justify-center bg-purple-300 p-10'>
          <h1 className='mb-2'>MAILCHIMP FEATURES</h1>
          <h1 className='text-md md:text-4xl items-center justify-between'>Drive revenue using powerful features
          </h1>
          <h1 className='text-md md:text-4xl items-center justify-between'>from the #1 email marketing</h1>
          <h1 className='text-md md:text-4xl mb-4 items-center justify-between'>and automations platform*</h1>
          <button className='bg-yellow-400 p-3 rounded-full border-2 border-black'>Get Started</button>
       </div>
       <div>
          <h1 className='mt-20 text-2xl font-medium flex items-center justify-center mb-5'>Marketing Essentials</h1>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              <div className='flex flex-col items-start justify-start'>
              <img className="mb-3" src="./Images/Testing.AVIF"/>
              <div className='flex flex-row gap-3 mb-2'>
              <h1>A/B Testing</h1>
               <TrendingFlatIcon/>
              </div>
              <p>Test and optimize your emails</p>
              </div>
          <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='flex flex-col items-start justify-start'>
              <img className="mb-3" src="./Images/Testing.AVIF"/>
              <div className='flex flex-row gap-3 mb-2'>
              <h1>A/B Testing</h1>
               <TrendingFlatIcon/>
              </div>
              <p>Test and optimize your emails</p>
              </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='flex flex-col items-start justify-start'>
              <img className="mb-3" src="./Images/Testing.AVIF"/>
              <div className='flex flex-row gap-3 mb-2'>
              <h1>A/B Testing</h1>
               <TrendingFlatIcon/>
              </div>
              <p>Test and optimize your emails</p>
              </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='flex flex-col items-start justify-start'>
              <img className="mb-3" src="./Images/Testing.AVIF"/>
              <div className='flex flex-row gap-3 mb-2'>
              <h1>A/B Testing</h1>
               <TrendingFlatIcon/>
              </div>
              <p>Test and optimize your emails</p>
              </div>
          </div>
          </div>
       </div>
       <FAQ/>
       <Footer/>
    </div>
  )
}

export default Seeallfeatures

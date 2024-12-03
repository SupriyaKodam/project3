import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'

const Marketing = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row items-center justify-center mt-40 md:gap-40 p-10 bg-yellow-700'> 
      <div className='flex flex-col flex-start justify-start'>
           <h1 className='text-sm mb-2'>MARKETING AUTOMATION TOOLS</h1>
           <h1 className='text-4xl font-serif mb-2'>Sophisticated marketing<br/> automation tools to<br/> convert and drive<br/> revenue</h1>
           <p className='text-xl mb-2'>You work hard. Now work smarter, with <br/>automations. Mailchimp’s advanced,<br/> automated multichannel tools will help<br/> you drive personalized marketing<br/> messages that scale alongside your<br/> business.</p>
           <button className='text-xs bg-yellow-400 border-2 border-black p-2 rounded-full w-1/2'>Get Started</button>
      </div>
      <div className='flex items-right'>
        <img src="./Images/x.AVIF" className='w-[700px]'/>
      </div>
    </div>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default Marketing

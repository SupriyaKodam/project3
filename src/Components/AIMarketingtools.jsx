import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'

function AIMarketingtools() {
  return (
    <div>
    <div className='flex flex-col md:flex-row items-center justify-center mt-40 gap-10'>
        <div className='flex flex-col items-start justify-start'>
             <h1 className='mb-2'>EMAIL MARKETING PLATFORM</h1>
             <h1 className='mb-2 text-xl md:text-4xl font-serif'>Convert more customers<br/> with a powerful and<br/> intuitive platform
             </h1>
             <p className='mb-3'>Create personalized emails, target<br/> precisely with behavior-based <br/>automations and segments, and<br/> optimize with real-time reporting.</p>
             <button className='mb-5 p-3 w-1/2 bottom-2 border-black bg-yellow-400 rounded-full'>Get Started</button>
             <img src="./Images/w.png"/>
        </div>
        <div>
          <img className='w-[600px]'
          src='./Images/u.AVIF'/>
        </div>
    </div>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default AIMarketingtools

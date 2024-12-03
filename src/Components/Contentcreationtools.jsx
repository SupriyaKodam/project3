import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'

function Contentcreationtools() {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-center mt-40 gap-10'>
        <div className='flex flex-col items-start justify-start'>
             <h1 className='mb-2'>CONTENT CREATION TOOLS</h1>
             <h1 className='mb-2 text-xl md:text-4xl font-serif'>Drive engagement, build<br/> trust, and earn loyalty,<br/> with AI-assisted content<br/> creation tools
             </h1>
             <p className='mb-3'>Our industry-leading platform uses AI to<br/>suggest marketing creative that your<br/>team can use to easily create unique,<br/>personalized marketing content.*</p>
             <button className='mb-5 p-3 w-1/2 bottom-2 border-black bg-yellow-400 rounded-full'>Get Started</button>
        </div>
        <div>
          <img className='w-[600px]'
          src='./Images/v.AVIF'/>
        </div>
    </div>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default Contentcreationtools

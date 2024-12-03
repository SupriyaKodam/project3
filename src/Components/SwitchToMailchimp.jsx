import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ChatIcon from '@mui/icons-material/Chat';
import ContactUsForm from './ContactUsForm';
import FAQ from './FAQ';
import Footer from './Footer';

const SwitchToMailchimp = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-right justify-end mt-44 lg:gap-28 mb-20'>
           <div className='sm:pl-10 flex flex-col items-center justify-center'>
               <p className='text-sm'>SWITCH TO MAILCHIMP</p>
               <h1 className='text-3xl font-serif mb-3'>Grow with the #1 email<br/>marketing and<br/> automations platform*</h1>
               <p className='text-md mb-3'>Get powerful features in a platform that's<br/>affordable and easy to use—with<br/> onboarding support and resources to help<br/> you switch.</p>
               <div className='flex flex-row gap-2'>
               <button className='p-2 border-2 border-black rounded-full bg-yellow-400'>Talk to Sales</button>
               <p className='mt-2'>See all pricing options</p>
               <TrendingFlatIcon className='mt-2 p-1 bg-yellow-400 rounded-xl'/>
               </div>
           </div>
           <div>
              <img src="./Images/z.AVIF" className='w-[900px] h-100vh'/>
           </div>
        </div>
        <div className='flex flex-row md:justify-around bg-yellow-600 md:p-10 sm:gap-2'>
            <div className='flex flex-col items-start justify-start'>
                <h1 className='text-xl font-serif'>11 million global users</h1>
                <p>trust Mailchimp with their marketing</p>
            </div>
            <div className='flex flex-col items-start justify-start'>
                <h1 className='text-xl font-serif'>4.5/5 star rating</h1>
                <p>based on Capterra reviews for ease of use,<br/> customer service, features, value, and more*</p>
            </div>
            <div className='flex flex-col items-start justify-start'>
                <h1 className='text-xl font-serif'>89% of customers agree</h1>
                <p>our personalized onboarding service made it<br/> easy for them to onboard to the platform*</p>
            </div>
        </div>
            <div className='flex flex-col md:flex-row items-center justify-center p-10 lg:gap-28 bg-amber-400 mb-10'>
                <div className=''>
                   <img src="./Images/y.AVIF" className='w-[500px] h-100vh'/>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <h1 className='text-xl font-serif mb-3'>Let Intuit Assist help you<br/> personalize your<br/> marketing at scale*</h1>
                    <p className='mb-3'>Mailchimp uses generative AI to automate manual <br/>marketing tasks—such as writing a first draft or visualizing <br/>data. This can help you boost customer engagement and<br/>drive higher conversion.</p>
                    <div className='flex flex-row gap-3'>
                         <p>Explore AI marketing tools</p>
                         <TrendingFlatIcon style={{ fontSize: '30px' }} className='p-2 bg-yellow-300 rounded-xl'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center md:gap-60 md:ml-10'>
                <div className='flex flex-col items-start justify-start'>
                    <h1 className='text-xl font-serif mb-2'>Contact Sales</h1>
                    <button className='p-2 border-2 bg-yellow-400 border-black rounded-full mb-2'>Call us +1(800)315-5939</button>
                    <div className='flex flex-row gap-3 mb-5'>
                        <ChatIcon/>
                        <p>Chat with us</p>
                    </div>
                    <p className='mb-3'>Find a plan that's right for you.<br/><br/>Experience a demo of Mailchimp.<br/><br/>Explore use cases for your business.<br/><br/>
                       *All calls with the Mailchimp sales team<br/> are currently available in English,<br/>Spanish and Portuguese.</p>
                    <p className='text-white bg-gray-700 text-xs p-5'>Need help with your Mailchimp account?<br/>Get Support<br/>
                       *All calls with the Mailchimp support team<br/> are currently only available in English.</p>
                </div>
                <ContactUsForm/>
            </div>
            <div className='text-white bg-black p-5 md:p-20'>
                <h1 className='flex items-center justify-center font-bold mb-10 text-xl md:text-4xl'>Explore the key features of Mailchimp                </h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                 <div className='flex flex-col items-start justify-start'>
                     <img className='mb-3' src='./Images/marketing.AVIF'/>
                     <div className='flex flex-row gap-5'>
                     <h1 className='mb-3'>Marketing<br/> automations</h1>
                     <TrendingFlatIcon className='text-white'/>
                     </div>
                     <p>Unlock the power of marketing<br/> automations to streamline and<br/> optimize your campaigns, saving<br/>time and maximizing your reach.</p>
                 </div>
                 <div className='flex flex-col items-start justify-start'>
                     <img className='mb-3' src='./Images/Reporting.AVIF'/>
                     <div className='flex flex-row gap-5'>
                     <h1 className='mb-3'>Reporting &<br/> analytics</h1>
                     <TrendingFlatIcon className='text-white'/>
                     </div>
                     <p>Gain valuable insights and make<br/>data-driven decisions through<br/>reporting and analytics, enabling<br/>you to maximize the success of<br/>your marketing efforts.</p>
                 </div>
                 <div className='flex flex-col items-start justify-start'>
                     <img className='mb-3' src='./Images/Audience.AVIF'/>
                     <div className='flex flex-row gap-5'>
                     <h1 className='mb-3'>Audience<br/>management</h1>
                     <TrendingFlatIcon className='text-white'/>
                     </div>
                     <p>Effectively segment your<br/> audience to deliver personalized<br/>and targeted messages that<br/>resonate, to help lead to higher<br/>engagement and conversion<br/>rates</p>
                 </div>
                 <div className='flex flex-col items-start justify-start'>
                     <img className='mb-3' src='./Images/Content.AVIF'/>
                     <div className='flex flex-row gap-5'>
                     <h1 className='mb-3'>Content<br/>creation</h1>
                     <TrendingFlatIcon className='text-white'/>
                     </div>
                     <p>Streamline content creation with<br/>customizable templates and<br/>tools, resulting in content that<br/>visually engages your audience.</p>
                 </div>
            </div>
            </div>
            <FAQ/>
            <Footer/>
    </div>
  )
}

export default SwitchToMailchimp

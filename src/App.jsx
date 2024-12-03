import React from 'react'
import Landingpage from './Pages/Landingpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import NavBar from './Components/Navbar'
import SignUp from './Components/SignUp'
import Pricing from './Components/Pricing'
import EmailMarketing from './Components/EmailMarketing'
import Websites from './Components/Websites'
import TransactionalEmail from './Components/TransactionalEmail'
import SwitchToMailchimp from './Components/SwitchToMailchimp'
import SolutionsAndServices from './Components/SolutionsAndServices'
import Marketing from './Components/Marketing'
import AIMarketingtools from './Components/AIMarketingtools'
import Contentcreationtools from './Components/Contentcreationtools'
import Seeallfeatures from './Components/Seeallfeatures'


const App = () => {
  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/landingpage' element={<Landingpage/>}/>
        <Route path='/mailchimp' element={<SwitchToMailchimp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
       <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/websites" element={<Websites/>}/>
        <Route path="/transactional-email" element={<TransactionalEmail/>}/>
        <Route path='/' element={<SolutionsAndServices/>}/>
        <Route path="/email-marketing" element={<EmailMarketing/>}/>
        <Route path="/marketing-automation" element={<Marketing/>}/>
        <Route path= "/ai-marketing-tools" element={<AIMarketingtools/>}/>
        <Route path="/websites" element={<Websites/>}/>
        <Route path="/content-creation-tools" element={<Contentcreationtools/>}/>
        <Route path= "/see-all-features" element={<Seeallfeatures/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App

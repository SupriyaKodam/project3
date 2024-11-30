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


const App = () => {
  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/landingpage' element={<Landingpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/websites" element={<Websites/>}/>
        <Route path="/transactional-email" element={<TransactionalEmail/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App

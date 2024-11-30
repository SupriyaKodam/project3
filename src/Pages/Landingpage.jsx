import React from 'react'
import NavBar from '../Components/Navbar'
import Home from '../Components/Home'
import HeroSection2 from '../Components/HeroSection2'
import PricingTable from '../Components/PricingTable'
import Aboutus from '../Components/Aboutus'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'

const Landingpage = () => {
  return (
       <div> 
      <NavBar/>
      <Home/> 
      <HeroSection2/>
      <PricingTable/>
      <Aboutus/>
      <FAQ/>
      <Footer/>
      </div>
  )
}

export default Landingpage

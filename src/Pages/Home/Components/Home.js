import React from 'react'
import { Navbar } from '../../../Compoents/Navbar/Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Calltoaction from '../Calltoaction'
import Faqs from './Faqs' 
import "../../Home/Components/Home.css"
import Footer from '../../../Compoents/Footer/Footer'


const Home = () => {
  return (
   <div>
<Navbar/>
<Hero/>
<About heading="about us"/>
<Services/>
<Calltoaction/>
<Faqs/>
<Footer/>
   </div>
  )
}

export default Home
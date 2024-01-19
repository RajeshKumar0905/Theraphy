import React from 'react'
import { Navbar } from '../../Compoents/Navbar/Navbar'
import Header from '../../Compoents/Header/Header'
import Footer from "../../Compoents/Footer/Footer"
import Card from '../../Pages/Pricing/Card'
import "./Pricing.css"
const Pricing = () => {
  return (
 <>
 <Navbar/>
 <Header heading="Pricing"/>
 <Card />
<Footer />
 </>
  )
}

export default Pricing
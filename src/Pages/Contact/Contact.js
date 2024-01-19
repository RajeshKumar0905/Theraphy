import React from 'react'
import { Navbar } from '../../Compoents/Navbar/Navbar'
import Header from '../../Compoents/Header/Header'
import Footer from "../../Compoents/Footer/Footer"
import From from './From'
import  "./Contact.css"
const Contact = () => {
  return (
 <>
 <Navbar/>
 <Header heading="Contact"/>
 <From/>

<Footer />
 </>
  )
}

export default Contact
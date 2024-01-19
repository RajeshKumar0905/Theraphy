import React from 'react'
import { Navbar } from '../../Compoents/Navbar/Navbar'
import Header from '../../Compoents/Header/Header'
import Footer from "../../Compoents/Footer/Footer"
import About from '../Home/Components/About'
const Training = () => {
  return (
 <>
 <Navbar/>
 <Header heading="Training"/>
 <About heading="training"/>
<Footer />
 </>
  )
}

export default Training
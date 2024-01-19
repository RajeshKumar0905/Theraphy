import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import fb from "../../Assets/fb.png"
import insta from "../../Assets/insta.png"
import twitter from "../../Assets/twitter.png"
const Footer = () => {
  const social =[fb,insta,twitter]




  return (
  <footer>
     <h1>TH\ER@_PHY</h1>
<div className='links'>
  <h3>Useful links</h3>
 <div className='link'>
 <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Training">Training</Link>
 </div>
</div>
<div className='social'>
   {
    social.map((item)=>{
      return(
        <img src={item} alt=''></img>
      )
    })
   }
</div>
  </footer>
  )
}

export default Footer
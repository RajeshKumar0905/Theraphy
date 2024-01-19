import React from 'react'
import video from "../../../Assets/color.mp4"
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className='hero'>
        <video  src={video} autoPlay loop muted> </video>
        <div className='content'>
        <h1>Explore the life </h1>
        <p>let the soul in you ligthen up
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elitAenean commodo </p>
        <div className='buttons'>
            <Link to="/">SERVICESE</Link>
            <Link to="/Contact">CONTACT_US</Link>
        </div>
        </div>

    </div>
  )
}

export default Hero
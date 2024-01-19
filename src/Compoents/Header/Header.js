import React from 'react'
import "./Header.css"
import hearderImg from "../../Assets/night-sky-glows-with-galaxy-mystical-silhouette-generative-ai.jpg"
const Header = ({heading}) => {
  return (
    <section className='header' style={{backgroundImage:`url(${hearderImg})`,backgroundSize:"cover",backgroundPosition:"fixed",backgroundRepeat:"no-repeat"}}>
        <h1>{heading}</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elitAenean commodo</p>
    </section>
  )
}

export default Header
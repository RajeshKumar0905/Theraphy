import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import {useState} from "react"
export const Navbar = () => {
    const [click,setclick]=useState(false)
    const handleclick=()=>{
        setclick(!click)
    }
    const [color,setColor]=useState(false);
    const handleColor =()=>{
      if(window.scrollY >=200){
        setColor(true);
      }else{
      setColor(false);
    }
  }
    window.addEventListener("scroll",handleColor)
  return (
    <nav className={color ? "color" :""}>
      
      <div className="logo">
        <h1>TH\ER@_PHY</h1>
      </div>
      <div className={click ?"menu active ":"menu"}>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Training">Training</Link>
      </div>
      <div className="hamburger" onClick={handleclick}>
       {click ?(
 <FaTimes style={{ color: "white" }} size={25} />
       ):(
        <FaBars style={{ color: "white" }} size={25} />
       )}
      </div>
    </nav>
  );
};

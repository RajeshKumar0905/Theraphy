import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Model from './Components/Model'
const Calltoaction = () => {
    const [model,setmodel]=useState(false)
    const handleclick=()=>{
setmodel(!model);
    }
  return (
    <>
    <section className='call-to-action'>
        <h2>Book Your Slot To-Day</h2>
        <button onClick={handleclick}>Know more!</button>
    </section>
    {
        model && <Model model={model} handleclick={handleclick}/>
    }
    </>
  )
}

export default Calltoaction
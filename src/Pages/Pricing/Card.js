import React from 'react'
import Singlecard from './Singlecard'

const Card = () => {
 
const data=[
  {
    id:1,
    heading:"basic",
    line1 :" 5 lakhs",
    line2:"no unlimited access",
    line3:"No Food"
  },
  {
    id:2,
    heading:"Medium",
    line1 :" 10lakhs lakhs",
    line2:"unlimited access",
    line3:"No Food"
  },
  {
    id:3,
    heading:"permium",
    line1 :" 15 lakhs",
    line2:"unlimited access",
    line3:"Food"
  }
]


  return (
   <>
   <h1 className='heading'>Pricing</h1>
   <section className='cards'>
    {
      data.map((item)=>{
        const{heading,line1,line2,line3}=item;
        return(
          <Singlecard heading={heading} line1={line1} line2={line2} line3={line3}/>
        )
      })
    }
    
   </section>
   </>
  )
}

export default Card
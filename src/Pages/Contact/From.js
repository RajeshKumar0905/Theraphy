import React from 'react'

const From = () => {
  return (
   
<>
<h1 className='heading'>Contact us</h1>
<section className='container'> 
<form>
  <div className='field'>
    <p>name</p>
    <input type='text'/>
  </div>
  <div className='field'>
    <p>EMail</p>
    <input type='email'/>
  </div>
  <div className='field'>
    <p>Phone numner</p>
    <input type='tel'/>
  </div>
<div className='form-button'>
<button>Submit</button>
</div>

  
</form>
</section>
</>
  
  )
}

export default From
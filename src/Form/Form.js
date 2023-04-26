import React, { useState } from 'react'
import './Form.css'

function Form({gameNews}) {
  const[val,setVal]=useState('')

  const submitMe=(e)=>{
    e.preventDefault()
    if(!val||val=== ' '){
      return
    }
    else{
      setVal(gameNews)
    }
  }
 
  return (
    <div className='coolform'>
      <div className='formdetail'>
        <form onSubmit={submitMe} className='myform'>
          <div className='input'>
            <input className='myinput' type='text' value={val} onChange={e=>setVal(e.target.value)} placeholder='Search Game....'/>
          </div>
          <div className='btn'>
            <button className='mybtn'>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
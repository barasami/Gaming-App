import React from 'react'
import './Form.css'

function Form() {

  const submitMe=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='coolform'>
      <div className='formdetail'>
        <form onSubmit={submitMe} className='myform'>
          <div className='input'>
            <input className='myinput' type='text' placeholder='Search Game....'/>
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
import React from 'react'
import './Time.css'

function Time() {
    let today=new Date()

    const f= new Intl.DateTimeFormat('en-us',{
        dateStyle:'long'
    })
    let myday=f.format(today)
  return (
    <div className='mydate'>
        <div className='Rtime'>
          <p className='daten'>Welcome i'ts on {myday}</p>
        </div>
    </div>
  )
}

export default Time
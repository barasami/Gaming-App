import React from 'react'
import { useState } from 'react'
import { DehazeIcon,ClearIcon } from '@mui/icons-material'
import './Navbar.css'

function Navbar() {
    const[menu,setMenu]=useState(false)
    const changeMe=()=>{
        setMenu(!menu)
    }
  return (
    <nav className='navbar'>
        <div className='title'>SimpleNav</div>
        <div className='mymenu' onClick={changeMe}>
            {menu ? <DehazeIcon className='icon'/>: <ClearIcon className='icon'/>  }
        </div>
        <div className={menu ? 'Dontshow' : 'show'}>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
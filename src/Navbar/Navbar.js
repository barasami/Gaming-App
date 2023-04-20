import React from 'react'
import { useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const[menu,setMenu]=useState(false)
    const changeMe=()=>{
        setMenu(!menu)
    }
  return (
    <nav className='navbar'>
        <div className='title'>GamingHub</div>
        <div className='mymenu' onClick={changeMe}>
            {menu ? <DehazeIcon className='icon'/>: <ClearIcon className='icon'/>  }
        </div>
        <div className={menu ? 'Dontshow' : 'show'}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/news'>Home</Link></li>
                <li><Link to='/sale'>Home</Link></li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
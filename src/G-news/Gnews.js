import React, { useEffect, useState } from 'react'
import { gameNews } from './gamingnews'
import './Gnews.css'
import { CircularProgress } from '@mui/material'

function Gnews() {
    const[news,setNews]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
        setLoad(true)
        gameNews()
        .then(({data})=>{
            setNews(data)
            console.log(data);
            setLoad(false)
        })
    },[])

    const Ndata=news?.map((mynews)=>{
        const{date,description,image,link,title,id}=mynews

        return(
            <div key={id} className='paper' elevation={2}>
                <div className='title'>
                    <div>
                        {title}
                    </div>
                </div>
                <div className='images'>
                    <img src={image} alt={title} className='img'/>
                </div>
                <div className='description'>
                    <div>
                        {description}
                    </div>
                </div>
                <div>
                    {date}
                </div>
                <div>
                    <a href={link} target='_blank' rel="noreferrer" >Visit Site</a>
                </div>
                
            </div>

        )
    })

    

  return (
    <div className='newspage'>
        {load ? <CircularProgress className='circular' color='primary'/> : 
        <div>
            {Ndata}
        </div>}
        
    </div>
  )
}

export default Gnews
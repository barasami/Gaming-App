import React, { useEffect, useState } from 'react'
import { gameNews } from './gamingnews'
import './Gnews.css'

function Gnews() {
    const[news,setNews]=useState([])

    useEffect(()=>{
        gameNews()
        .then(({data})=>{
            setNews(data)
            console.log(data);
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
        {Ndata}
    </div>
  )
}

export default Gnews
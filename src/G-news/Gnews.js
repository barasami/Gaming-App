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
        const{id,title,developer,publisher,release_date,short_description,
        genre,freetogame_profile_url,thumbnail,game_url}=mynews

        return(
            <div key={id} className='paper' elevation={2}>
                <div className='title'>
                    <div>
                        {title}
                    </div>
                </div>
                <div className='images'>
                    <img src={freetogame_profile_url} alt={title} className='img'/>
                </div>
                <div className='description'>
                    <div>
                        {short_description}
                    </div>
                </div>
                <div>
                    {genre}
                </div>
                <div>
                    {developer}
                </div>
                <div>
                    {publisher}
                </div>
                <div>
                    {release_date}
                </div>
                <div>
                    <img src={thumbnail} alt={title} className='img'/>
                </div>
                <div>
                    <a href={game_url} target='_blank' rel="noreferrer" >Visit Site</a>
                </div>
                
            </div>

        )
    })

    

  return (
    <div className='newspage'>
        {load ? <CircularProgress className='circular' color='inherit'/> : 
        <div>
            {Ndata}
        </div>}
        
    </div>
  )
}

export default Gnews
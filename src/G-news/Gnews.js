import React, { useEffect, useState } from 'react'
import { gameNews } from './gamingnews'
import './Gnews.css'
import { CircularProgress } from '@mui/material'
import Time from '../Time/Time'

function Gnews() {
    const[news,setNews]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
        setLoad(true)
        gameNews()
        .then(({data})=>{
            setNews(data)
            setLoad(false)
        })
    },[])

    const Ndata=news?.map((mynews)=>{
        const{id,title,developer,publisher,release_date,short_description,
        genre,thumbnail,game_url}=mynews

        return(
            <div key={id} className='paper'>
                <div className='coolbody'>
                    <div className='cooltitle'>
                       {title}
                    </div>
                    <div className='description'>
                       {short_description}
                    </div>
                    <div className='genre'>
                      Genre <span className='paragraph'>{genre} </span>
                    </div>
                    <div className='dev'>
                      Developer  <span className='paragraph'>{developer}</span>
                    </div>
                    <div className='pub'>
                      Publisher  <span className='paragraph'>{publisher}</span>
                    </div>
                    <div className='date'>
                      Release Date  <span className='paragraph'>{release_date}</span>
                    </div>
                    <div className='coolimg'>
                        <img src={thumbnail} alt={title} className='img'/>
                    </div>
                    <hr className='hr'></hr>
                    <div>
                        <a href={game_url} target='_blank' rel="noreferrer" >Visit Site</a>
                    </div>
                </div>
                
            </div>

        )
    })

    

  return (
    <div className='newspage'>
        <div>
          <Time/>
        </div>
        <div className='mydiv'>
          <h3 className='head'>FREE GAMES</h3>
        </div>
        {load ? <CircularProgress className='circular' color='inherit'/> : 
        <div>
           {Ndata}
        </div>}
        
    </div>
  )
}

export default Gnews
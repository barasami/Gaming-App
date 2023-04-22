import React, { useEffect, useState } from 'react'
import { releaseMovies } from './Release'
import './Release.css'
import { CircularProgress } from '@mui/material'

function Rnews() {
    const[release,setRelease]=useState([])
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        setLoad(true)
        releaseMovies()
        .then(({data})=>{
            setRelease(data)
            console.log(data);
            setLoad(false)
        })
    },[])

    const coolRelease=release?.map((mydata)=>{
        const{title,image,price,releaseDate}=mydata
        return(
            <div className='pubnews' key={title}>
                <div className='mybody'>
                    <div className='pubtitle'>
                       {title}
                    </div>
                    <div className='pubimg'>
                        <img src={image} alt={title} className='img'/>
                    </div>
                    <hr className='hr'></hr>
                    <div className='pubrelease'>
                        {releaseDate}
                    </div>
                    <div className='pubprice'>
                        {price}
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div>
        {load? <CircularProgress color='inherit' className='circular'/> : 
        <div className='dispcontent'>
            {coolRelease}
        </div>}
        
    </div>
  )
}

export default Rnews
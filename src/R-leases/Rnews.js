import React, { useEffect, useState } from 'react'
import { releaseMovies } from './Release'

function Rnews() {
    const[release,setRelease]=useState([])
    useEffect(()=>{
        releaseMovies()
        .then(({data})=>{
            setRelease(data)
            console.log(data);
        })
    },[])

    const coolRelease=release?.map((mydata)=>{
        const{title,image,price,releaseDate}=mydata

        return(
            <div className='pubnews'>
                <div>
                    {title}
                </div>
                <div>
                    <img src={image} alt={title}/>
                </div>
                <div>
                    {releaseDate}
                </div>
                <div>
                    {price}
                </div>
            </div>
        )
    })
  return (
    <div>
        {coolRelease}
    </div>
  )
}

export default Rnews
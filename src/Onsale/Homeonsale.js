import React, { useEffect, useState } from 'react'
import { onSale } from './Onsale'
import { CircularProgress } from '@mui/material';
import Form from '../Form/Form';

function Homeonsale() {
    const [sale,setSale]=useState([])
    const [load,setLoad]=useState(false)
    const[gamesearch,setGamesearch]=useState('GTA')

    const gameSearch=(game)=>{
        setGamesearch(game);
    }
    useEffect(()=>{
        setLoad(true)
        onSale(gamesearch)
        .then(({data})=>{
            setSale(data)
            setLoad(false)
        })

    },[gamesearch])

    const onsale=sale?.map((saling)=>{
        const{id,description,currentPrice,title,publisherName,keyImages,price}=saling
        const img=keyImages[0].url
        const link=price.url
        return(
            <div key={id} className='paper'>
                <div className='coolbody'>
                    <div className='pubtitle'>
                        {title}
                    </div>
                    <div className='pubimg'>
                        <img src={img} alt={title} className='img'/>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div className='pubprice'>
                        {currentPrice}
                    </div>
                    <div>
                        {publisherName}
                    </div>
                    <div>
                        <a href={link} target='_blank' rel="noreferrer">View</a>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div>
        <div>
            <Form gameNews={gameSearch}/>
        </div>
        {load ? <CircularProgress className='circular' color='inherit'/> :
        <div>
            {onsale}
        </div>}
        
    </div>
  )
}

export default Homeonsale
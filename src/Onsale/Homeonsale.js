import React, { useEffect, useState } from 'react'
import { onSale } from './Onsale'
import { CircularProgress } from '@mui/material';

function Homeonsale() {
    const [sale,setSale]=useState([])
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        setLoad(true)
        onSale()
        .then(({data})=>{
            setSale(data)
            console.log(data);
            setLoad(false)
        })

    },[])

    const onsale=sale?.map((saling)=>{
        const{id,description,currentPrice,title,publisherName,keyImages,price}=saling
        const img=keyImages[0].url
        const link=price.url
        return(
            <div key={id} className='pubnews'>
                <div className='mybody'>
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
        {load ? <CircularProgress className='circular' color='inherit'/> :<div>
            {onsale}
        </div>}
        
    </div>
  )
}

export default Homeonsale
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
        const{id,description,currentprice}=saling
        return(
            <div key={id}>
                <div>
                    <div>{description}</div>
                    <div>{currentprice}</div>
                </div>
            </div>
        )
    })
  return (
    <div>
        {load ? <CircularProgress className='circular' color='primary'/> :<div>
            {onsale}
        </div>}
        
    </div>
  )
}

export default Homeonsale
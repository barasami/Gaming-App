import React, { useEffect, useState } from 'react'
import { onSale } from './Onsale'

function Homeonsale() {
    const [sale,setSale]=useState([])
    useEffect(()=>{
        onSale()
        .then(({data})=>{
            setSale(data)
            console.log(data);
        })

    },[])
  return (
    <div>Homeonsale</div>
  )
}

export default Homeonsale
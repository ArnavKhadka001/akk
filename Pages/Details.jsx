import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Details() {
    let{ id}=useParams()
    let [data, setData]=useState([])
    useEffect((a)=>{
        fetch(`https://dummyjson.com/product/${id}`).then((a)=>a.json()).then((b)=>setData(b))
    },[])
  return (
    < >
    <div className="container">
      <h2>{data.title}</h2>
      <img width="300px" src={data.images}/>
      <button className='btn btn-primary'>Add to cart</button>
      </div>
    </ >
  )
}

export default Details

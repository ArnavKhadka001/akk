import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
    let{ cid}=useParams()
    let [data, setData]=useState([])
    useEffect((a)=>{
        fetch(`https://dummyjson.com/products/category/${cid}`).then((a)=>a.json()).then((b)=>setData(b.products))
    },[])
  return (
    < >
        <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h4 className='fw-bold py-2 text-uppercase'> {cid} Category</h4>
                </div>
                
            </div>
            <div className="row">
               
                 
        {data.map((a)=>(
 <div className='col-lg-3' key={a.id}>
 <div className="product-grid7">
<div className="product-image7">
<a href="#">
<img className="pic-1" src={a.images} />
<img className="pic-2" src={a.images} />
</a>
<ul className="social">
<li><a href className="fa fa-search" /></li>
<li><a href className="fa fa-shopping-bag" /></li>
<li><a href className="fa fa-shopping-cart" /></li>
</ul>
<span className="product-new-label">{a.category}</span>
</div>
<div className="product-content">
<h3 className="title">
    <Link to={`/details/${a.id}`}>
    {a.title}</Link></h3>
<ul className="rating">
<li className="fa fa-star" />
<li className="fa fa-star" />
<li className="fa fa-star" />
<li className="fa fa-star" />
<li className="fa fa-star" />
</ul>
<div className="price">$ {a.price}
</div>
</div>
</div>
</div>
 
        ))}
       
      
                
            </div>
        </div>
      </section>
    </ >
  )
}

export default Category

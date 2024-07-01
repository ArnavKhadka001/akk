import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { slider } from '../Data'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function ProductBYCat(props) {
    let [data, setData]=useState([])
    useEffect((a)=>{
        fetch(`https://dummyjson.com/products/category/${props.tt}`).then((a)=>a.json()).then((b)=>setData(b.products))
    },[])
  return (
    < >
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h4 className='fw-bold py-2 text-uppercase'> {props.tt} Category</h4>
                </div>
                <div className="col-lg-6 text-end">
                    <h4 className='fw-bold py-2'>View All</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((a)=>(
 <SwiperSlide key={a.id}>
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
</SwiperSlide>
 
        ))}
       
      </Swiper>
                </div>
            </div>
        </div>
      </section>
    </ >
  )
}

export default ProductBYCat

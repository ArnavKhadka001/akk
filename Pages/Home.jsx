import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { slider } from '../Data'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductBYCat from '../Comp/ProductBYCat';
function Home() {
    let [cat, setCat]=useState([])
    useEffect((a)=>{
        fetch('https://dummyjson.com/products/categories').then((a)=>a.json()).then((b)=>setCat(b))
    },[])
  return (
    < >
      <section className='container py-3'>
            <div className="row">
                <div className="col-lg-3">
                    <div className="shadow p-2 leftcat">
                  <ul className="list-group list-group-flush">
                    {cat.map((a)=>(
 <li className="list-group-item" key={a.slug}>
    <Link to={`/cat/${a.slug}`} className='link-dark'>
    {a.name}
    </Link>
    </li>
                    ))}
 
</ul>

                    </div>
                </div>
                <div className="col-lg-9">
                <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slider.map((a)=>(
            <SwiperSlide>
                <img className='w-100' src={a} alt="" />
            </SwiperSlide>
        ))}
        
         
      </Swiper>
                </div>
            </div>
      </section>
      <ProductBYCat tt="beauty"/>
      <ProductBYCat tt="fragrances"/>
      <ProductBYCat tt="furniture"/>
      <ProductBYCat tt="groceries"/>
    </ >
  )
}

export default Home

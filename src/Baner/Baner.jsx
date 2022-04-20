import React, { useState ,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Slider from "react-slick";

import './Baner.css'
const Baner = () => {

const allPro= useSelector(state=>state.counterstore.Products)
const [arr,setarr]=useState([])

useEffect(()=>{
  var baner =[]
  for (let i = 0; i < 5; i++) {
    baner=baner.concat(allPro[i].image)
   
   }setarr(baner)},[])
console.log(arr)

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:4000,
  pauseOnHover: true
};


return (
 
    <Slider {...settings}>
      
        {arr.map((item,index)=>{return( 
          <div className='banner-image' key={index}><img src={item} alt='ff'/></div>
        )})}
         </Slider>
 
);}
export default Baner
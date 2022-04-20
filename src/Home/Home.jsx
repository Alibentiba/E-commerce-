import React from 'react'
import {useSelector} from 'react-redux'
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Product from '../product/Product'
import Baner from '../Baner/Baner'
const Home = () => {
const Pro= useSelector(state=>state.counterstore.catAll)
  return (
      <div className='home-page'>
      <Navbar/>
      <div className='home-image'>
      < img src="https://challenge-6431c.web.app/static/media/homepage-hero.37e38a1c.jpg" alt="Home" />
      </div>
     
     <Baner/>

    {Pro.map((product)=>{return (<div className='product-row' key={product.id}><Product {...product} /></div>)})}  
  
      
 </div>


  )
}

export default Home
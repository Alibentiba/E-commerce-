import React from 'react'
import {useSelector} from 'react-redux'
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Product from '../product/Product'
import  Category from '../Category/Category'

const Home = () => {
const Pro= useSelector(state=>state.counterstore.catAll)
  return (
      <div className='home-page'>
      <Navbar/>
   
     < img className='home-image'src="https://challenge-6431c.web.app/static/media/homepage-hero.37e38a1c.jpg" alt="Home" />
     
    { 
    Pro.map((product)=>{
       return (<div className='product-row' key={product.id}>
        <Product {...product} />
      </div>)
   })}  
  
      
 </div>


  )
}

export default Home
import React from 'react'
import "./Checkout.css"
import Navbar from '../Navbar/Navbar'
import {useSelector ,useDispatch} from 'react-redux'
import { FaStar } from "react-icons/fa"
import { RemovCart } from "../Slic"

import Totalbill from '../Totalbill/Totalbill'


const Checkout = () => {

  const cart = useSelector(state=> state.counterstore.cart)
  const dispatch = useDispatch()
  return (
    <div className='checkout'>
    <Navbar/>
  
    <div className='checkout-hader'>
      
    <div className='checkout-after-hader'>
      
    <img alt='checl' className='checkout-after-hader-img' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>

    {cart.map((item,index) => {
    const {id,title,price,description,category,image,rating}=item
    return (
     <div className='checkout-product'> 

    <img src={image} alt={title}  className="checkout-product-image"/>
     <div className='checkout-product-info'>
      <p className='checkout-product-title'>{title}</p>
     <p className='checkout-product-prix'>{price}$</p>
     <div className="stars">
       
    {Array(5).fill().map((_, index) => { return <FaStar className="star" />; })}

    </div>
    <button className='remov-button' onClick={() =>{
      dispatch(RemovCart(item))}}>Remov Product</button> </div> </div>)} )} 
    </div>
   <Totalbill/>
  
    </div>

    
</div>)


  }
  export default Checkout;
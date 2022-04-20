import React from 'react'
import "./product.css"
// import {logo} from "./../logo.jpg"
import { addCart } from "../Slic"
import { FaStar } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
const Product = ({ id, title, price, description, category, image,rating}) => {

console.log(rating) 
 const dispatch = useDispatch()
 
  const item={id,title,price,description,category,image,rating}

  return (
    <div className='product1'>

     <div className='product-image'>
     <img  src={image} alt="Home" />
     </div>
        

        <div className='product-info'>
          <p>{title}</p>
          <h4>${price}</h4>
          <button className='add-product-basket' onClick={() => dispatch(addCart(item))}>Add to basket</button>
          <div className="stars">
          {Array(parseInt(rating.rate)).fill().map((_, i) => { return <FaStar key={i} className="star" />; })}

          </div>
        </div>
      
    </div>
  )
}

export default Product
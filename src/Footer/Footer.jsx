import React from 'react'
import {FaDolly} from 'react-icons/fa'
import {useSelector } from 'react-redux'
import "./Footer.css"
import {Link} from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BiMessageSquareDots,BiHomeSmile} from 'react-icons/bi'
const Footer = () => {
  const cart = useSelector(state=> state.counterstore.cart)
  return (
    <div className='footer'>
        <div className='footer-Links'>
        <Link to="/Login" className='footer-link'>
            <div className='footer-option'>
            <BiHomeSmile className='footer-icon'/>
            <span>Home</span>
          </div>
          </Link>
          <Link to="/Login" className='footer-link'>
            <div className='footer-option'>
            <AiOutlineUser className='footer-icon'/>
            <span>Sing in</span>
          </div>
          </Link>
          <Link to="/" className='footer-link'>
            <div className='footer-option'> 
            <BiMessageSquareDots className='option-icon'/>    
            <span>Messages</span>
          </div>
          </Link>
          <Link to="/" className='footer-link'>
            <div className='footer-option'> 
            <FaDolly className='option-icon'/>    
            <span>Orders</span>
          </div>

          </Link>

          {/* <Link to="/Checkout" className='footer-link' >
            <div className='footer-option'>
            <span className='span-cart2'>{cart.length}</span>
            <FiShoppingCart className='option-icon icon-cart'/>
            <span className='span-cart'>Cart</span>
            </div>
          </Link> */}

         </div>

         </div>
  )
}

export default Footer
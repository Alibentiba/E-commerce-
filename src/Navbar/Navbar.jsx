import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {useSelector } from 'react-redux'
import "./Navbar.css"
import Category from "../Category/Category"
import {Link} from 'react-router-dom'
import LogoStore from "./LogoStore.png"
import {BiCamera} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'


const Navbar = () => {
  const cart = useSelector(state=> state.counterstore.cart)
  return (
    <div className='header'>
        <Link to="/" className='header-logo'>
        <p > MYSTORE</p>
        
        </Link>
       
        <div className='sarch'>
        <input type="text" className='search-input' placeholder="What are you looking for..."/>
       <BiCamera className='sarch-BiCamera'/>
        <button className='sarch-button'> <AiOutlineSearch className='search-icon'/>Search</button>
        </div>





        <Category/>

        <div className='headrs-Links'>
          <Link to="/Login" className='header-link'>
            <div className='Singin'>
            <AiOutlineUser className='AiOutlineUser-Singin'/>
          <span>Sing in</span>
          </div>
          </Link>

    
          <Link to="/" className='header-link'>
            <div className='header-option'>
              
          <span>Your Prime</span>
          
          </div>
          </Link>

          <Link to="/Checkout" >
            <div className='header-baskat'>
           <FaShoppingCart className='header-baskat-icon'/>
           <span className='header-option2 basket-count'>{cart.length}</span>
           </div>
          </Link>

         </div>

         </div>
  )
}

export default Navbar
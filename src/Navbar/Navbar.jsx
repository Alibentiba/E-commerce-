import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaDolly} from 'react-icons/fa'
import {useSelector } from 'react-redux'
import "./Navbar.css"
import Category from "../Category/Category"
import {Link} from 'react-router-dom'
// import LogoStore from "./LogoStore.png"
import {BiCamera,BiMessageSquareDots} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart4} from 'react-icons/bs'


const Navbar = () => {
  const cart = useSelector(state=> state.counterstore.cart)
  return (
    <div className='header'>
        <Link to="/" className='header-logo'>
        <span> NazaStor<p>.com</p></span>
        
        </Link>
       
        <div className='sarch'>
        <input type="text" className='search-input' placeholder="What are you looking for..."/>
       <BiCamera className='sarch-BiCamera'/>
       <AiOutlineSearch className='search-icon'/>
        <button className='sarch-button'>Search</button>
        </div>



<div className='header-category'>
<Category/>
</div>

        

        <div className='headrs-Links'>

          <Link to="/Login" className='header-link'>
            <div className='header-option'>
            <AiOutlineUser className='option-icon'/>
            <span>Sing in</span>
          </div>
          </Link>

    
          <Link to="/" className='header-link'>
            <div className='header-option'> 
            <BiMessageSquareDots className='option-icon'/>    
            <span>Messages</span>
          </div>
          </Link>
          <Link to="/" className='header-link'>
            <div className='header-option'> 
            <FaDolly className='option-icon'/>    
            <span>Orders</span>
          </div>
          </Link>

          <Link to="/Checkout" className='header-link' >
            <div className='header-option'>
            <span className='span-cart'>{cart.length}</span>
            <BsCart4 className='option-icon'/>
            
            </div>
          </Link>

         </div>

         </div>
  )
}

export default Navbar
import {AiOutlineSearch} from 'react-icons/ai'
import {FaDolly} from 'react-icons/fa'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import {BiCamera,BiMessageSquareDots} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart4} from 'react-icons/bs'
import React, {useEffect} from 'react'
import {signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { getAuth} from "firebase/auth";
import { useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setUserLoginDetails,setSignOutState} from '../Slic'
import {BiHomeSmile} from 'react-icons/bi'

const Navbar = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
    const userName = useSelector(state=>state.counterstore.userinfo.name);
  const userPhoto = useSelector(state=>state.counterstore.userinfo.photo );
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        
      }
    });
  }, [userName]);
  
  const handleAuth = () => {
    if (!userName) {
          const auth = getAuth();
          signInWithPopup(auth, provider)
            .then((result) => {
          
              setUser(result.user);
              history("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
                })
        .catch((err) => alert(err.message));
    }
  };
  
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };






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

        <div className='headrs-Links'>
          
        <Link to="/" className='header-link home'>
            <div className='header-option'>
            <BiHomeSmile className='header-icon'/>
            <span>Home</span>
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
      
          <Link to="/Checkout" className='header-link bas'>
            <div className='header-option'>
            <span className='span-cart'>{cart.length}</span>
            <BsCart4 className='option-icon Cart'/>
            </div>
          </Link>

          <Link to="/"  className='header-link'>

          {!userName ? (
            <div className='header-option' onClick={handleAuth} >
            <AiOutlineUser className='option-icon'/>
            <span>Sing in</span>
            </div>
            ):
              (<div  className='header-option'>
                <img className='option-icon userphoto'  onClick={handleAuth} src={userPhoto} alt="user"   /></div>)}
              </Link>

         </div>

         </div>
  )
}

export default Navbar
// import {  } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import Home from './Home/Home';
import Product from './product/Product';
import Checkout from "./Checkout/Checkout"
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Show from './Footer/Footer';
import Footer from './Footer/Footer';
import './App.css'
import Category from './Category/Category';
 const App = () => {
  return (
 <Router>
 
      <div className='App'>
      {/* <Navbar/>
      <Category/> */}
        <Routes>
          <Route path ='/Checkout' element={<Checkout/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes >
        

      </div>
       </Router> 








  )
}

export default App;






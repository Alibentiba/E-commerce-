// import {  } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import Home from './Home/Home';
import Product from './product/Product';
import Checkout from "./Checkout/Checkout"
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
 const App1 = () => {
  return (
 <Router>
  <Navbar/>
      <div className='app'>
        {/* <Routes>
          <Route path ='/Checkout' element={<Checkout/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes > */}
   
      </div>
       </Router> 








  )
}

export default App1;






// import {  } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import Home from './Home/Home';
import Product from './product/Product';
import Checkout from "./Checkout/Checkout"
import Login from './Login/Login';
 const App1 = () => {
  return (
 <Router>
      <div className='app'>
        <Routes>
          <Route path ='/Checkout' element={<Checkout/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes >
   
      </div>
       </Router> 








  )
}

export default App1;






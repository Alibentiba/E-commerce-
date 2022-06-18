// import {  } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import Home from './Home/Home';
import Checkout from "./Checkout/Checkout"
import Login from './Login/Login';

import './App.css'
 const App = () => {
  return (
 <Router>
 
      <div className='App'>
  
        <Routes>
          <Route path ='/Checkout' element={<Checkout/>}/>
          {/* <Route path='/Login' element={<Login/>}/> */}
          {/* <Route path='/Home' element={<Home/>}/> */}
          <Route path='/' element={<Home/>}/>
        </Routes >
        

      </div>
       </Router> 








  )
}

export default App;






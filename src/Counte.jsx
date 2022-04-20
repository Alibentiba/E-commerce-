import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCart} from "./Slic"
 const Counte = () => {

const cart= useSelector(state=> state.counterstore.cart)
const dispatch=useDispatch()

  return (

    <div>
         <button onClick={()=>dispatch(addCart('kkkk'))}>ADD</button> 
        {cart && 
          cart.map((item,index)=><p key={index}>{item}</p>)
        }

    </div>
  )}
  export default Counte
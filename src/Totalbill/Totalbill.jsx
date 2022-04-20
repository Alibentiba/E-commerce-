import { Call } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import "./Totalbill.css"
import Category from '../Category/Category'
const Totalbill = () => {
const cartt = useSelector(state=> state.counterstore.cart)
// const len = useSelector(state=> state.counterstore.len)
const [total,setTotal]=useState(0)
// const [categorys,setcategory]=useState([])
useEffect(()=>{
  var somme=0;
  
  cartt.forEach((i)=>{somme+=i.price ; })
  setTotal(somme)},[cartt])
  return(
    <div className='Totalbill'>
    <p>-Total price is :{total} $</p>
    <p>-Total itmes :{cartt.length}</p>

    
    </div>)
}
export default Totalbill;
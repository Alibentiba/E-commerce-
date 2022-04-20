import React, { useState ,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import "./Category.css"
import { selecat } from "../Slic"
// import "./Baner.css"

const Category = () => {

const Pro= useSelector(state=>state.counterstore.Products)
const [categorys,setcategorys]=useState([])


    useEffect(()=>{
      var cat =[]
      for (let i = 0; i < Pro.length; i++) {
        cat=cat.concat(Pro[i].category)
       var catAll=['all',...new Set(cat)]; 
       }setcategorys(catAll)},[])
  
    const dispatch = useDispatch()
    



  return (   

     <ul className='Catgory'>

      <li className='Catgory-title'>
      <a href="#">Dropdown Link</a>
      <ul> 
      {categorys.map((item,index)=>{
      return (
         <div key={index} className='Category-elements'>
        <li   onClick={() => dispatch(selecat(item))}>{item}</li>
        </div>)})}



       </ul>
     </li>

  </ul>







     
    
  
  )}

  export  default Category
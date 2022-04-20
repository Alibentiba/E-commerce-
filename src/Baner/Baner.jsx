import React, { useState ,useEffect} from 'react'
import {useSelector} from 'react-redux'
import './Baner.css'
const Baner = () => {

const Pro= useSelector(state=>state.counterstore.catAll)
const allPro= useSelector(state=>state.counterstore.Products)
const [arr,setarr]=useState([])

useEffect(()=>{
  var baner =[]
  for (let i = 0; i < 5; i++) {
    baner=baner.concat(Pro[i])
   
   }setarr(baner)},[])

console.log(arr)

  return (
<div>
{
  arr.map(item=>{
return <div className='baner' key={item.id}>
  <img src={item.image} alt="" />
</div>


  })
}
</div>
    
  )
}

export default Baner
import React, { useState ,useEffect} from 'react'
import {useSelector} from 'react-redux'

const Baner = () => {

const Pro= useSelector(state=>state.counterstore.catAll)
const allPro= useSelector(state=>state.counterstore.Products)
const [arr,setarr]=useState([])

allPro.sort((a, b) => {return a.arting.rate - b.arting.rate;});

allPro.forEach((e) => {console.log(`${e.arting.rate} ${e.arting.rate} ${e.arting.rate}`);});


  return (
    <div>










    </div>
  )
}

export default Baner
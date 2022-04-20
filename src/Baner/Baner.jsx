import React, { useState ,useEffect} from 'react'
import {useSelector} from 'react-redux'

const Baner = () => {

const Pro= useSelector(state=>state.counterstore.catAll)
const allPro= useSelector(state=>state.counterstore.Products)
const [arr,setarr]=useState([])





  return (
    <div>










    </div>
  )
}

export default Baner
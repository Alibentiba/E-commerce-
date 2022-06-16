import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { useStore } from "react-redux";
import Products from "./Products";
export const Slic = createSlice({
    name: "counter",
    initialState: {
        cart:[],totale: 0, Products: Products,catAll:Products,userinfo:{
            name: "",
            email: "",
            photo: ""}
    },
    reducers: {
        addCart: (state, action) => {
            const newCart = [...state.cart, action.payload]
            const ss = state.totale + action.payload.price
            return { ...state, cart: newCart, totale: ss }
        },

        lengthcart: (state, action) => {
            const len = state.cart.length
            return len
        },

        RemovCart: (state, action) => {

            const newcart=state.cart.filter(item=>item.id!==action.payload.id)
            const ss = state.totale - action.payload.price
            return {...state,cart:newcart,totale:ss}}
            , 
            setUserLoginDetails: (state, action) => {
                state.userinfo.name = action.payload.name;
                state.userinfo.email = action.payload.email;
                state.userinfo.photo = action.payload.photo;
              },
          
              setSignOutState: (state) => {
                state.userinfo.name = null;
                state.userinfo.email = null;
                state.userinfo.photo = null;
              }
    
 
          ,
         selecat:(state, action) => {
            if(action.payload=="all"){ state.catAll=state.Products}
              else{var cat =[]
                 for (let i = 0; i < Products.length; i++) {
                    var Pro=state.Products.filter(item=>item.category==action.payload )
                            state.catAll=Pro}}}


    }
})
export const { addCart, lengthcart, RemovCart,selecat,setUserLoginDetails,setSignOutState } = Slic.actions
export default Slic.reducer
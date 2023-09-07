import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const initialState={
cart:[]

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchCart: (state,action) => {
      state.cart = action.payload
      
       
    },


  
  },

});

export const { fetchCart } = cartSlice.actions;
export const selectcart = (state) => state.cart;
export default cartSlice.reducer;

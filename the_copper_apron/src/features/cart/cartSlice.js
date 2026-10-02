import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    value: []
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItems = state.value.find(item => item.id === action.payload.id);
      const existingItems2 = state.value.filter(item => item.id === action.payload.id);
      if(existingItems){
        existingItems.quantity += 1;
        const grandTotal = existingItems.price * existingItems.quantity
        existingItems.grandTotal = grandTotal
      }
      else{
        state.value.push({ ...newItem, quantity: 1, grandTotal: newItem.price });
      }
    },

    addQuantity: (state, action) => {
      const existingItems = state.value.find(item => item.id === action.payload);
      if(existingItems){
        if(existingItems.quantity >= 1){
          existingItems.quantity += 1;
          existingItems.grandTotal = existingItems.quantity * existingItems.price
        }
      }
    },

    subQuantity: (state, action) => {
      const existingItems = state.value.find(item => item.id === action.payload);
      if(existingItems){
        if(existingItems.quantity > 1){
          existingItems.quantity -= 1;
          existingItems.grandTotal = existingItems.quantity * existingItems.price
        }
      }
    }

    // updateItemQuantity: (state, action) => {
    //   const {id} = action.payload;
    //   const item = state.value.find((item)=> item.id === id);
    //   if(item){
    //     item.quantity += 1;
    //   }
    // }

  },
});

export const {addToCart, addQuantity, subQuantity} = cartSlice.actions

export default cartSlice.reducer
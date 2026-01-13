import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carItem: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    AllProducts: (state, action) => {
      let findIndex = state.carItem.findIndex((item) => item.id === action.payload.id)
      if (findIndex !== -1) {
        state.carItem[findIndex].quantity++
      } else {
        state.carItem = [...state.carItem, action.payload]
      }
    },
    RemoveItem: (state, action) => {
      let filtered = state.carItem.filter((item) => item.id !== action.payload)
      state.carItem = filtered
    },
    increaseQuantity: (state, action) => {
      let findIndex = state.carItem.findIndex((item) => item.id === action.payload)
      if (findIndex !== -1) {
        state.carItem[findIndex].quantity++
      }
    },
    decreaseQuantity: (state, action) => {
      let findIndex = state.carItem.findIndex((item) => item.id === action.payload)
      if (findIndex !== -1 && state.carItem[findIndex].quantity > 1) {
        state.carItem[findIndex].quantity--
      }
    },
    clearCart: (state) => {
      state.carItem = []
    },
  },
})

export const { AllProducts, RemoveItem, increaseQuantity, decreaseQuantity, clearCart } = productSlice.actions

export default productSlice.reducer
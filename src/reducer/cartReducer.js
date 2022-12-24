import { createSlice } from "@reduxjs/toolkit";
export const cartReducer = createSlice({
  name: "cartReducer",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { addToCart } = cartReducer.actions;
export default cartReducer.reducer;

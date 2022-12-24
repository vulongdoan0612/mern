import { createSlice } from "@reduxjs/toolkit";
export const pizzaReducer = createSlice({
  name: "pizzaReducer",
  initialState: {
    request: false,
    failed: false,
    success: [],
  },
  reducers: {
    GetPizzaRequest: (state) => {
      state.request = { ...state };
    },
    GetPizzaSuccess: (state, action) => {
      state.request = false;
      state.success = action.payload;
    },
    GetPizzaFailed: (state, action) => {
      state.request = false;
      state.failed = action.payload;
    },
  },
});
export const { GetPizzaRequest, GetPizzaSuccess, GetPizzaFailed } =
  pizzaReducer.actions;
export default pizzaReducer.reducer;

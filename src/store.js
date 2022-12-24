// phải tạo store trong Redux ( bắt buộc )
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";
import pizzaReducer from "./reducer/pizzaReducer";

export default configureStore({
  reducer: {
    //đặt tên user, userReducer từ thằng userSlice, userReducer mún đặt tên gì cũng được
    pizzaReducer: pizzaReducer,
    cartReducer: cartReducer,
  },
});

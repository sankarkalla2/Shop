import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux.js"
import userReducer from './userRedux.js'

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  }
})

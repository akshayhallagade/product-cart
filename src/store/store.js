import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import cartReducer from "../reducers/cartReducer";

export default configureStore({
  reducer: { products: productReducer, cart: cartReducer },
});

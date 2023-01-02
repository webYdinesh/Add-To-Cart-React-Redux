import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slices/ProductsSlice";

const Store = configureStore({
  reducer: {
    ProductsReducer,

  },
});

export default Store

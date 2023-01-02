import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "All Products",
  initialState: {
    products: [],
    cartProduct: [],
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    getProduct: (state, action) => {
      //to find which item is clicked
      const cartItem = state.cartProduct.find((ele) => {
        return ele.id === action.payload;
      });

      //to extract item details of which item selected
      const itemDetail = state.products.find((ele) => {
        return ele.id === action.payload;
      });

      //increase qty if it already present
      if (cartItem) {
        cartItem.quantity += 1;
        return;
      }

      //if not present this object will push in cartPoduct
      state.cartProduct.push({
        quantity: 1,
        id: action.payload,
        itemDetail,
      });
    },
    removeProduct: (state, action) => {
      const item = state.cartProduct.find((ele) => {
        return ele.id === action.payload;
      });
      if (item) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          state.cartProduct = state.cartProduct.filter((ele) => {
            return ele.id !== action.payload;
          });
        }
      }
    },
  },
});

export default ProductSlice.reducer;
export const { fetchProducts, getProduct, removeProduct } =
  ProductSlice.actions;

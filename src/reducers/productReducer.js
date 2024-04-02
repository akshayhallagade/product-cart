import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = counterSlice.actions;

export default counterSlice.reducer;

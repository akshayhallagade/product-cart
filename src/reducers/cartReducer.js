import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      if (!state.cart.hasOwnProperty(action.payload.id)) {
        state.cart[action.payload.id] = 1;
        state.total += Number(action.payload.price);
        state.total = Number(state.total.toFixed(2));
      }
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload.id] += 1;
      state.total += Number(action.payload.price);
      state.total = Number(state.total.toFixed(2));
    },
    decreaseQuantity: (state, action) => {
      if (state.cart[action.payload.id] > 1) {
        state.cart[action.payload.id] -= 1;
        state.total -= Number(action.payload.price);
        state.total = Number(state.total.toFixed(2));
      }
    },
    removeItem: (state, action) => {
      state.total -=
        Number(state.cart[action.payload.id]) * Number(action.payload.price);
      state.total = Number(state.total.toFixed(2));
      delete state.cart[action.payload.id];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  counterSlice.actions;

export default counterSlice.reducer;

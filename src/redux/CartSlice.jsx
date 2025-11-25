// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push({ ...action.payload, qty: 1 });
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },

//     increaseQty: (state, action) => {
//       const item = state.items.find((i) => i.id === action.payload);
//       if (item) item.qty++;
//     },

//     decreaseQty: (state, action) => {
//       const item = state.items.find((i) => i.id === action.payload);
//       if (item && item.qty > 1) item.qty--;
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   increaseQty,
//   decreaseQty
// } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, qty: 1 });
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty++;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty--;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty
} = cartSlice.actions;

export default cartSlice.reducer;

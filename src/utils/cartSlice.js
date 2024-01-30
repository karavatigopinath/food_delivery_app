const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;

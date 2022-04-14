
import { createSlice } from "@reduxjs/toolkit";

export const addBubbleSlice = createSlice({
  name: "addbubble",
  initialState: {
    value: {},
    order: 0
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    setOrder: (state) => {
      state.order += 1
    }
  }
});

// Action creators are generated for each case reducer function
export const { add, setOrder } = addBubbleSlice.actions;

export default addBubbleSlice.reducer;

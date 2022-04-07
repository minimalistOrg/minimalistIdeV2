
import { createSlice } from "@reduxjs/toolkit";

export const addBubbleSlice = createSlice({
  name: "addbubble",
  initialState: {
    value: {},
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { add } = addBubbleSlice.actions;

export default addBubbleSlice.reducer;

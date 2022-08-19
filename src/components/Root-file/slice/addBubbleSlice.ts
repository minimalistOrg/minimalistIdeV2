import { createSlice } from "@reduxjs/toolkit";

export const addBubbleSlice = createSlice({
  name: "addbubble",
  initialState: {
    value: {},
    order: 0,
  },
  reducers: {
    addBubbles: (state, action) => {
      state.value = action.payload;
    },
    setOrder: (state) => {
      state.order += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBubbles, setOrder } = addBubbleSlice.actions;

export default addBubbleSlice.reducer;

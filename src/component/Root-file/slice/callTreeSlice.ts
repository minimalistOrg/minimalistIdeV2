import { createSlice } from "@reduxjs/toolkit";

export const callTreeSlice = createSlice({
  name: "callTree",
  initialState: {
    value: true,
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = callTreeSlice.actions;

export default callTreeSlice.reducer;

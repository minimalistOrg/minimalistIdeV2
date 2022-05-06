import { createSlice } from "@reduxjs/toolkit";

export const callTreeSlice = createSlice({
  name: "callTree",
  initialState: {
    value: true,
    close: false,
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    setclose: (state, action) => {
      state.close = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, setclose } = callTreeSlice.actions;

export default callTreeSlice.reducer;

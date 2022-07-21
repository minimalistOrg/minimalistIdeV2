import { createSlice } from "@reduxjs/toolkit";

export const callTreeSlice = createSlice({
  name: "callTree",
  initialState: {
    value: true,
    close: false,
    sidebar: 0
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    setclose: (state, action) => {
      state.close = action.payload;
    },
    setsidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, setclose, setsidebar } = callTreeSlice.actions;

export default callTreeSlice.reducer;

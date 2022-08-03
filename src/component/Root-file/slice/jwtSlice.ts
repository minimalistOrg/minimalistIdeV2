import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwt",
  initialState: {
    key: "",
    url_api:  "http://localhost:5000",//"https://minimalistide.herokuapp.com",
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKey } = jwtSlice.actions;

export default jwtSlice.reducer;

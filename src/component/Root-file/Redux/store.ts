import { configureStore } from "@reduxjs/toolkit";
import addBubbleSlice from "../slice/addBubbleSlice";
import callTreeSlice from "../slice/callTreeSlice";
import jwtSlice from "../slice/jwtSlice";


export default configureStore({
  reducer: {
    addbubble: addBubbleSlice,
    callTree: callTreeSlice,
    jwt: jwtSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["addbubble/add"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["addbubble.value"],
      },
    }),
});

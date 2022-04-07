import { configureStore } from "@reduxjs/toolkit";
import addBubbleSlice from "../slice/addBubbleSlice";

export default configureStore({
  reducer: {
    addbubble: addBubbleSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["addbubble/add"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["addbubble.value.add"],
      },
    }),
});

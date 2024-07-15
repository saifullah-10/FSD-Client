import { configureStore } from "@reduxjs/toolkit";
import registerRoleReducer from "./features/registerRoleSlice.js";

export const store = configureStore({
  reducer: {
    // Define your reducers here
    registerRole: registerRoleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Define your middleware here
    }),
  // devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in production
});

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Define your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Define your middleware here
    }),
  // devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in production
});

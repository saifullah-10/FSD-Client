import { configureStore } from "@reduxjs/toolkit";
import registerRoleReducer from "./features/registerRoleSlice.js";
import { userApi } from "./services/userApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // Define your reducers here
    registerRole: registerRoleReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  // devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in production
});

setupListeners(store.dispatch);

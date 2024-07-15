import { createSlice } from "@reduxjs/toolkit";

export const registerRoleSlice = createSlice({
  name: "registerRole",
  initialState: {
    role: "",
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = registerRoleSlice.actions;

export default registerRoleSlice.reducer;

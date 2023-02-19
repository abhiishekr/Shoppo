import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "userLogin",
  initialState: {
    userLogin: false
  },
  reducers: {
    userLogin: (state,action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;

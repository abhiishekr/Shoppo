import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    user: (state,action) => {
      state.user = action.payload;
    },
  },
});

export const { user } = userSlice.actions;
export default userSlice.reducer;

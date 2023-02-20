import { createSlice } from "@reduxjs/toolkit";

export const updatedSlice = createSlice({
  name: "updated",
  initialState: {
    updated: false
  },
  reducers: {
    updated: (state,action) => {
      state.updated = action.payload;
    },
  },
});

export const { updated } = updatedSlice.actions;
export default updatedSlice.reducer;
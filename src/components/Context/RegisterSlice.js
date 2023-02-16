import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  name:"userLogin",
  initialState:{
    userLogin:false
  },
  reducers: {
    user: (state,action) => {
      state.user = action.payload;
    },
    userLogin:(state,action)=>{
      state.userLogin=action.payload;
    }
  },
});

export const { user,userLogin } = userSlice.actions;
export default userSlice.reducer;

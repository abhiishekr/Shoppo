import { createSlice } from "@reduxjs/toolkit";
import { GetSingleCall, PatchCall } from "../../Backend/API/APICalls";

export const updatedSlice = createSlice({
  name: "updated",
  initialState: {
    data: null,
  },
  reducers: {
    recieveProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const fetchProduct = (id) => async (dispatch) => {
  const data = await GetSingleCall(id);
  dispatch(recieveProduct(data));
};
export const states = (state) => state.updated.data;
export const patchProduct=(id)=> async (dispatch)=> {
  const temp= await PatchCall(id);
  console.log(temp)
}
export const { updateProduct, recieveProduct } = updatedSlice.actions;
export default updatedSlice.reducer;

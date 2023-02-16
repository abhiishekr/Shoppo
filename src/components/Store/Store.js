import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Context/RegisterSlice"

export default configureStore({
    reducer:{
        user: userReducer
    }
})
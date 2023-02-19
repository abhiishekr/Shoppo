import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../Context/LoginSlice";
import userReducer from "../Context/RegisterSlice"

export default configureStore({
    reducer:{
        user: userReducer,
        userLogin: userLoginReducer
    }
})
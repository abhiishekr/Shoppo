import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../Context/LoginSlice";
import userReducer from "../Context/RegisterSlice";
import updatedReducer from "../Context/UpdateSlice";

export default configureStore({
    reducer:{
        user: userReducer,
        userLogin: userLoginReducer,
        updated:updatedReducer
    }
})
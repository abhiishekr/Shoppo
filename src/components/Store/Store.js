import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Context/RegisterSlice";
import updatedReducer from "../Context/UpdateSlice";

export default configureStore({
    reducer:{
        user: userReducer,
        updated:updatedReducer
    }
})
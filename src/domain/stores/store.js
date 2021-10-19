import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../slices/loginSlice";
import { userSlice } from "../slices/userSlice";
import { loaderSlice } from "../slices/loaderSlice";


const store=configureStore({
    reducer:{loginReducer:loginSlice.reducer,userReducer:userSlice.reducer,loaderReducer:loaderSlice.reducer}
});

export default store;
export const loginActions=loginSlice.actions;
export const userActions=userSlice.actions;
export const loaderActions=loaderSlice.actions;
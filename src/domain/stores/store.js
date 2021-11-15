import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../slices/loginSlice";
import { userSlice } from "../slices/userSlice";
import { loaderSlice } from "../slices/loaderSlice";
import { feedSlice } from "../slices/feedSlice";

const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    userReducer: userSlice.reducer,
    loaderReducer: loaderSlice.reducer,
    feedReducer: feedSlice.reducer,
  },
});

export default store;
export const loginActions = loginSlice.actions;
export const userActions = userSlice.actions;
export const loaderActions = loaderSlice.actions;
export const feedActions = feedSlice.actions;

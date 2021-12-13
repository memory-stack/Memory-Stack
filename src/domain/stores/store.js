import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "../slices/loaderSlice";
import { feedSlice } from "../slices/feedSlice";

const store = configureStore({
  reducer: {
    loaderReducer: loaderSlice.reducer,
    feedReducer: feedSlice.reducer,
  },
});

export default store;
export const loaderActions = loaderSlice.actions;
export const feedActions = feedSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { feedInitState } from "../initState/feedInitState";
import { feedReducer } from "../reducers/feedReducer";

export const feedSlice = createSlice({
  name: "feedSlice",
  initialState: feedInitState,
  reducers: feedReducer,
});

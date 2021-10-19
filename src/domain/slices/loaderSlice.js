import { createSlice } from "@reduxjs/toolkit";
import { loaderInitState } from "../initState/loaderInitState";
import { loaderReducer } from "../reducers/loaderReducer";

export const loaderSlice=createSlice({
    name:'loaderSlice',
    initialState:loaderInitState,
    reducers:loaderReducer
})
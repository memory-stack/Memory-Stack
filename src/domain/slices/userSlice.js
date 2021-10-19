import { createSlice } from "@reduxjs/toolkit";
import { userInitState } from "../initState/userInitState";
import { userReducer } from "../reducers/userReducer";

export const userSlice=createSlice({
    name:'userSlice',
    initialState:userInitState,
    reducers:userReducer
})
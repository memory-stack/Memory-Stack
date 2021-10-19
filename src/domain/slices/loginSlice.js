import { createSlice } from "@reduxjs/toolkit";
import { loginInitState } from "../initState/loginInitState";
import { loginReducer } from "../reducers/loginReducer";

export const loginSlice = createSlice({
    name:'loginSlice',
    initialState:loginInitState,
    reducers:loginReducer,
});
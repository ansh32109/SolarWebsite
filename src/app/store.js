import { configureStore } from "@reduxjs/toolkit";
import authReducer from './../features/loginSlice'

export const store = configureStore({
    reducer: authReducer
})
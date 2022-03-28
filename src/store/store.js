import {configureStore, combineReducers} from "@reduxjs/toolkit";
import todoSlice from "../reducers/todoSlice";

const rootReducer = combineReducers({
    oneSlice: todoSlice,
})



export const store = configureStore({
    reducer: rootReducer
})

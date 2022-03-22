import {configureStore, combineReducers} from "@reduxjs/toolkit";

import tSlice from "../reducers/tSlice";


const rootReducer = combineReducers({
    toolkit: tSlice,
})



export  const store = configureStore({
reducer: rootReducer,
})
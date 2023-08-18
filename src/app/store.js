import { configureStore } from '@reduxjs/toolkit';
import appManagerReducer from "./appManagerSlice"

export const store = configureStore({
    reducer: {
        appManager: appManagerReducer,

    },
});
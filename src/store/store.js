import { configureStore } from '@reduxjs/toolkit';
import appManagerReducer from "../features/appManagerSlice"

export const store = configureStore({
    reducer: {
        appManager: appManagerReducer,
      
    },
  });
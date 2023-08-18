import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: 0,
  isDarkTheme: false,
};
export const appManagerSlice = createSlice({
  name: "appManager",
  initialState,
  reducers: {
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },

    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },

  },
});

//export actions
export const { setScreenMode, toggleTheme } = appManagerSlice.actions;

//export data
export const selectScreenMode = (state) => state.appManager.screenMode;
export const selectIsDarkTheme = (state) => state.appManager.isDarkTheme;

export default appManagerSlice.reducer;

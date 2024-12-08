import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: "",
};

export const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      setTheme: (state, action) => {
         state.value = action.payload;
      }
   },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
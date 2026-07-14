import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
    background: "white",
    color: "black",
  },
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        state.background = "black";
        state.color = "white";
      } else {
        state.mode = "light";
        state.background = "white";
        state.color = "black";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeStore = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
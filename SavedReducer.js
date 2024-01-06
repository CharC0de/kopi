import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "coffee",
  initialState: {
    coffee: [],
  },
  reducers: {
    savedCoffee: (state, action) => {
      state.coffee.push({ ...action.payload });
    },
  },
});

export const { savedCoffee } = SavedSlice.actions;

export default SavedSlice.reducer;

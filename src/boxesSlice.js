import { createSlice } from "@reduxjs/toolkit";

const initialState = { currIndex: 0 };

const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    next: state => {
      state.currIndex++;
    },
    prev: state => {
      state.currIndex--;
    }
  }
});

export const { next, prev } = boxesSlice.actions;
export default boxesSlice.reducer;

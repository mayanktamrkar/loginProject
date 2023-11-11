// redux/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";
interface IInitailState {
  value: number;
}
const initialState: IInitailState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// export const exampleActions = { ...counterSlice.actions }
export const {increment,decrement} = {...counterSlice.actions}

export default counterSlice.reducer;

// redux/store.js
// you have to import your reducer 

import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./reducer/example.reducer";

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export default store;

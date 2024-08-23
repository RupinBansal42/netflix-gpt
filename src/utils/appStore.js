import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
// Store takes configuration, it will have reducer from different slices
const appStore = configureStore({
  reducer: {
    user : useReducer,
  },
});



export default appStore;

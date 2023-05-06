import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

const reducer = combineReducers({
  // here we will be adding reducers
})
export const store = configureStore({
  reducer,
});

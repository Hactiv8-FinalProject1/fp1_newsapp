import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../features/articleSlice";
import searchSlice from "../features/reduser/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    article : articleReducer,
  },
});

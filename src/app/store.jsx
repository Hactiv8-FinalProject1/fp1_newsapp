import { configureStore } from "@reduxjs/toolkit";
import covid19Reducer from "../features/reduser/covid19";
import indonesiaReducer from "../features/reduser/indonesia";
import programmingReducer from "../features/reduser/programming";

export const store = configureStore({
  reducer: {
    covid19 : covid19Reducer,
    indonesia : indonesiaReducer,
    programming : programmingReducer,
  },
});

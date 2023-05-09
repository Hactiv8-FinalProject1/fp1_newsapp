import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  search: "",
  result: [],
  isFetchPending: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeacrh.pending, (state, action) => {
        state.isFetchPending  = true;
      })
      .addCase(getSeacrh.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.result = action.payload;
        // console.log(action.payload);
      })
      .addCase(getSeacrh.rejected, (state, action) => {
        state.isFetchPending = false;
        console.log("error", action.error.message);
      });
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;

export const getSeacrh = createAsyncThunk(
  "search/getSeacrh",
  async (search) => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_URL}everything?q="${search}"&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      return resp.data.articles;
    } catch (error) {
      console.log(error);
    }
  }
);

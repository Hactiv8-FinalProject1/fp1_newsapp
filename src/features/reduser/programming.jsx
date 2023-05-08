import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    programming: null,
    isLoading: false,
};

const programmingSlice = createSlice({
    name: "programming",
    initialState,
    reducers: {
        setProgramming: (state, action) => {
            state.programming = action.payload;
        },
        resetProgramming: (state) => {
            state.programming = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProgramming.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProgramming.fulfilled, (state, action) => {
                state.isLoading = false;
                state.programming = action.payload;
                // console.log(action.payload);
            })
            .addCase(getProgramming.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export const { setProgramming, resetProgramming } = programmingSlice.actions;
export default programmingSlice.reducer;

export const getProgramming = createAsyncThunk("programming/getProgramming", async () => {
    try {
        const date = new Date();
        const fromDate = new Date().toISOString();
        const monthAgo = new Date(date.setMonth(date.getMonth() - 1)).toISOString();
        // console.log('hari ini : ', fromDate, 'sebulan yang lalu : ', monthAgo);
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}everything?q=programming&from=${monthAgo}&to=${fromDate}&sortBy=publishedAt&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response);
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});

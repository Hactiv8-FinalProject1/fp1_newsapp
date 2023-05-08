import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    covid19: null,
    isLoading: false,
};

const covid19Slice = createSlice({
    name: "covid19",
    initialState,
    reducers: {
        setCovid19: (state, action) => {
            state.covid19 = action.payload;
        },
        resetCovid19: (state) => {
            state.covid19 = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCovid19.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCovid19.fulfilled, (state, action) => {
                state.isLoading = false;
                state.covid19 = action.payload;
                // console.log(action.payload);
            })
            .addCase(getCovid19.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export const { setCovid19, resetCovid19 } = covid19Slice.actions;
export default covid19Slice.reducer;

export const getCovid19 = createAsyncThunk("covid19/getCovid19", async () => {
    try {
        const date = new Date();
        const fromDate = new Date().toISOString();
        const monthAgo = new Date(date.setMonth(date.getMonth() - 1)).toISOString();
        // console.log('hari ini : ', fromDate, 'sebulan yang lalu : ', monthAgo);
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}everything?q=covid-19&from=${monthAgo}&to=${fromDate}&sortBy=publishedAt&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});

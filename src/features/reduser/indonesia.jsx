import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    indonesia: null,
    isLoading: false,
};

const indonesiaSlice = createSlice({
    name: "indonesia",
    initialState,
    reducers: {
        setIndonesia: (state, action) => {
            state.indonesia = action.payload;
        },
        resetIndonesia: (state) => {
            state.indonesia = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getIndonesia.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getIndonesia.fulfilled, (state, action) => {
                state.isLoading = false;
                state.indonesia = action.payload;
                // console.log(action.payload);
            })
            .addCase(getIndonesia.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export const { setIndonesia, resetIndonesia } = indonesiaSlice.actions;
export default indonesiaSlice.reducer;

export const getIndonesia = createAsyncThunk("indonesia/getIndonesia", async () => {
    try {
        
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});

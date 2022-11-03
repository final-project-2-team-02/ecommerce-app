import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: [],
    loading: false,
    error: "",
};

export const fetchMarket = createAsyncThunk(
    "product/fetchMarket",
    async (url) => {

        const response = await axios.get(url);
        return response.data;
    }
);

const marketSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMarket.pending, (state) => {
            return { ...state, loading: true };
        });
        builder
            .addCase(fetchMarket.fulfilled, (state, action) => {
                const list = []
                action.payload.map((val) => (
                    list.push({ val, jumlah: 20, requ: 0 })
                ))
                console.log(action.payload);
                return { ...state, product: list, loading: false };
            })
            .addCase(fetchMarket.rejected, (state, action) => {
                console.log("rejected");
                return { ...state, loading: false, error: action.error.message };
            });
    },
});

export default marketSlice.reducer;

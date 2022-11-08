import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    user: [],
};

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (url) => {

        const response = await axios.get(url);
        return response.data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                const list = []
                action.payload.map((val) => (
                    list.push({ val, tole: 'user', requ: [] })
                ))
                console.log(action.payload);
                return { ...state, user: list };
            })
    },
});

export default userSlice.reducer;

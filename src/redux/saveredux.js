import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saved: [],
};

const savedSlice = createSlice({
    name: "saved",
    initialState,
    reducers: {
        saveNews: (state, action) => {
            state.saved.push(action.payload);
        },
        deleteNews: (state, action) => {
            const index = state.saved.findIndex(
                (news) => news.url === action.payload
            );
            state.saved.splice(index, 1);
        },
    },
});

export const { saveNews, deleteNews } = savedSlice.actions;

export default savedSlice.reducer;

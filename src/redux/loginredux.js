import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userLogin: null,
};



const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        login: (state, kamu) => {
            state.userLogin = kamu.payload
        },
        logout: (state) => {
            state.userLogin = null
        },
    },

});


export const { login, logout } = dataSlice.actions
export default dataSlice.reducer;

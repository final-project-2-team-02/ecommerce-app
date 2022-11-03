import { configureStore } from "@reduxjs/toolkit";
import marketReduc from '../redux/ecom'
import userReduc from '../redux/userredux'

export const store = configureStore({
    reducer: {
        ecom: marketReduc,
        user: userReduc
    }
})
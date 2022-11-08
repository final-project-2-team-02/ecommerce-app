import { configureStore } from "@reduxjs/toolkit";
import marketReduc from '../redux/ecom'
import userReduc from '../redux/userredux'
import dataReduce from '../redux/loginredux'

export const store = configureStore({
    reducer: {
        ecom: marketReduc,
        user: userReduc,
        data: dataReduce
    }
})
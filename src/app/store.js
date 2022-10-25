import { configureStore } from "@reduxjs/toolkit";
import artiReduc from '../redux/artredux'

export const store = configureStore({
    reducer: {
        arti: artiReduc
    }
})
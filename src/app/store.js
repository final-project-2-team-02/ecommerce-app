import { configureStore } from "@reduxjs/toolkit";
import artiReduc from '../redux/artredux'
import saveReduc from '../redux/saveredux'
import marketReduc from '../redux/ecom'
import userReduc from '../redux/userredux'

export const store = configureStore({
    reducer: {
        arti: artiReduc,
        saved: saveReduc,
        ecom: marketReduc,
        user: userReduc
    }
})
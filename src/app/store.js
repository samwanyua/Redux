// store the whole state for the app
import { configureStore } from  "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})


import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./src/slices/usuarioSlice";

export const store = configureStore({
    reducer: {
        usuario: usuarioReducer,
    },

    middleware: (getDefaultMiddeware) =>
        getDefaultMiddeware({
            serializableCheck: false,
        })
})

export default store;
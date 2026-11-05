import { createSlice } from "@reduxjs/toolkit"

export const usuarioSlice = createSlice({
    name: "usuarioLogado",
    initialState: { usuarioLogado: null },
    reducers: {
        setUsuarioLogado: (state, action) => {
            state.usuarioLogado = action.payload;
        },
        deslogar: (state, action) => {
            state.usuarioLogado = null;
        }

    } 

})

export const { setUsuarioLogado } = usuarioSlice.actions
export default usuarioSlice.reducer
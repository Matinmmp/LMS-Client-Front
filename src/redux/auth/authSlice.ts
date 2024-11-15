import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token: "",
    user: "",
    error:false,
    loading:false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action) => {
            state.token = action.payload.token
        },

        userLoggedIn: (state, action) => {
            state.loading = action.payload.loading
            state.token = action.payload.accessToken,
            state.user = action.payload.user,
            state.error = action.payload.error
        },

        userLoggedOut: (state) => {
            state.token = "",
            state.user = ""
        },
    }
})

export const { userRegistration, userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
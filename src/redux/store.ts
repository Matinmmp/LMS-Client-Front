import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";


export const store = configureStore({
    reducer: {
      auth: authSlice,  // اضافه کردن authSlice به ردیوسرها
      cart:cartSlice,
    },
  })

// call the refresh token function in every reload
// const initializeApp = async () => {
//     await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }))
//     await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }))
// }

// initializeApp();
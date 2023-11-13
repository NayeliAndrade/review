import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import stuffReducer from "./stuffSlice";
import userReducer from "./userSlice";
import reviewReducer from "./reviewSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        stuff: stuffReducer,
        user: userReducer,
        review: reviewReducer
    }
});

export default store;

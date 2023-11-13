import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isAuthenticated: localStorage.getItem("isAuthenticated") ? JSON.parse(localStorage.getItem('isAuthenticated')) : false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated', JSON.stringify(action.payload))
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated')
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

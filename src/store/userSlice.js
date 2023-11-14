import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const endpointUser = "https://review-ldgp.onrender.com/users"

//obtener
export const getUser = createAsyncThunk("user/getUser", async () => {
    const response = await axios.get(endpointUser)
    return response.data
})

//crear
export const postUser = createAsyncThunk("user/postUser", async (newUser) => {
    const response = await axios.post(endpointUser, newUser)
    return response.data
})

//actualizar
export const putUser = createAsyncThunk("user/putUser", async (updateItem) => {
    const response = await axios.put(`${endpointUser}/${updateItem.id}`, updateItem)
    return response.data
})

//borrar
export const deleteUser = createAsyncThunk("user/deteleUser", async (id) => {
    await axios.delete(`${endpointUser}/${id}`)
    return id
})

const UserSlice = createSlice({
    name: "user",
    initialState: {
        data: []
    },
    //reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(putUser.fulfilled, (state, action) => {
            const updateUser = action.payload
            state.data = state.data.map((item) =>
                item.id === updateUser.id ? updateUser : item
            )
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            const deleteId = action.payload
            state.data = state.data.filter((item) => item.id !== deleteId)
        })
    }
})

export default UserSlice.reducer
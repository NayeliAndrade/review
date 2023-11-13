import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const endpointStuff = "http://localhost:5000/stuff"

//obtener
export const getStuff = createAsyncThunk("stuff/getStuff", async () => {
    const response = await axios.get(endpointStuff)
    return response.data
})

//crear
export const postStuff = createAsyncThunk("stuff/postStuff", async (newStuff) => {
    const response = await axios.post(endpointStuff, newStuff)
    return response.data
})

//actualizar
export const putStuff = createAsyncThunk("stuff/putStuff", async (updateItem) => {
    const response = await axios.put(`${endpointStuff}/${updateItem.id}`, updateItem)
    return response.data
})

//borrar
export const deleteStuff = createAsyncThunk("stuff/deteleStuff", async (id) => {
    await axios.delete(`${endpointStuff}/${id}`)
    return id
})

const stuffSlice = createSlice({
    name: "stuff",
    initialState: {
        data: []
    },
    //reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStuff.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(postStuff.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        builder.addCase(putStuff.fulfilled, (state, action) => {
            const updateStuff = action.payload
            state.data = state.data.map((item) =>
                item.id === updateStuff.id ? updateStuff : item
            )
        })
        builder.addCase(deleteStuff.fulfilled, (state, action) => {
            const deleteId = action.payload
            state.data = state.data.filter((item) => item.id !== deleteId)
        })
    }
})

export default stuffSlice.reducer
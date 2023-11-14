import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const endpointReview = "https://review-ldgp.onrender.com/reviews"



//obtener
export const getReview = createAsyncThunk("review/getReview", async () => {
    const response = await axios.get(endpointReview)
    return response.data
})
//crear
export const postReview = createAsyncThunk("review/postReview", async (newReview) => {
    console.log(newReview);
    const response = await axios.post(endpointReview, newReview)
    return response.data
})
//actualizar
export const putReview = createAsyncThunk("review/putReview", async (updateReview) => {
    const response = await axios.put(`${endpointReview}/${updateReview.id}`, updateReview)
    return response.data
})
//borrar
export const deleteReview = createAsyncThunk("review/deleteReview", async (id) => {
    await axios.delete(`${endpointReview}/${id}`)
    return id
})

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(getReview.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(postReview.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        builder.addCase(putReview.fulfilled, (state, action) => {
            const updateReview = action.payload
            state.data = state.data.map((item) =>
                item.id === updateReview.id ? updateReview : item
            )
        })
        builder.addCase(deleteReview.fulfilled, (state, action) => {
            const deleteId = action.payload
            state.data = state.data.filter((item) => item.id !== deleteId)
        })
    }
})

export default reviewSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const slices = createSlice({
    name : 'TastyFood',
    initialState,
    // ________ Static data in reducers __________
    reducers:{},
    // ___________ Asynchronous Data in extraReducers ________
    // extraReducers:{

    // }
})


const sliceReducer = slices.reducer

export default sliceReducer;
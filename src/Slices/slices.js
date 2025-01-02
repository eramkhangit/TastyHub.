import { createSlice } from "@reduxjs/toolkit";
import { userRegistration, userLogin, accessToken, searchFood, category } from "./action";
// import { build } from "vite"; If something imported from vite which cause error " Vite-injectquery has already been declared".

const initialState = {

    isLoading: {
        registrationLoading: false,
        loginLoading: false,
        searchFoodLoading: false,
    },

    registrationMsg: '',

    loggedUserData: {
        message: '',
        token: window.localStorage.getItem("Token") || null,
        id: window.localStorage.getItem("UserId") || null,
        name: JSON.parse(window.localStorage.getItem("UserName")) || '',
    },

    refreshToken: null,

    searchFoodData: {
        data: null,
    },

    category: {
        isLoading: false,
        categoryData: []
    },

}

const slices = createSlice({
    name: 'TastyFood',
    initialState,

    // ________ Static data in reducers __________
    reducers: {
        setStoredUserId: (state, action) => {
            state.storedUserId = action.payload;  // Update the storedUserId in the Redux store
        },
        // Add a new logout reducer
        logout: (state) => {
            state.loggedUserData = {
                message: '',
                token: null,
                id: null,
                name: '',
            };
            // Clear the localStorage as well
            window.localStorage.removeItem('Token');
            window.localStorage.removeItem('UserName');
            window.localStorage.removeItem('UserId');
        }
    },

    // ___________ Asynchronous Data in extraReducers ________
    extraReducers: (builder) => {

        //______________ User Registration ______________
        builder.addCase(userRegistration.pending, (state) => {
            state.isLoading.registrationLoading = true
        })
        builder.addCase(userRegistration.fulfilled, (state, action) => {
            state.isLoading.registrationLoading = false
            state.registrationMsg = action.payload
        })
        builder.addCase(userRegistration.rejected, (state) => {
            state.isLoading.registrationLoading = false
        })

        // ____________________ User Login ____________________
        builder.addCase(userLogin.pending, (state) => {
            state.isLoading.loginLoading = true
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading.loginLoading = false
            state.loggedUserData.message = action.payload.message
            state.loggedUserData.id = action.payload.user._id

            state.loggedUserData.name = action.payload.user.username
            state.loggedUserData.token = action.payload.token

            //________ Store Token in Local Storage __________
            window.localStorage.setItem('Token', JSON.stringify(action.payload.token))
            window.localStorage.setItem('UserName', JSON.stringify(action.payload.user.username))
            window.localStorage.setItem('UserId', JSON.stringify(action.payload.user._id))

        })

        builder.addCase(userLogin.rejected, (state) => {
            state.isLoading.loginLoading = false
        })

        //______________ Refresh Token ______________
        builder.addCase(accessToken.fulfilled, (state, action) => {
            state.refreshToken = action.payload
        })

        // ________________ Search Food ____________
        builder.addCase(searchFood.pending, (state) => {
            state.isLoading.searchFoodLoading = true
        })

        builder.addCase(searchFood.fulfilled, (state, action) => {
            state.isLoading.searchFoodLoading = false,
            state.searchFoodData.data = action.payload
        })

        // ______________ Category ___________
        builder.addCase(category.pending, (state) => {
            state.category.isLoading = false
        })

        builder.addCase(category.fulfilled, (state, action) => {
            state.category.isLoading = true,
                state.category.categoryData = action.payload
        })

        builder.addCase(category.rejected, (state) => {
            state.category.isLoading = false
        })

    }
})

export const { logout } = slices.actions;  // This explicitly exports the logout action
const sliceReducer = slices.reducer

export default sliceReducer;
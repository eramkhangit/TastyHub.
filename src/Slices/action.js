import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const userRegistration = createAsyncThunk('userRegistration', async ({ username, password, mobile }) => {
    try {

        // Set up the request payload (the data you want to send)
        const data = new URLSearchParams();
        data.append("username", username);
        data.append("password", password);
        data.append("mobile", mobile);

        // Set up the headers
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        // Make the POST request using axios
        const response = await axios.post("https://flavour-backend.vercel.app/register", data, { headers })
        const d = await response.data
        return d.message;
    } catch (error) {
        console.error("Error: ", error);
    }
})

// ________________ User Login _________________
export const userLogin = createAsyncThunk('userLogin', async ({ username, password }) => {
    try {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        const data = new URLSearchParams();
        data.append("username", username);
        data.append("password", password);

        const response = await axios.post("https://flavour-backend.vercel.app/login", data, { headers })
        const d = await response.data
        return d;
    } catch (error) {
        console.log(error);
    }
})

//_____________________ Access Token ___________________
export const accessToken = createAsyncThunk('accessToken', async (token) => {
    const t = token.token
    try {
        const url = `https://flavour-backend.vercel.app/auth/${t}`;
        const response = await axios.get(url);
        return (response.data.data)
    } catch (error) {
        console.error("Error:", error);
    }
})

// _________________ Category Option ____________________
export const category = createAsyncThunk('category', async ({ categoryName, price }) => {

    try {
        const url = `https://flavour-backend.vercel.app/fetch/${categoryName}/${price}`;
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("Category Error :", error);
    }
})

// __________________ Search Food ___________________
export const searchFood = createAsyncThunk('searchFood', async (searchFood) => {
    try {
        const url = `https://flavour-backend.vercel.app/searchFood/${searchFood}`;
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("Search Food Error : ", error)
    }
})
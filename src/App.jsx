import React, { useEffect } from 'react';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';  // Import the correct ThemeProvider from MUI
import customTheme from './ThemeProvider/customTheme';  // Import custom theme
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import RegistrationPage from './Components/Authentication/RegistrationPage';
import LoginPage from './Components/Authentication/LoginPage';
import Message from './Components/Message';
import { useDispatch } from 'react-redux';
import { accessToken } from './Slices/action';
import CategoryPage from './Components/Pages/CategoryPage';
import SearchPage from './Components/Pages/SearchPage';
import AddToCart from './Components/Pages/AddToCart';


function App() {

  const dispatch = useDispatch()

  // window.localStorage.clear()

  //_______________ Access Token ________________
  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("Token"));

    if (token)
      dispatch(accessToken({ token }))

  }, [])


  return (
    <ThemeProvider theme={customTheme}>  {/* Pass theme correctly */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messagePage' element={<Message />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/categoryPage' element={<CategoryPage />} />
        <Route path='/searchPage' element={<SearchPage />} />
        <Route path='/addToCart' element={<AddToCart/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

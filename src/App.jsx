import React from 'react';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';  // Import the correct ThemeProvider from MUI
import customTheme from './ThemeProvider/customTheme';  // Import custom theme
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import RegistrationPage from './Components/Authentication/RegistrationPage';
import LoginPage from './Components/Authentication/LoginPage';

function App() {
  return (
    <ThemeProvider theme={customTheme}>  {/* Pass theme correctly */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/login' element={<LoginPage/>}  />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

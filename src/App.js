import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import { MultipleCards } from './Components/PictureCard/MultipleCards';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoverPage from './Components/CoverPage/CoverPage';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/picture-adder" element={<MultipleCards />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

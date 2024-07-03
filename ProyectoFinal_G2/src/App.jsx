import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import PrincipalScreen from './Components/PrincipalScreen';
import Cards from './Components/SmallCards';

export function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/principal" element={<PrincipalScreen/>} />
      </Routes>
    </Router>
  );
}
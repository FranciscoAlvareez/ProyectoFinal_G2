import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import PrincipalScreen from './Components/PrincipalScreen';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalScreen />} />
+      </Routes>
    </Router>
  );
}
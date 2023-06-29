//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>

          <Routes>
            <Route
              path='/'              
            />
            <Route/>
            <Route/>
          </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;

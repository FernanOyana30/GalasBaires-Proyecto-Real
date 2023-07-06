//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import FormMayorista from './components/Forms/formMayorista'
import FormMinorista from './components/Forms/formMinorista'
import Nosotros from './components/Nosotros/Nosotros'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>   
        <Routes>
          <Route
            path='/' element={<Inicio/>}              
            />  
          
          <Route 
            path='/Nosotros' element={<Nosotros/>}
            />                    
          <Route
            path='/ItemListContainer' element={<ItemListContainer/>}              
            />  
          <Route
            path='/ItemDetailContainer' element={<ItemDetailContainer/>}              
            />  
          <Route 
            path='/FAQ' element={<FAQ/>}
            />          
          <Route
            path='/formMayorista' element={<FormMayorista/>}
            />
          <Route 
            path='/formMinorista' element={<FormMinorista/>}
            />  
        </Routes>      
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

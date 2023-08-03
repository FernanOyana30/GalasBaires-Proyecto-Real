//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import FormMayorista from './pages/Forms/formMayorista'
import FormMinorista from './pages/Forms/formMinorista'
import Nosotros from './pages/Nosotros/Nosotros'
import FAQ from './pages/FAQ/FAQ'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
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
            path='/productos' element={<ItemListContainer/>}              
            />    
          <Route
            path='/detalle/:idProducto' element={<ItemDetailContainer/>}              
            />            
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer />}
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

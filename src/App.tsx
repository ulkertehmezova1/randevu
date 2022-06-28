import React from 'react';
import Cvr from './components/Cvr';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormCVR from './components/FormCVR';
function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path ='/FormCVR' element={<FormCVR/>}/>
        <Route path ='/' element={<Cvr/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

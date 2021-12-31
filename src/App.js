import './App.css';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NasaPhoto from './Components/NasaPhoto.js'
import Home from './Components/Home.js'

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Route component={Home} path="/nasa/"  exact/>
      <Route  component={NasaPhoto} path="/nasa/nasaphoto"/>  
    </div>
    </BrowserRouter>
  );
}

export default App;

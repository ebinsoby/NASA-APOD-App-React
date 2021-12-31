import './App.css';
import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import NasaPhoto from './Components/NasaPhoto.js'
import Home from './Components/Home.js'

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Route component={Home} path="/"  exact/>
      <Route  component={NasaPhoto} path="/nasaphoto"/>  
    </div>
    </BrowserRouter>
  );
}

export default App;

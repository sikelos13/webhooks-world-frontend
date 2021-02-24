import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import { Routes } from './Routes';
import { Toaster } from 'react-hot-toast';

export function App () {
        return (
          <Router>
              <Toaster 
                position="top-center"
                reverseOrder={false}
              />
                <Routes />
          </Router>
        );

}

export default App;
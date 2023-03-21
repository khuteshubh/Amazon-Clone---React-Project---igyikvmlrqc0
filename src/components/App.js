import React from 'react'
import '../styles/App.css';
import Header from "../Header";
import Home from "../Home"
import CheckOut from "./CheckOut";
import Login from "./Login";

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
const App = () => {


  return (
    
    <div id = "main">
      
        <Routes>
          
          <Route  path="/" element={[<Header/>,<Home/>]}>
            
          </Route>
          <Route path="/checkout" element={[<Header/>,<CheckOut/>]} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          
          
        </Routes>

      
    
      
    
    </div>
    
  );
}


export default App;

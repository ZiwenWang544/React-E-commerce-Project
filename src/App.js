import {Routes, Route} from "react-router-dom"
import { Container} from "react-bootstrap"
import { BrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar/Navbar"
import { RouterNav } from "./Routes/routes"
import { CartProvider } from "./context";
import { useState, useEffect, } from "react";
import { ApiStore } from "./components/API";
function App() {


  return (
   <>
   <CartProvider>
    <RouterNav />
   </CartProvider>
  </>
  
  );
}

export default App;

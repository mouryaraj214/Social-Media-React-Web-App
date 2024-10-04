import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Pages from './Components/Pages/Pages';
import AppContext from "./Components/AppContext/AppContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppContext>
      <Pages />
      </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;

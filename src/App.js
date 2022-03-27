//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//   import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  

  const showAlert = (type, message)=>{
    setAlert({type: type,
    msg: message
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode has been enabled');
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#10284c';
      showAlert('success', 'Dark mode has been enabled');
    }
  }

  const toggleMode2 = ()=>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode has been enabled');
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#353636';
      showAlert('success', 'Dark mode has been enabled');
    }
  }
  

  return (
    <>
      {/* <BrowserRouter> */}
      {/* Navbar imported from Navbar.js component and Props value passed to it */}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} toggleMode2={toggleMode2}/> 
      <Alerts alert={alert}/>      
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About mode = {mode} />}/>           */}
          <TextForm showAlert={showAlert} heading ="Enter text below to analyze" mode={mode}/>
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter>   */}
    </>
      );
}

export default App;

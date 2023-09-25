import { useState } from "react";
import React from 'react'
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
function App() {
  const [mode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = '#212529'
      //  #042743
      showAlert("Dark Mode has Enabled", "success")
    }
    else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has Enabled", "success")
    }
  }
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about"
              element={<About/>}/> */}
            
            {/* <Route exact path="/home"
              element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert}/>}/> */}
            {/* use exact path otherwise react will do partial matching
            /users-->comp 1
            /users/home-->then also comp 1 will render due to only path  */}
          {/* </Routes> */}
          <TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
      {/* <AboutUs></AboutUs> */}

    </div>
  );
}

export default App;

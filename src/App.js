import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setInterval(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if (mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#09091c';
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
  }


  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to Analyese" mode={mode}/>
      </div>
    </>
  );
}

export default App;

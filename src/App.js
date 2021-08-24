import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

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

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#09091c';
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
  }


  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to Analyese" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

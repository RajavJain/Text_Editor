// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import About from './components/About';


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 2000);
  } 

  const toggleMode = () => {
    if (mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
      
    else {
    setMode('dark');
    document.body.style.backgroundColor='#101054';
    showAlert("Dark Mode has been Enabled","success");
    }
}

  return (
    <>
    {<Router>
      <Navbar title="Text-Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode} />
          </Route>  
        </Switch>    
      </div>
      </Router>}
    </>
  ); 
}

export default App;

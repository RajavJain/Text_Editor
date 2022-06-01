// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

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
      <Navbar title="Text-Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode} />
      </div>

      {/* <About/> */}



    </>
  );
}

export default App;

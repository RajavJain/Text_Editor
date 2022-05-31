import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';


function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
      
    else {
    setMode('dark');
    document.body.style.backgroundColor='#101054';
    }
}

  return (
    <>
      <Navbar title="Text-Utils" about="About Us" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>

      {/* <About/> */}



    </>
  );
}

export default App;

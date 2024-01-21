import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,Route,Routes
// } from "react-router-dom";
// import About from './components/About';
function App() {
  const [mode,setMode] = useState('light');  //whether dark mode is enabled or not.
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode enabled";

    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode enabled";
    }
  }
  const toggleMode2 = () => {
    if(mode === 'danger'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
    else{
      setMode('danger');
      document.body.style.backgroundColor = '#7b0404';
      showAlert("Dark red mode has been enabled","success");
    }
  }

  const toggleMode3 = () => {
    if(mode === 'success'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
    else{
      setMode('success');
      document.body.style.backgroundColor = '#024733';
      showAlert("Dark green mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
    {/*if i give title as {3} or any number then it will show error as propType is taken as string */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title = "TextUtils" aboutText="about" mode = {mode} toggleMode = {toggleMode} toggleMode2 = {toggleMode2} toggleMode3 = {toggleMode3} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
    {/* <Route path='/' element={<TextForm showAlert = {showAlert} heading = 'enter the text to analyze below' mode = {mode}/>}/> */}

    {/* ******** if i want to use Router for Textform then i will comment out below TextForm code and uncomment above code ********* */}

    <TextForm showAlert = {showAlert} heading = 'enter the text to analyze below' mode = {mode}/>
    {/* <Route path="/about" element = {<About/>}/> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;

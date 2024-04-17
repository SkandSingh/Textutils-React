import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Forms';
import Alert from './components/Alert';


function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const [ToggleMode,setToggleMode]= useState('DakrMode');

  const showAlert= (message)=>{
    setAlert(message)
    setTimeout(()=>{
      setAlert(null);
    },1800);
  }
  
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      setToggleMode('LightMode')
      document.body.style.backgroundColor='rgb(7 7 14)';
      showAlert("Dark mode has been enabled")
    }
    else{
  setMode('light');
  setToggleMode('DarkMode');
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled")

    }  
  }
  
  return (

   <div>
    
        <Navbar title="Textutils" mode={mode} ToggleMode={ToggleMode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Form showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
      
   </div>

  );
}

export default App;

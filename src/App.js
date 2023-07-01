//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react'
import About from './Components/About';
import Alert from './Components/Alert';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const[text, setText]= useState("Enable");
  const[alert,setAlert] =useState(null);

  const [myStyle, setMystyle] = useState(
    {
      color:'black',
      backgroundColor:'white',
      borderRadius:'5px'
      
    })

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
      setTimeout(()=>{
        setAlert(null)
      },1500)
    
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setText("Disable");
      document.body.style.backgroundColor='#243a6b';
      showAlert('Dark Mode Activated',"success")
      document.title= 'Raj App - Dark Mode';
      document.title= 'Raj App - Dark Mode';
      setMystyle({
      color:'white',
      backgroundColor:'#2f5cb6',
      borderRadius:'5px'
    })
      //setInterval(()=>{document.title= 'Install now dark ';},2000)
    }else{
      setMode('light');
      setText("Enable");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Activated',"success")
      document.title= 'Raj App - Light Mode';
      setMystyle({
        color:'black',
        backgroundColor:'white',
        borderRadius:'5px'
      })
    }
  }

  const greenOn = ()=>{
     document.body.style.backgroundColor='#1a5c43';
    showAlert('Green Mode Activated',"success")
    setMystyle({
      color:'white',
      backgroundColor:'#004d00',
      borderRadius:'5px'
    })
  }
  const redOn = ()=>{
    document.body.style.backgroundColor='#5c1a33';
    showAlert('Red Mode Activated',"success")
    setMystyle({
      color:'white',
      backgroundColor:'#990000',
      borderRadius:'5px'
    })
  }
  const blueOn = ()=>{
    document.body.style.backgroundColor='#07096e';
      showAlert('Blue Mode Activated',"success")
      setMystyle({
        color:'white',
        backgroundColor:'#000080',
        borderRadius:'5px'
      })

  }

  return (
    <>
    
     <Navbar title="TextUtils"  about="About Text"  mode={mode}
      toggleMode={toggleMode} change={text}
       greenOn={greenOn} redOn={redOn} blueOn={blueOn}  />

      <Alert alert={alert}/>
      
     <div className='container  my-5'>
   <Routes>
      <Route path='/rajapp' exact element={<Textform  showAlert={showAlert} 
      headings="Enter the Text For Analysis" mode={mode}/>}>
        
       </Route>
        <Route  exact path="/about" element={ <About style={myStyle} />}>
      
      </Route>
      </Routes>
    
     </div>
    
     </>  
  );
}

export default App;

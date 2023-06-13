//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
//import Textform from './Components/Textform';

function App() {
  return (
    <>
     <Navbar title="TextUtils"  about="About Text"/>
     <div className='container  my-5'>
     <About></About>
      {/* <Textform headings="Enter the text for Analyse"/> */}
     </div>
     
    </>
  );
}

export default App;

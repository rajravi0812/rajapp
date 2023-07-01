import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted to Uppercase', 'success');
  }
  const clearText = ()=>{
    setText("");
    props.showAlert('Text Cleared', 'success');
  }
  const handleOnchange=(event)=>{
    setText(event.target.value)
    // let n =text.split(' ');
    // let mcount=0;
    // let res = (a)=>{if(a===""){mcount+=0}else{mcount++}}
    // n.map(res);
    // setCount(mcount);
  }

  const handleLoclick=()=>{
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert('Text converted to Lowercase', 'success');
  }

  const handleFirstletterCapital=()=>{
  let b = text.split(' ');
  function neww(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
 let m = b.map(neww);
  setText(m.join(' '));
  props.showAlert('Every First character of word is capitalize.  ', 'success');
  }

  const handleSpace = ()=>{
    let a = text.split(/[ ]+/);
    setText(a.join(" "));
    props.showAlert('Single Space Apply between words', 'success');
  }

  const handleCopy = ()=>{
    let text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text Copied', 'success');
  }

    
   //const [count, setCount] =useState("0"); 
  const [text, setText]= useState("");
  return (
    <>
    <div>
        <h3 style={{color:props.mode==='dark' ? 'white' : 'black'}} >{props.headings}</h3>
        <div className="form-group mb-3">
        <textarea className="form-control " onChange={handleOnchange} value={text} 
        id="exampleFormControlTextarea1" rows="6"
         style={{backgroundColor:props.mode==='dark' ? 'lightgrey' : 'white',
         color:props.mode==='dark' ? 'darkblue' : 'black'}}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpclick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoclick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleFirstletterCapital} >Capital first char </button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleSpace} >Remove Extra Space</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Clipboard</button>
        <button className='btn btn-success mx-1 my-1' onClick={clearText} >Clear</button>
    </div>
    <div className='container my-1'>
      <h3 style={{color:props.mode==='dark' ? 'white' : 'black'}}>Your text summary</h3>
      <p style={{color:props.mode==='dark' ? 'white' : 'black'}}>{text.split(" ").filter(((element)=>{return element.length!==0})).length} Words {text.length} Characters</p>
      <p style={{color:props.mode==='dark' ? 'white' : 'black'}}> {0.008*text.split(" ").length} Minutes Read</p>
      <h4 style={{color:props.mode==='dark' ? 'white' : 'black'}}>Text Preview</h4>
      <p style={{color:props.mode==='dark' ? 'white' : 'black'}}>{text.length>0? text : 'Enter something in textbox to preview here...'}</p>
    </div>
    </>
  )
}



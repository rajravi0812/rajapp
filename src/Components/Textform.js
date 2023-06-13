import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnchange=(event)=>{
   // console.log('Handle on change');
    setText(event.target.value)
  }

  const handleLoclick=()=>{
    let lower = text.toLowerCase();
    setText(lower);
  }

  const handleFirstletterCapital=()=>{
  let c = text.split(' ').length;
  let b = text.split(' ');
  for(let i=0; i<c; i++){
  b[i] = b[i][0].toUpperCase()+b[i].slice(1).toLowerCase();
  }
  setText(b.join(' '));
  }
    
  const [text, setText]= useState("");
  return (
    <>
    <div>
        <h2>{props.headings}</h2>
        <div className="form-group mb-3">
        <textarea className="form-control " onChange={handleOnchange} value={text} 
        id="exampleFormControlTextarea1" rows="6" ></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpclick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoclick} >Convert to Lowercase</button>
        <button className='btn btn-primary' onClick={handleFirstletterCapital} >Capital first char </button>
    </div>
    <div className='container my-1'>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} Words  and {text.length} Characters</p>
      <p> {0.008*text.split(" ").length} Minutes Read</p>
      <h3>Text Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}



import React, {useState} from 'react';

export default function TextArea(props) {
 
    const [text, setText] = useState("");

   let  UpperCase = ()=>{
     let newtext = text.toUpperCase();  
     setText(newtext);  

    }
    let LowerCase = ()=>{
        let newtext = text.toLowerCase();  
        setText(newtext); 
    }
    let clear = ()=>{
        let newtext = "";  
        setText(newtext); 
    }
  let changeText = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
    <div className='container' >
        <h1 className='my-3 header'style={{color:props.mode ==="dark"?'white':'black'}}>{props.heading}</h1>
<div className="mb-3 " >
  <textarea className="form-control my-4" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changeText} ></textarea>
</div>
<button className="btn btn-primary" onClick={UpperCase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={LowerCase} >Convert to LowerCase</button>
<button className="btn btn-primary btn1 mx-2 " onClick={clear} >Clear Text</button>
    </div>
    <div className="container my-4" style={{color:props.mode ==="dark"?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length-1} Minutes to Read </p>
        
    </div>
    <div className="container" style={{color:props.mode ==="dark"?'white':'black'}}>
        <h1>Preview your Text</h1>
        <p> {text} </p>
    </div>
    </>
  );
}

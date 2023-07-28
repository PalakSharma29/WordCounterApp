import React, { useState } from 'react'

export default function Textfrom(props) {

    const handleUpClick=(event)=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLowerClick=(event)=>{
        let newTxt = text.toLowerCase();
        setText(newTxt)
        props.showAlert("Converted to LowerCase","primary")
    }

    const handleclearText=(event)=>{
        let newT = " ";
        setText(newT)
        props.showAlert("Text has cleared", "success")
    }

    const handleCopyText = () =>{
      var text = document.getElementById('myText');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied", "warning")
    }

    const handleExtraSpaces = () =>{
      let newtxt = text.split(/[ ]+/);
      setText(newtxt.join(" "));
      props.showAlert("Removed ExtraSpace", "success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState("")

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
</div>
      <button className='btn btn-primary mx-2'  onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-2' onClick={handleclearText}>Clear Text</button>
      <button className='btn btn-primary mx-2
      ' onClick={handleCopyText}>Copy Text</button>
      <button className='btn btn-primary' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}

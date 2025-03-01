import React, { useState } from "react";

export default function TextHtmlForm(props) {

  const [text, setText] = useState("Enter text here");
  // Convert text to uppercase
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case","Success!");
  };

  // Convert text to lowercase
  const handleLowerCaseClick= () =>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case","Success!");
  }

  // Copy text to clipboard
 const  handleCopy=()=>{
  console.log("Copied text to clipboard");
  var text = document.getElementById("myBox");
  text.select();

  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clipboard","Success!");
 }

  // Clear text
  const handleClearTextClick = () => {
    setText("");
    props.showAlert("Clear","Success!");
  };

  // Handle textarea changes
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleTextChange}
          style = {{bacckgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'black':'#042743'}}id = "myBox" rows = "8"
          ></textarea>
      </div>
      
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick}>
        Convert To Uppercase
      </button>
      <button  disabled ={text.length===0} className="btn btn-primary ms-3 mx-1 my-1" onClick={handleLowerCaseClick}>Convert to lowercase</button>

      <button  disabled ={text.length===0} className="btn btn-primary ms-3 mx-1 my-1" onClick={handleCopy}>
       Copy Text
      </button>

      <button  disabled ={text.length===0} className="btn btn-danger ms-3 mx-1 my-1" onClick={handleClearTextClick}>
        Clear Text
      </button>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </div>
  );
}

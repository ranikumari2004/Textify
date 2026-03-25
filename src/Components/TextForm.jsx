import React, { useState } from "react";

export default function TextHtmlForm(props) {
  const [text, setText] = useState("Enter text here");
  const [isUppercase, setIsUppercase] = useState(false); // for toggle case

  // Convert text to uppercase
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case", "Success!");
  };

  // Convert text to lowercase
  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "Success!");
  };

  // Toggle case
  const handleToggleCase = () => {
    if (isUppercase) {
      setText(text.toLowerCase());
      setIsUppercase(false);
      props.showAlert("Converted to lowercase", "Success!");
    } else {
      setText(text.toUpperCase());
      setIsUppercase(true);
      props.showAlert("Converted to uppercase", "Success!");
    }
  };

  // Capitalize Each Word
  const handleCapitalizeWords = () => {
    let words = text.split(" ").map(word => {
      if(word.length===0) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    setText(words.join(" "));
    props.showAlert("Capitalized Each Word", "Success!");
  };

  // Remove Extra Spaces
  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "Success!");
  };

  // Reverse Text
  const handleReverseText = () => {
    let reversed = text.split("").reverse().join("");
    setText(reversed);
    props.showAlert("Text reversed", "Success!");
  };

  // Copy text to clipboard
  const handleCopy = () => {
    const textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "Success!");
  };

  // Clear text
  const handleClearTextClick = () => {
    setText("");
    props.showAlert("Clear", "Success!");
  };

  // Grammar correction
  const handleGrammarCheck = () => {
    let sentences = text.split(/([.!?]\s)/); // split by punctuation
    let correctedText = sentences
      .map(sentence => {
        sentence = sentence.trim();
        if (sentence.length === 0) return "";
        // Capitalize first letter of the sentence
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        // Capitalize "I" pronoun
        sentence = sentence.replace(/\bi\b/g, "I");
        // Capitalize "rani" as a proper noun example
        sentence = sentence.replace(/\brani\b/gi, "Rani");
        return sentence;
      })
      .join(" ");
    
    setText(correctedText);
    props.showAlert("Grammar checked & corrected", "Success!");
  };

  // Handle textarea changes
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleTextChange}
          style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'black' : '#042743' }}
        ></textarea>
      </div>

      {/* Existing Buttons */}
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick}>
        Convert To Uppercase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary ms-3 mx-1 my-1" onClick={handleLowerCaseClick}>
        Convert To Lowercase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary ms-3 mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length === 0} className="btn btn-danger ms-3 mx-1 my-1" onClick={handleClearTextClick}>
        Clear Text
      </button>
      <button disabled={text.length === 0} className="btn btn-warning ms-3 mx-1 my-1" onClick={handleGrammarCheck}>
        Grammar Check & Correct
      </button>

      {/* New Text Formatting Buttons */}
      <button disabled={text.length === 0} className="btn btn-success ms-3 mx-1 my-1" onClick={handleCapitalizeWords}>
        Capitalize Each Word
      </button>
      <button disabled={text.length === 0} className="btn btn-info ms-3 mx-1 my-1" onClick={handleToggleCase}>
        Toggle Case
      </button>
      <button disabled={text.length === 0} className="btn btn-secondary ms-3 mx-1 my-1" onClick={handleRemoveExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button disabled={text.length === 0} className="btn btn-dark ms-3 mx-1 my-1" onClick={handleReverseText}>
        Reverse Text
      </button>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

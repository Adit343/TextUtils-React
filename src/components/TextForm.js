import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase! ", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase! ", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value); //if i dont write this line then i wont be able to write anything in text area box.
  };
  const [text, setText] = useState("enter text here2");
  //text = "new text";                        //wrong way to change the state
  //setText = ("new text");                   //correct way to change the state
  return (
    <>
      <div className="container">
        <h1 style={{color:props.mode === 'light' ? '#042743' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white' , color:props.mode === 'dark'?'white':'#042743'}}                     //here 2 curly braces are used in style attribute...One is for writing javascript and another one is for creating object in Javascriot

          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container" style={{color:props.mode === 'light' ? '#042743' : 'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        {/* here 0.008 comes from a data from google stating that 1 Minute is taken by slow reader to read 125 words so time to read 1 word is 1/125 = 0.008 */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

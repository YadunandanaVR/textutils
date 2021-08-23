import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //Function to convert the text to UpperCase
  const HandleOnUpClick = () => {
    //console.log("clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };

  //Function to convert the text to LowerCase
  const HandleOnLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //Function to Clear the text
  const HandleOnClearClick = () => {
    let newText = "";
    setText(newText);
  };

  //Function to convert the text to TitleCase
  const HandleOnTitleClick = () => {
    let newText = text;
    newText = newText.toLowerCase().split(" ");

    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }

    newText = newText.join(" ");
    setText(newText);
  };

  //Function to Copy the text to Clipboard
  const HandleOnCopyClick = () => {
    navigator.clipboard.writeText(text);
  };

  //Function to download the test as a text file
  const HandleOnDownloadClick = () => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "convertCase.txt");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  const HandleOnClick = (event) => {
    setText(event.target.value);
  };

  //dark mode / white mode and btn text(dark/white)
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const toggleMode = () => {
    if (myStyle.color === 'black'){
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid white'
      });
      setBtnText("Enable LIght Mode");
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  }

  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-box"
            rows="8"
            value={text}
            onChange={HandleOnClick}
            style={myStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={HandleOnUpClick}>Convert to Upper</button>
        <button className="btn btn-primary mx-2 my-3" onClick={HandleOnLowClick}>Convert to Lower</button>
        <button className="btn btn-primary mx-2 my-3" onClick={HandleOnTitleClick}>Convert to Title</button>
        <button className="btn btn-primary mx-2 my-3" onClick={HandleOnClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-3" onClick={HandleOnCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-3" onClick={HandleOnDownloadClick}>Download</button>
        <button className="btn btn-primary mx-2 my-3" onClick={toggleMode}>{btnText}</button>
      </div>

      <div className="container my-3" style={myStyle}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b>{" "} Characters</p>
        <p>{0.008 * text.split(" ").length.toFixed(4)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

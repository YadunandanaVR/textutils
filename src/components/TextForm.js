import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text Here");

  const HandleOnUpClick = () => {
    //console.log("clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };

  const HandleOnClick = (event) => {
    //console.log("clicked on input")
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="my-box" rows="8" value={text}onChange={HandleOnClick}></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleOnUpClick}> Convert to Upper</button>
    </div>
  );
}

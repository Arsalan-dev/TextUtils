import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success', 'Text has been converted to upper case');
  }

  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success', 'Text has been converted to lower case');
  }

  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

  const handleCapClick =()=>{
    const arr = text.split(" ");

    for (let i = 0; i < arr.length; i++) {    
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
    props.showAlert('success', 'Text has been converted to capitalized case');

  }

  const handleSpaces = ()=>{
    let newText = text.split(/[ ]+/);  //Regex ftn to split on more then one space
    newText = newText.join(" ");
    setText(newText);
    props.showAlert('success', 'Extra spaces has been removed from text');
  }

  const handleClearText = ()=>{
    setText("");
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode==="light"?"black":"white"}}>
      <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
      <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#10284c':'white' ,color: props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="my-box" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalize Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>      
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      </div>
    </div>
    
    <div className='container my-3' style={{color: props.mode==="light"?"black":"white"}}>
      <h3>Your text Summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.08 * (text.split(" ").length)} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter your text in the text box to preview here'}</p>
    </div>

    </>

  )
}

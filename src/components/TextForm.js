import React, {useState} from 'react' // useState is a react hook

export default function TextForm(props) {
    const UppercaseClick = () =>{
        // console.log("Uppercase was clicked")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to uppercase", "Success")}
    const LowercaseClick = () =>{
        // console.log("Uppercase was clicked")
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to lowercase", "Success")}
    const ClearTextClick = () =>{
        // console.log("Uppercase was clicked")
        let newtext = "";
        setText(newtext)
        props.showalert("Cleared Text", "Success")}
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showalert("Copied Text", "Success")}
    const handleOnChange = (event) =>{
        // console.log("On change")
        setText(event.target.value)}
    
    const [text, setText] = useState("")

    return (
        <div>
            <div className="my-4">
            <label htmlFor="FormControlTextarea1" className="form-label" style={props.textstyle2()}><h3>{props.text}</h3></label>
            <textarea className="form-control" id="FormControlTextarea1" rows="3" value={text} style={props.textstyle1()} onChange={handleOnChange}></textarea>{/* If we want to make any changes inside the textbox, handleOnChange function will run*/}
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={UppercaseClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={LowercaseClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={ClearTextClick}>Clear Text</button>
            <div className="my-4">
            <h3 style={props.textstyle2()}>Word & Character Count</h3>
         {/*<p style={props.textstyle2()}>{text.split(" ").length} words and {text.length} characters</p>*/}
         {/*<p style={props.textstyle2()}>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>*/}
            <p style={props.textstyle2()}>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
            <h2 style={props.textstyle2()}>Preview</h2>
            <p style={props.textstyle2()}>{text.length>0?text:"Nothing to preview..."}</p>
            </div>
        </div>
    )
}

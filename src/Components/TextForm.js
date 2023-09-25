import React, { useState } from 'react'
export default function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState("")
    const handleUpClick = () => {

        if (text.length > 0) {
            let newtext = text.toUpperCase();
            setText(newtext)
            showAlert("Text has been converted to Upper Case", "success")
        }
        else showAlert("Please Enter Text First", "warning")
    }
    const handleLowClick = () => {

        if (text.length > 0) {
            let newtext = text.toLowerCase();
            setText(newtext)
            showAlert("Text has been converted to Lower Case", "success")
        }
        else showAlert("Please Enter Text First", "warning")
    }
    const handleClrClick = () => {

        if (text.length > 0) {
            let newtext = '';
            setText(newtext)
            showAlert("Text has been Cleared", "success")
        }
        else showAlert("Please Enter Text First", "warning")
    }
    const handleCopyClick = () => {
        if (text.length > 0) {
            navigator.clipboard.writeText(text);
            showAlert("Text has been copied to clipboard", "success")
        }
        else showAlert("Please Enter Text First", "warning")
    }
    const handleSpcClick = () => {
        if (text.length > 0) {
            let txt = text.split(/[ ]+/);
            setText(txt.join(" "))
            showAlert("Extra Spaces in the text has been Removed", "success")
        }
        else showAlert("Please Enter Text First", "warning")



    }
    const handleSpchClick = () => {
        const msg = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        msg.pitch = 1;
        msg.voice = voices[3];
        msg.rate = .8;
        speechSynthesis.speak(msg);
    }
    const handleStopClick = () => {
        const stop = window.speechSynthesis;
        stop.cancel();
        showAlert("Speech has been stopped", "success")
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div style={{ color: mode === 'light' ? 'black' : 'white' }}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea value={text} placeholder="Enter Text Here" style={{ backgroundColor: mode === 'light' ? 'white' : 'grey', color: mode === 'light' ? 'black' : 'white' }} onChange={handleChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-3">Convert To UpperCase</button>
                <button onClick={handleLowClick} className="btn btn-primary mx-3">Convert To LowerCase</button>
                <button onClick={handleClrClick} className="btn btn-primary mx-3">Clear Text</button>
                <button onClick={handleCopyClick} className="btn btn-primary mx-3">Copy to Clipboard</button>
                <button onClick={handleSpcClick} className="btn btn-primary mx-3">Remove Extra Spaces</button>
                <button onClick={handleSpchClick} className="btn btn-primary mx-3">Text-to-Speech</button>
                <button onClick={handleStopClick} className="btn btn-primary mx-3">Stop Speech</button>


                {/* <button onClick={handleUpClick} className="btn btn-primary">Convert To UpperCase</button> */}
            </div>
            <div className='container my-3' style={{ color: mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length - 1} Words & {text.length} Characters</p>
                <p>Time Required for Reading Entered Text :{(text.split(" ").length - 1) * 0.008} min</p>
            </div>
        </>
    )
}

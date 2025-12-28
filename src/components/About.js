import React from 'react'

export default function About(props) {
  return (
    <div className="container">
        <h1 className="my-4" style={props.textstyle2()}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={props.textstyle1()} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyse your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.textstyle1()}>
                <strong>The Text Utility Application is a React-based web application</strong> designed to help users efficiently analyze 
                    and manipulate text. It provides various text-processing features that are commonly required in day-to-day tasks 
                    such as formatting, cleaning, and analyzing written content. Users can enter or paste text into the application 
                    and perform operations like converting text to uppercase or lowercase, removing extra spaces, copying text, and 
                    clearing text. The application also displays useful statistics such as word count, character count, and estimated 
                    reading time, helping users better understand their text.
            </div>
            </div>
        </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={props.textstyle1()} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={props.textstyle1()}>
            The Text Utility Application is a <strong>free-to-use web application</strong> that helps users easily analyze and modify text without 
            any cost or registration. It is designed to provide quick and efficient text-processing tools that can be accessed by 
            anyone, anytime.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={props.textstyle1()} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={props.textstyle1()}>
            The Text Utility Application is a <strong>fully browser-compatible web application</strong> that works smoothly across modern web browsers 
            such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Users can access all features directly through their 
            browser without installing any additional software or plugins.
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

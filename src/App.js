// PS D:\React_Js_Learning> npx create-react-app my-app
// PS D:\React_Js_Learning\my-app> npm start
// PS D:\React_Js_Learning\my-app> npm run build
// PS D:\React_Js_Learning\my-app> npm install react-router-dom

import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import React, {useState} from 'react' // useState is a react hook

function App() {
  const [Mode, setMode] = useState('light')
  const [Alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)},2000)}
  const togglemode = () => {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(21 35 56)'
      showAlert('Dark Mode has been enabled', 'Success')
      //document.title = 'TextUtils - DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'Success')}}
  const text = () => {
    if(Mode === 'light'){return ('text-dark')}
    else{return ('text-light')}}

  const textstyle1 = () => {
    if(Mode === 'light'){
      return {backgroundColor: 'white', color: 'black'}}
    else{
      return {backgroundColor: 'rgb(81 90 104)', color: 'white'}}}

  const textstyle2 = () => {
    if(Mode === 'light'){return {backgroundColor: 'white', color: 'black'}}
    else{return {color: 'white'}}}

  return (
    <>
    <Router>
    <Navbar title="Text Utility" about="About" home="Home" search="Search" mode={Mode} togglemode={togglemode} text={text}/>
    <Alerts alerttext={Alert}/>
    <div className="container">
    <Routes>
      <Route exact path="/about" element={<About textstyle1={textstyle1} textstyle2={textstyle2}/>}/>
      <Route exact path="/" element={<TextForm text="Try TextUtils - Word Counter, Character Counter" mode={Mode} textstyle1={textstyle1} textstyle2={textstyle2} showalert={showAlert}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
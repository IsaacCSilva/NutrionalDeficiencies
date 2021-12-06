import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import Linegrph from './components/Linegrph'
import React, {Component, useState, useEffect} from "react";
import DailyValuePopUp from './DailyValuePopUp.js'
import TestResultPopUp from './TestResultPopUp.js'
import ProgressBar from './ProgressBar.js';
import styled from 'styled-components';
import Tabs from "./components/Tabs";
import {AmplifySignOut, withAuthenticator, AmplifyAuthenticator} from '@aws-amplify/ui-react'
import Recommendations from './Recommendations';
import {Storage} from 'aws-amplify';
Amplify.configure(awsconfig)

function App()  {


  const [isOpen, setIsOpen] = useState(false);
  const [showElement,setShowElement] = React.useState(true)
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);
 
  const togglePopup = () => {
    if(!isOpen2 && !isOpen3){
      setIsOpen(!isOpen);
    }
  }
   const [isOpen2, setIsOpen2] = useState(false);
 
  const togglePopup1 = () => {
    if(!isOpen && !isOpen3){
      setIsOpen2(!isOpen2);
    }
  }
  const [isOpen3, setIsOpen3] = useState(false);
 
  const togglePopup2 = () => {
    if(!isOpen2 && !isOpen){
      setIsOpen3(!isOpen3);
    }
  }
  // const [blank, setBlank] = useState('');

  // const input = () => {
  //   setBlank("hello")
  // }

  // const submit = () => {
  //   console.log("hello")
  // }

    return (
    <div className="App">
      <header className="App-header">

        <div className="head">

          <h2 className = "title">Nutrigoals</h2>
                          {/* <button className="home" >Home</button> */}
                {/* <button className="recommended">Recommendations</button> */}
                <input type = "button" onClick = {togglePopup2} value = "Recommendations" className="recommended" />
                {isOpen3 && <Recommendations handleClose = {togglePopup2} />}
                
                  
                {/* <button className= "profile" 
         >Profile</button> */}
                   <AmplifySignOut> </AmplifySignOut > 

      </div>
      <div className="chart">
        {localStorage.setItem('coin', 0)}
                          <ProgressBar opencheck = {togglePopup2} con = {showElement}/>
                          <h1 className = "pBarpercentdesc"> Daily Value </h1>
      </div>

      </header>

      <input type = "button" onClick = {togglePopup} value = "+ Add Test Result" className="DailyValue" />
      {isOpen && <TestResultPopUp handleClose = {togglePopup} />}

      <input className="TestResult" onClick = {togglePopup1} type = "button" value="+ Add Daily Value" />
      {isOpen2 && <DailyValuePopUp handleClose = {togglePopup1} />}
{/* 
      <h1 className= "coinCount"> 0</h1>
      <img className = "coinLogo" src="./coinIcon.png"  /> */}
      
    </div>

    );
  
}

export default withAuthenticator(App);
// export default withAuthenticator(App);





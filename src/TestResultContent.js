import React, { Component } from "react";
import Select from 'react-select';
import Recommendations from "./Recommendations";
import {Storage} from 'aws-amplify';

const actions1 = [
    { label: "Vitamin B6", value: 1 },
    { label: "Iron", value: 2 },
    { label: "Vitamin D", value: 3 },
    { label: "Vitamin C", value: 4 },
    { label: "Vitamin B12", value: 5 },
    { label: "Magnesium", value: 6 },
  ];

class TestResultContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            measurement: localStorage.getItem('mkey'),
            value : (localStorage.getItem('key') !== null ? localStorage.getItem('key') : "select") 
        }

    }
    handleMeasurement  = (event) => {
        this.setState({
            measurement: event.target.value
        })
    }
    onChange(e) {
        this.setState({
          value: e.target.value
        })

      }
    handleSubmit = event => {
        this.setState({
            measurement: event.target.value,
            topic: event.target.value
        })
        // alert( `Your measurement of ${this.state.value} has been saved.`)
        if((this.state.value == "Iron" && this.state.measurement < 60) ||(this.state.value=="Vitamin D" && this.state.measurement < 12) 
        || (this.state.value == "Vitamin C" && this.state.measurement < 0.4 )|| (this.state.value == "Vitamin B6" && this.state.measurement < 5) 
        || (this.state.value == "Vitamin B12" && this.state.measurement < 200) || (this.state.value == "Magnesium" && this.state.measurement < 1.0)){
          localStorage.setItem("key", (this.state.value));
          alert("Saved! Check out the Recommendation Page!");

        }
        else{
          localStorage.setItem("key", "select");
          alert("No deficiency detected!");

        }
        localStorage.setItem("mkey", this.state.measurement);
        // alert("Saved! Check out the Recommendation Page! It has been updated.");
        // alert("You're value of " + JSON.stringify(this.state.measurement) + "of " + JSON.stringify(this.state.value) + " is saved");
    }
    show=(e)=>{
        let value = localStorage.getItem("key");
        this.setState({val:value});
        alert('Stored value is ' + value);
      }





    render(){

        return(
            // onSubmit = {this.handleSubmit}
            <form onSubmit = {this.handleSubmit}>  
            <h3 className = "AddValue">Add Test Results </h3>
              {/* <Select options={ actions1 }/> */}
        <select value={this.state.value} className = "selectionDeficiency" onChange={this.onChange.bind(this)} >
          <option value="select">Select</option>
          <option value="Vitamin B6">Vitamin B6</option>
          <option value="Iron">Iron</option>
          <option value="Vitamin D">Vitamin D</option>
          <option value="Vitamin C">Vitamin C</option>
          <option value="Vitamin B12">Vitamin B12</option>
          <option value="Magnesium">Magnesium</option>
        </select>
                 <br />
            <input type="number" min = "0" step="0.1" className="textDailyAmount" value = {this.state.measurement} onChange = {this.handleMeasurement} required/>
            {(this.state.value == "Vitamin B6" || this.state.value=="Vitamin D") && <h4 className = "amountDaily">ng/mL</h4>}
            {(this.state.value == "Vitamin C" || this.state.value =="Magnesium") && <h4 className = "amountDaily">mg/mL</h4>}
            {(this.state.value == "Iron") && <h4 className = "amountDaily">mcg/mL</h4>}
            {(this.state.value == "Vitamin B12") && <h4 className = "amountDaily">pg/mL</h4>}
            {this.state.value == "select" && <h4 className = "amountDaily">Level</h4>}


                 <br />

            <input type="submit" value="Save"  className = "SaveDailyIntake" />
          </form>
        )
    }

}
export default TestResultContent;
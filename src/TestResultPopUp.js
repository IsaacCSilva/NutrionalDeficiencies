import React, { Component } from "react";
import Select from 'react-select';
import TestResultContent from './TestResultContent.js'
const actions1 = [
  { label: "Vitamin B6", value: 1 },
  { label: "Iron", value: 2 },
  { label: "Vitamin D", value: 3 },
  { label: "Vitamin C", value: 4 },
  { label: "Vitamin B12", value: 5 },
  { label: "Magnesium", value: 6 },
];

const TestResultPopUp = props => {

    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={props.handleClose}>
            &times;
          </span>
          {/* <form> 
            <h3 className = "AddValue">Add Test Results </h3>
              <Select options={ actions1 } />

                 <br />
            <input type="number" min = "0" step="0.1" className="textDailyAmount"  />
            <h4 className = "amountDaily">Level</h4>
                 <br />

            <input type="submit" value="Save" className = "SaveDailyIntake" />
          </form> */}
          <TestResultContent/>
        </div>
      </div>
    );

};

export default TestResultPopUp;

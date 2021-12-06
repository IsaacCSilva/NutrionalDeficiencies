import React, { Component } from "react";
import Select from 'react-select';
import DailyValueContent from './DailyValueContent.js'
 
const actions = [
  { label: "Chick Peas, canned 1 cup", value: 1 },
  { label: "Beef liver, pan fried, 3 ounces ", value: 2 },
  { label: "Tuna, yellowfin, fresh, cooked, 3 ounces", value: 3 },
  { label: "Salmon, sockeye, cooked, 3 ounces", value: 4 },
  { label: "Chicken breast, roasted, 3 ounces ", value: 5 },
  { label: "Breakfast cereals, fortified with 25% of the DV for vitamin B6", value: 6 },
  { label: "Potatoes, boiled, 1 cup", value: 7 },
  { label: "Turkey, meat only, roasted, 3 ounces ", value: 8 },
  { label: "Banana, 1 medium", value: 9 },
  { label: "Marinara (spaghetti) sauce, ready to serve, 1 cup", value: 10 },
  { label: "Ground Beef, patty, 85% lean, broiled, 3 ounces", value: 11 },
  { label: "Waffles, plain, ready to heat, toasted, 1 waffle", value: 12 },
  { label: "Bulgur, cooked, 1 cup", value: 13 },
  { label: "Cottage cheese 1% low-fat, 1 cup", value: 14 },
  { label: "Squash, winter, baked 1/2 cup", value: 15},
  { label: "Rice, white, long-grain, enriched, cooked, 1 cup", value: 16},
  { label: "Nuts, mixed, dry-roasted, 1 ounce", value: 17},
  { label: "Raisins, seedless, 1/2 cup", value: 18 },
  { label: "Onions, chopped, 1/2 cup", value: 19 },
  { label: "Spinach, frozen, chopped, boiled, 1/2 cup", value: 20},
  { label: "Tofu, raw, firm, prepared with calcium sulfate, 1/2 cup", value: 21 },
  { label: "Watermelon, raw, 1 cup", value: 22 }
];

const DailyValuePopUp = props =>{


    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={props.handleClose}>
            &times;
          </span>
          {/* <form>
            <h3 className = "AddValue">Add New Daily Intake</h3>
              <Select value = {this.state.value} options={ actions } />

                 <br /> */}

                 {/* <div>l
  <input type="radio" id="male" name="gender" value="Male"/>
  <label for="male" style = {{ color: "#FF9900", fontWeight:"bold"}}>Male</label>
</div>

<div>
  <input type="radio" id="female" name="gender" value="Female"/>
  <label for="female" style = {{ color: "#FF9900", fontWeight:"bold"}}>Female</label>
</div> */}
{/* 

                 <br/>
            <input type="number" min = "0" step="0.1" className="textDailyAmount" />
            <h4 className = "amountDaily">Milligrams (mg) per serving</h4>
                 <br />

            <input type="submit" value="Save" className = "SaveDailyIntake" />
          </form> */}
          <DailyValueContent />
        </div>
      </div>
    );

};

export default DailyValuePopUp;

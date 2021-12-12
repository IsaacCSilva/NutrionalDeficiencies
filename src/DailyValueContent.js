import React, { Component } from "react";
import Select from 'react-select';
import Recommendations from "./Recommendations";
import {Storage} from 'aws-amplify';
import ValueCommunicator from "./ValueCommunicator";

const VitaminB6actions = [
    { label: "select", value: 0 },
    { label: "Chick Peas, canned 1 cup", value: 84.6 },
    { label: "Beef liver, pan fried, 3 ounces", value: 69.2 },
    { label: "Tuna, yellowfin, fresh, cooked, 3 ounces", value: 69.2 },
    { label: "Salmon, sockeye, cooked, 3 ounces", value: 46.2 },
    { label: "Chicken breast, roasted, 3 ounces ", value: 38.5 },
    { label: "Breakfast cereals, fortified with 25% of the DV for vitamin B6", value: 30.8 },
    { label: "Potatoes, boiled, 1 cup", value: 30.8 },
    { label: "Turkey, meat only, roasted, 3 ounces ", value: 30.8 },
    { label: "Banana, 1 medium", value: 30.8 },
    { label: "Marinara (spaghetti) sauce, ready to serve, 1 cup", value: 30.8 },
    { label: "Ground Beef, patty, 85% lean, broiled, 3 ounces", value: 23.1 },
    { label: "Waffles, plain, ready to heat, toasted, 1 waffle", value: 23.1 },
    { label: "Bulgur, cooked, 1 cup", value: 15.4 },
    { label: "Cottage cheese 1% low-fat, 1 cup", value: 15.4 },
    { label: "Squash, winter, baked 1/2 cup", value: 15.4},
    { label: "Rice, white, long-grain, enriched, cooked, 1 cup", value: 7.7},
    { label: "Nuts, mixed, dry-roasted, 1 ounce", value: 7.7},
    { label: "Raisins, seedless, 1/2 cup", value: 7.7 },
    { label: "Onions, chopped, 1/2 cup", value: 7.7 },
    { label: "Spinach, frozen, chopped, boiled, 1/2 cup", value: 7.7},
    { label: "Tofu, raw, firm, prepared with calcium sulfate, 1/2 cup", value: 7.7 },
    { label: "Watermelon, raw, 1 cup", value: 7.7 }
  ];
  const Ironactions = [
    { label: "select", value: 0 },
    { label: "Breakfast cereals, fortified with 100% of the DV for iron, 1 serving", value: 100 },
    { label: "Oysters, eastern, cooked with moist heat, 3 ounces", value: 100 },
    { label: "White beans, canned, 1 cup", value: 100 },
    { label: "Chocolate, dark, 45%-69% cacoa solids, 3 ounces", value: 87.5 },
    { label: "Beef liver, pan fried, 3 ounces", value: 62.5 },
    { label: "Lentils, boiled and drained, 1/2 cup", value: 37.5 },
    { label: "Spinach, boiled and drained, 1/2 cup", value: 37.5 },
    { label: "Tofu, firm, 1/2 cup", value: 37.5},
    { label: "Kidney beans, canned, 1/2 cup", value: 25 },
    { label: "Sardines, Atlantic, canned in oil, drained solids with bone, 3 ounces", value: 25 },
    { label: "Chickpeas, boiled and drained, 1/2 cup", value: 25 },
    { label: "Tomatoes, canned, stewed, 1/2 cup", value: 25 },
    { label: "Beef, braised bottom round, trimmed to 1/8' fat, 3 ounces", value: 25 },
    { label: "Potato, baked, flesh and skin, 1 medium potato", value: 25 },
    { label: "Cashew nuts, oil roasted, 1 ounce (18 nuts)", value: 25},
    { label: "Green peas, boiled, 1/2 cup", value: 12.5},
    { label: "Chicken, roasted, meat and skin, 3 ounces", value: 12.5},
    { label: "Rice, white, long grain, enriched, parboiled, drained, 1/2 cup", value: 12.5 },
    { label: "Bread, whole wheat, 1 slice", value:12.5 },
    { label: "Bread, white, 1 slice", value:12.5},
    { label: "Raisins, seedless, 1/4 cup", value: 12.5 },
    { label: "Spaghetti, whole wheat, cooked, 1 cup", value: 12.5 },
    { label: "Tuna light, canned in water, 3 ounces", value: 12.5},
    { label: "Turkey, roasted, breast meat and skin, 3 ounces", value: 12.5 },
    { label: "Nuts, pistachio, dry roasted, 1 ounce (49 nuts)", value: 12.5},
    { label: "Broccoli, boiled and drained, 1/2 cup", value: 12.5 },
    { label: "Egg, hard boiled, 1 large", value: 12.5 },
    { label: "Rice, brown, long and medium grain, cooked, 1 cup", value: 12.5 },
  ];
  const VitaminDactions = [
    { label: "select", value: 0 },
    { label: "Cod liver oil, 1 tablespoon", value: 100 },
    { label: "Trout (rainbow), farmed, cooked, 3 ounces", value: 100 },
    { label: "Salmon (sockeye), cooked, 3 ounces", value: 94.7 },
    { label: "Mushrooms, white, raw, sliced, exposed to UV light, 1/2 cup", value: 61.3 },
    { label: "Milk, 2% milkfat, vitamin D fortified, 1 cup", value: 19.3 },
    { label: "Soy, almond, and oat milks, vitamin D fortified, various brands, 1 cup", value: 16.7 },
    { label: "Ready-to-eat cereal, fortified with 10% of the DV for vitamin D, 1 serving", value: 13.3 },
    { label: "Sardines (Atlantic), canned in oil, drained, 2 sardines", value: 8 },
    { label: "Egg, 1 large, scrambled", value: 7.3},
    { label: "Liver, beef, braised, 3 ounces", value: 6.7 },
    { label: "Tuna fish (light), canned in water, drained, 3 ounces", value: 6.7 },
    { label: "Cheese, cheddar, 1.5 ounce", value: 2.6 },
    { label: "Mushrooms, portabella, raw diced, 1/2 cup", value: 0.7 },
    { label: "Chicken breast, roasted, 3 ounces", value: 0.7 },
  ];
  const VitaminCactions = [
    { label: "select", value: 0 },
    { label: "Red Pepper, sweet, raw, 1/2 cup", value: 100 },
    { label: "Orange juice, 3/4 cup", value: 100 },
    { label: "Orange, 1 medium", value: 77.8 },
    { label: "Grapefruit juice, 3/4 cup", value: 77.8 },
    { label: "Kiwifruit, 1 medium", value: 71.1 },
    { label: "Green pepper, sweet, raw, 1/2 cup", value: 66.7 },
    { label: "Broccoli, cooked, 1/2 cup", value: 56.7},
    { label: "Strawberries, fresh, sliced, 1/2 cup", value: 54.4 },
    { label: "Brussels sprouts, cooked, 1/2 cup", value: 53.3 },
    { label: "Grapefruit, 1/2 medium", value: 43.3},
    { label: "Broccoli, raw, 1/2 cup", value: 43.3 },
    { label: "Tomato juice, 3/4 cup", value: 36.7 },
    { label: "Cantaloupe, 1/2 cup", value: 32.2 },
    { label: "Cabbage, cooked, 1/2 cup", value: 31.1},
    { label: "Cauliflower, raw, 1/2 cup", value: 28.9},
    { label: "Potato, baked, 1 medium", value: 18.9},
    { label: "Tomato, raw, 1 medium", value: 18.9},
    { label: "Spinach, cooked, 1/2 cup", value: 10 },
    { label: "Green Peas, frozen, cooked, 1/2 cup", value: 8.9 },
  ];

  const VitaminB12actions = [
    { label: "select", value: 0 },
    { label: "Beef liver, cooked, pan-fried, 3 ounces", value: 100 },
    { label: "Clams (without shells), cooked, 3 ounces", value: 100 },
    { label: "Tuna, bluefin, cooked, dry heat, 3 ounces", value: 100 },
    { label: "Nutritional yeast, fortified, from several brands (check label), about 1/4 cup", value: 100 },
    { label: "Salmon, Atlantic, cooked, 3 ounces", value: 100 },
    { label: "Beef, ground, 85% lean meat/15% fat, pan-browned, 3 ounces", value: 100 },
    { label: "Milk, 2% milkfat, 1 cup", value: 54.2 },
    { label: "Yogurt, plain, fat free, 6-ounce container", value: 41.7 },
    { label: "Breakfast cereals, fortified with 25% of the DV for vitamin B12, 1 serving", value: 25 },
    { label: "Cheese, cheddar, 1 1/2 ounces", value: 20.8 },
    { label: "Egg, whole, cooked, 1 large", value: 20.8 },
    { label: "Turkey, breast meat, roasted, 3 ounces", value: 12.5 },
    { label: "Tempeh, 1/2 cup", value: 4.2 }
  ];

  const Magnesactions = [
    { label: "select", value: 0 },
    { label: "Pumpkin seeds, roasted, 1 ounce", value: 39 },
    { label: "Chia seeds, 1 ounce", value: 27.8 },
    { label: "Almonds, dry roasted, 1 ounce", value: 20 },
    { label: "Spinach, boiled, 1/2 cup", value: 19.5 },
    { label: "Cashews, dry roasted, 1 ounce", value: 18.5 },
    { label: "Peanuts, oil roasted, 1/4 cup", value: 15.8},
    { label: "Cereal, shredded wheat, 2 large bisquits", value: 15.3 },
    { label: "Soymilk, plain or vanilla, 1 cup", value: 15.3 },
    { label: "Black beans, cooked, 1/2 cup", value: 15 },
    { label: "Edamame, shelled, cooked, 1/2 cup", value: 12.5 },
    { label: "Peanut butter, smooth, 2 tablespoons", value: 12.3},
    { label: "Potato, baked with skin, 3.5 ounces", value: 10.8 },
    { label: "Rice, brown, cooked, 1/2 cup", value: 10.5 },
    { label: "Yogurt, plain, low fat, 8 ounces", value: 10.5 },
    { label: "Breakfast cereals, fortified with 10% of the DV for magnesium, 1 serving", value: 10.5},
    { label: "Oatmeal, instant, 1 packet", value: 9},
    { label: "Kidney beans, canned, 1/2 cup", value: 8.8},
    { label: "Banana, 1 medium", value: 8},
    { label: "Salmon, Atlantic, farmed, cooked, 3 ounces", value: 6.5},
    { label: "Milk, 1 cup", value: 6},
    { label: "Halibut, cooked, 3 ounces", value: 6},
    { label: "Raisins, 1/2 cup", value: 5.8},
    { label: "Bread, whole wheat, 1 slice", value: 5.8},
    { label: "Avocado, cubed, 1/2 cup", value: 5.5},
    { label: "Chicken breast, roasted, 3 ounces", value: 5.5},
    { label: "Beef, ground, 90% lean, pan broiled, 3 ounces", value: 5},
    { label: "Broccoli, chopped and cooked, 1/2 cup", value: 3},
    { label: "Rice, white, cooked, 1/2 cup", value: 2.5},
    { label: "Apple, 1 medium", value: 2.3},
    { label: "Carrot, raw, 1 medium", value: 1.8},
  ];

class DailyValueContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            measurement: '',
            value : localStorage.getItem('dkey'),
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
            topic: event.target.value,
                })
        // alert( `Your measurement of ${this.state.value} has been saved.`)
        localStorage.setItem("dkey", (this.state.value));
        localStorage.setItem("fkey", "hey")
        // alert(localStorage.getItem("dkey"))
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
            
            <form onSubmit={this.handleSubmit}>
            <h3 className = "AddValue">Add New Daily Intake</h3>
            {/* <h3 className = "AddValue">{this.props.testtt}</h3> */}

              {/* <Select  options={ actions } /> */}
              <select className = "selectionDeficiency" onChange={this.onChange.bind(this)} >
                  {localStorage.getItem('key') === "Vitamin B6" && VitaminB6actions.map(s=> ( <option value={s.value}>{s.label}</option>))}
                  {localStorage.getItem('key') === "Iron" && Ironactions.map(s=> (<option value={s.value}>{s.label}</option>))}
                  {localStorage.getItem('key') === "Vitamin C" && VitaminCactions.map(s=> (<option value={s.value}>{s.label}</option>))}
                  {localStorage.getItem('key') === "Vitamin D" && VitaminDactions.map(s=> (<option value={s.value}>{s.label}</option>))}
                  {localStorage.getItem('key') === "Vitamin B12" && VitaminB12actions.map(s=> (<option value={s.value}>{s.label}</option>))}
                  {localStorage.getItem('key') === "Magnesium" && Magnesactions.map(s=> (<option value={s.value}>{s.label}</option>))}
                  {localStorage.getItem('key') === "select" && null}
          {/* <option value="select">Select</option>
          <option value="65">Chick Peas, canned 1 cup</option>
          <option value="53">Beef liver, pan fried, 3 ounces</option>
          <option value="Vitamin D">Vitamin D</option>
          <option value="Vitamin C">Vitamin C</option>
          <option value="Vitamin B12">Vitamin B12</option>
          <option value="Magnesium">Magnesium</option> */}
        </select>
                 <br />


                 <br/>
            {/* <input type="number" min = "0" step="0.1" className="textDailyAmount" />
            <h4 className = "amountDaily">Milligrams (mg) per serving</h4> */}
                 <br />

            <input type="submit" value="Save"  className = "SaveDailyIntake" />
          </form>
        )
    }

}
export default DailyValueContent;
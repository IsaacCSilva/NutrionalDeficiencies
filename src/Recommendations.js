import React, { Component, useState } from "react";


const Recommendations = props => {
    const Fruits = [
        { name: "Chick Peas, canned 1 cup"},
        { name: "Beef liver, pan fried, 3 ounces "},
        { name: "Tuna, yellowfin, fresh, cooked, 3 ounces"},
        { name: "Salmon, sockeye, cooked, 3 ounces"},
        { name: "Chicken breast, roasted, 3 ounces "},
        { name: "Breakfast cereals, fortified with 25% of the DV for vitamin B6"},
        { name: "Potatoes, boiled, 1 cup"},
        { name: "Turkey, meat only, roasted, 3 ounces"},
        { name: "Banana, 1 medium"}, 
        { name: "Marinara (spaghetti) sauce, ready to serve, 1 cup"},
        { name: "Ground Beef, patty, 85% lean, broiled, 3 ounces"},
        { name: "Waffles, plain, ready to heat, toasted, 1 waffle"},
        { name: "Bulgur, cooked, 1 cup"},
        { name: "Cottage cheese 1% low-fat, 1 cup"},
        { name: "Squash, winter, baked 1/2 cup"},
        { name: "Rice, white, long-grain, enriched, cooked, 1 cup"},
        { name: "Nuts, mixed, dry-roasted, 1 ounce"},
        { name: "Raisins, seedless, 1/2 cup"},
        { name: "Onions, chopped, 1/2 cup"},
        { name: "Spinach, frozen, chopped, boiled, 1/2 cup"},
        { name: "Tofu, raw, firm, prepared with calcium sulfate, 1/2 cup"},
        { name: "Watermelon, raw, 1 cup"}
      ];
      const [valstate, setvalstate] = useState("Select");
      
    return (
      <div className="modal">
        <div className="modal_content1">
          <span className="close" onClick={props.handleClose}>
            &times;
          </span>
          <form>
              <h1 style = {{color: 'cornflowerblue', fontWeight:'bold'}}>Recommendations</h1>
              {localStorage.getItem('key') === "Magnesium" && <img className = "RecommendedMagnesium" src="./recommendedMagnesium.png"  />}
              {localStorage.getItem('key') === "Vitamin D" && <img className = "RecommendedMagnesium" src="./VitaminD.png"  />}
              {localStorage.getItem('key') === "Vitamin C" && <img className = "RecommendedMagnesium" src="./VitaminC.png"  />}
              {localStorage.getItem('key') === "Iron" && <img className = "RecommendedMagnesium" src="./iron.png"  />}
              {localStorage.getItem('key') === "Vitamin B6" && <img className = "RecommendedMagnesium" src="./VitaminB6.png"  />}
              {localStorage.getItem('key') === "Vitamin B12" && <img className = "RecommendedMagnesium" src="./VitaminB12.png"  />}
              {localStorage.getItem('key') === "select" && <img className = "RecommendedMagnesium" src="./DefaultD.png"  />}

            {/* <div className= "recommendlist">
            {Fruits.map(data => (
        <p style={{borderBottom:"1px solid #FF9900"}}>{data.name}</p>
      ))}
            </div> */}
          {/* <img className = "RecommendedMagnesium" src="./recommendedMagnesium.png"  /> */}
          </form>
        </div>
      </div>
    );

};

export default Recommendations;
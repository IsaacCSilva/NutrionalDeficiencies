import React, { Component } from "react";
import DailyValueContent from './DailyValueContent';

class ValueCommunicator extends Component{
        constructor(props){
        super(props)
        this.state = {
                amount: parseInt(localStorage.getItem("coinnn")),
        }
        this.incrementClicks = this.incrementClicks.bind(this)

        }
        incrementClicks(){
                this.setState((prev) => ({ amount: prev.amount + 5}));
                localStorage.setItem('coinnn', (this.state.amount) + 5);
                alert(this.state.amount)
	}
     render(){                
    return(
        <>
        {/* {localStorage.getItem("fkey") !== null && this.incrementClicks()} */}
        	 {/* {this.state.currentTime == 2 && localStorage.setItem('pkey',0) } */}
	{/* {localStorage.getItem('pkey') == 0 && localStorage.setItem('coin',this.state.coin)}   */}                   
        {/* {(parseFloat(localStorage.getItem('pkey')) >= 50.0 && parseFloat(localStorage.getItem('pkey'))<90.0) && parseInt(localStorage.setItem('coin', (this.state.amount += 5))) } */}
        {/* {(this.props.test >= 90.0) && (this.state.amount += 7)} */}
        {/* {localStorage.getItem('coinnn') === null && localStorage.setItem('coinnn', 0)} */}
        {/* {localStorage.getItem("fkey") !== null && (this.props.test + 5)} */}
        	{/* <ValueCommunicator test = {this.state.coin}/> */}
	{/* {localStorage.getItem("fkey") !== null && this.increment()} */}
	{/* {parseInt(localStorage.getItem('pkey')) >= 90.0 && localStorage.setItem('ckey',JSON.stringify(this.state.coin + 5))}
	{(parseInt(localStorage.getItem('pkey')) >= 50.0 && parseInt(localStorage.getItem('pkey')) < 90.0) && localStorage.setItem('ckey',JSON.stringify(this.state.coin + 5))}
	{parseInt(localStorage.getItem('pkey')) == 0 && localStorage.setItem('ckey',this.state.coin)} */}       
        <h1 className= "coinCount">{this.props.test}</h1>

        <img className = "coinLogo" src="./coinIcon.png"  />     </>    

        )
    }
}

export default ValueCommunicator;
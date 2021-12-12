import React, {Component, useState, useEffect} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DailyValuePopUp from './DailyValuePopUp';
import { throwStatement } from '@babel/types';
import DailyValueContent from './DailyValueContent';
import ValueCommunicator from './ValueCommunicator';
import Linegrph from './components/Linegrph'
import Confetti from 'react-confetti'
const Track = styled.div`
	width: 35%;
	height: 100px;
	background-color: ghostwhite;
	border-radius: 10px;
	box-shadow: inset 0 0 5px #000;
	margin-left: 1128px;
	position: absolute;
	bottom: 320px;
`;

const Thumb = styled.div`
	width: ${props => props.percentage}%;
	height: 100%;
	background-color: cornflowerblue;
	border-radius: 8px;
	max-width: 100%;
`;


export default class ProgressBar extends React.Component{
	constructor(props) {
		super(props)

		var today = new Date(),
		time = today.getHours();
		var today = new Date(),
		timee = today.getMinutes();
		var today = new Date(),
		timeee = today.getSeconds();
		
		this.state = {
		  percentage: ((localStorage.getItem('pkey')) !== null ? parseFloat(localStorage.getItem('pkey')) : 0),
		  coin: JSON.parse(localStorage.getItem('coin')),
		  currentTime: time,
		  currentMinutes: timee,
		  currentSeconds: timeee,
		  test: true,
		}
		// localStorage.setItem("pkey",0)
		var m = ((23-today.getHours()) * 3600000) + ((59-today.getMinutes()) * 60000) + ((59-today.getSeconds()) * 1000) + 1;
		localStorage.setItem("t", "yes")

		setInterval(() => {
			localStorage.setItem('pkey', 0)
					  }, parseInt(m));

		setTimeout(() => {
			console.log("remove")
			localStorage.removeItem("t")
		}, 5000);

		// localStorage.setItem('ckey', this.state.coin)
		// if(parseFloat(localStorage.getItem('pkey')) === 0){
		// 	this.setState({coin: localStorage.getItem("coin")});
		// 	localStorage.setItem("coin", this.state.coin);
		// }
		// localStorage.setItem('pkey', 0)
		// localStorage.setItem('pkey', 0) //TO RESET
		// localStorage.setItem('test', 0)
		// if(this.state.currentTime === 22){
		// 	this.setState({      percentage: 0    })
		// 	localStorage.setItem('pkey', 0)
		// }
		// localStorage.setItem("count1", "0")
		// localStorage.setItem("count2", "0")
		// localStorage.setItem("count3", "0")

		this.nextStep = this.nextStep.bind(this);

	  }
	  componentDidMount(){
		const l2 = localStorage.getItem('test')
		this.setState({ test: false})

		const l3 = "5"
		const l4 = "7"

		if(	parseFloat(l2)>= 90.0){
			this.setState((prev) => ({ coin: prev.coin + 7}))
			localStorage.setItem("coin", this.state.coin + parseInt(l4))
		}
		else if (parseFloat(l2) >= 50.0 && parseFloat(l2) < 90.0){
			this.setState((prev) => ({ coin: prev.coin + 5}))
			localStorage.setItem("coin", this.state.coin + parseInt(l3))
		}
		else{
			localStorage.setItem("coin", this.state.coin)

		}
	  }

	//   setState(state) {
	// 	localStorage.setItem('coin', JSON.stringify(state));
	// 	super.setState(state);
	//   }
	
	//   componentDidMount(){
	// 	const l2 = localStorage.getItem('test')

	// 	const l3 = "5"
	// 	const l4 = "7"
	// 	const countt = localStorage.getItem("count1");
	// 	const countt1 = localStorage.getItem("count2");
	// 	const countt2 = localStorage.getItem("count3");
	// 	var count = countt;
	// 	var count1 = countt1;
	// 	var count2 = countt2;

	// 	// alert(localStorage.getItem("coin"))
	// 	if(	parseFloat(l2)>= 90.0 && (count) < 1){
	// 		count = (count) + 1;
	// 		// this.setState(previousState => ({
	// 		// 	coin: previousState.coin + 7
	// 		// 	}))			
	// 		// this.setState({coin: parseInt(localStorage.getItem("coin")) + parseInt(l4)});
	// 		// //this.setState({...this.state, coin: this.state.coin + 7});
	// 		// // alert(localStorage.getItem('coin'))
	// 		// localStorage.setItem("coin", JSON.stringify(parseInt(localStorage.getItem("coin"))+ parseInt(l4)))
	// 		// const g = localStorage.getItem("coin");
	// 		// // alert(localStorage.getItem('qkey'))
	// 		// localStorage.setItem("qkey", g);
	// 		this.setState({coin: (parseInt(localStorage.getItem("qkey") + 7))})
	// 		//this.setState({...this.state, coin: this.stat
	// 		// e.coin + 5});
	// 		// alert(localStorage.getItem('coin'))

	// 		localStorage.setItem("coin", JSON.stringify(parseInt(localStorage.getItem("qkey"))+ parseInt(l4)))
	// 		// alert(localStorage.getItem('coin'))
	// 		const g = localStorage.getItem("coin");
	// 		localStorage.setItem("qkey", g);

	// 	}
	// 	else if (parseFloat(l2) >= 50.0 && parseFloat(l2) < 90.0 && (count1) < 1){
	// 		(count1) = (count1) + 1;
	// 		// alert(localStorage.getItem("qkey"))
	// 		// this.setState((prev) => ({ coin: prev.coin + 5}))
	// 		this.setState({coin: (parseInt(localStorage.getItem("qkey") + 5))})
	// 		//this.setState({...this.state, coin: this.stat
	// 		// e.coin + 5});
	// 		// alert(localStorage.getItem('coin'))

	// 		localStorage.setItem("coin", JSON.stringify(parseInt(localStorage.getItem("qkey"))+ parseInt(l3)))
	// 		// alert(localStorage.getItem('coin'))
	// 		const g = localStorage.getItem("coin");
	// 		localStorage.setItem("qkey", g);
	// 		// alert(localStorage.getItem("coin"))

	// 		// alert(localStorage.getItem('coin'))

	// 	}
	// 	else{

	// 		this.setState({coin: parseInt(localStorage.getItem("coin"))});
	// 		//this.setState({...this.state, coin: this.state.coin + 7});
	// 		//alert(localStorage.getItem('coin'))

	// 		localStorage.setItem("coin", JSON.stringify(parseInt(localStorage.getItem("qkey"))))
	// 		// alert(localStorage.getItem('coin'))

	// 	}

	// 	localStorage.setItem("bkey", JSON.parse(this.state.coin))//	alert(this.state.coin)
	// 	// alert(localStorage.getItem('coin'))
	// 	if((count2) < 1){
	// 		(count2) = (count2) + 1;
	// 		this.setState({coin: localStorage.getItem('coin')})
	// 	}
	// 	// alert(localStorage.getItem("bkey"))
	//   }

	  
	  nextStep() {
		localStorage.removeItem('fkey');
		//if(this.state.percentage >= 100) return 
		const l = localStorage.getItem("dkey");
		this.setState({ test: true})

		// if(this.state.percentage > 100){
		// 	this.setState({percentage: 100})
		// }
		// var numb = l.match(/\d/g);
		// numb = numb.join("");

		if((this.state.percentage + parseFloat(l)) >= 100){
			this.setState({percentage: 100})
			localStorage.setItem('pkey', JSON.stringify(this.state.percentage + parseFloat(l)))
			localStorage.setItem('test', JSON.stringify(this.state.percentage + parseFloat(l)))


		}
		else if ((this.state.percentage + parseFloat(l)) < 100) {

			this.setState((prev) => ({ percentage: prev.percentage + parseFloat(l)}))
			localStorage.setItem('pkey', JSON.stringify(this.state.percentage + parseFloat(l)))
			localStorage.setItem('test', JSON.stringify(this.state.percentage + parseFloat(l)))

		}
		
		alert("Added!")
		// const l2 = localStorage.getItem('pkey')
		
		// const l3 = "5"
		// const l4 = "7"
		// const l2 = localStorage.getItem('test')
		// this.setState({ test: false})

		// const l3 = "5"
		// const l4 = "7"
		// if(	parseFloat(l2)>= 90.0){
		// 	this.setState((prev) => ({ coin: prev.coin + 7}))
		// 	//this.setState({...this.state, coin: this.state.coin + 7});
		// 	localStorage.setItem("coin", JSON.stringify(parseInt(localStorage.getItem("coin"))+ parseInt(l4)))
		// }
		// else if (parseFloat(l2) >= 50.0 && parseFloat(l2) < 90.0){
		// 	this.setState((prev) => ({ coin: prev.coin + 5}))
		// 	//this.setState({...this.state, coin: this.state.coin + 5});
		// 	localStorage.setItem("coin", JSON.stringify(parseInt(localStorage.getItem("coin"))+ parseInt(l3)))
		// }
		// if(	parseFloat(l2)>= 90.0){
		// 	this.setState((prev) => ({ coin: prev.coin + 7}))
		// 	localStorage.setItem("coin", this.state.coin + parseInt(l4))
		// }
		// else if (parseFloat(l2) >= 50.0 && parseFloat(l2) < 90.0){
		// 	this.setState((prev) => ({ coin: prev.coin + 5}))
		// 	localStorage.setItem("coin", this.state.coin + parseInt(l3))
		// }
		// else{
		// 	localStorage.setItem("coin", this.state.coin)

		// }
		// if(this.state.percentage >= 90.0){
		// 	this.setState((prev) => ({ coin: prev.coin + 7}))
		// 	localStorage.setItem("coin", this.state.coin + 7)
		// }
		// else if (this.state.percentage >= 50.0 && this.state.percentage < 90.0){
		// 	this.setState((prev) => ({ coin: prev.coin + 5}))
		// 	localStorage.setItem("coin", this.state.coin + 5)
		// }

		// if((this.state.percentage + parseFloat(l)) >= 100){
		// 	this.setState({percentage: 100})
		// 	localStorage.setItem('pkey', this.state.percentage + parseFloat(l))

		// }
		// else{
				
		// localStorage.setItem('pkey', this.state.percentage + parseFloat(l))
		//alert(localStorage.getItem('pkey'))
		// localStorage.removeItem('fkey');
		//  alert(parseFloat(l))
		 
		//}
		
	  }
	//   incrementClicks() {
	// 	if(	parseFloat(localStorage.getItem('test'))>= 90.0){
	// 		this.setState((prev) => ({ coin: prev.coin + 7}))
	// 		localStorage.setItem("coin", this.state.coin + 7)
	// 	}
	// 	else if (parseFloat(localStorage.getItem('test')) >= 50.0 && parseFloat(localStorage.getItem('test')) < 90.0){
	// 		this.setState((prev) => ({ coin: prev.coin + 5}))
	// 		localStorage.setItem("coin", this.state.coin + 5)
	// 	}
	// 	// alert(localStorage.getItem('coin'))
	// 	// this.setState({
	// 	// 	coin: this.state.coin + localStorage.getItem('coin')
	// 	// });
	// }

	  
	render(){
	return(
	<> 
	{parseInt(localStorage.getItem('pkey')) >= 100 && localStorage.setItem('pkey',JSON.stringify(100))}
	{(parseInt(localStorage.getItem('pkey')) >= 100 && localStorage.getItem("t") !== null)?<Confetti width = "1800" height ="900" numberOfPieces = "500"/>: <> </>}
	<div>
		<Linegrph/>
	</div>
	{/* {parseFloat(localStorage.getItem('pkey')) >= 50.0 && (() => this.setState((prev) => ({coin: prev.coin + 7})))} */}
	<h1 className= "coinCount">{this.state.coin}</h1>

	<img className = "App-logo" src="./coinIcon.png"  /> 
	{/* <ValueCommunicator /> */}

		<Track >
			{localStorage.getItem("fkey") !== null && (this.nextStep())}
			{this.state.percentage < 50.0 &&  <h1 style = {{color:'firebrick'}} className = "pBarpercent">{this.state.percentage}%</h1> } 
			{(this.state.percentage >= 50.0 && this.state.percentage < 90.0) &&  <h1 style = {{color:'gold'}} className = "pBarpercent">{this.state.percentage}%</h1> } 
			{this.state.percentage >= 90.0 &&  <h1 style = {{color:'forestgreen'}} className = "pBarpercent">{this.state.percentage}%</h1>} 
			{this.state.percentage < 50.0 &&  <Thumb style = {{backgroundColor:'firebrick'}} percentage={this.state.percentage} /> } 
			{(this.state.percentage >= 50.0 && this.state.percentage < 90.0) &&  <Thumb style = {{backgroundColor:'gold'}} percentage={this.state.percentage} /> } 
			{this.state.percentage >= 90.0 &&  <Thumb style = {{backgroundColor:'forestgreen'}} percentage={this.state.percentage} /> } 
 
		 </Track> </>

	);
	}
}
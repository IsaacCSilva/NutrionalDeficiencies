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
		  coin: parseFloat(localStorage.getItem('coin')),
		  currentTime: time,
		  currentMinutes: timee,
		  currentSeconds: timeee,
		  test: true,
		}
		// localStorage.setItem('ckey', this.state.coin)
		// if(parseFloat(localStorage.getItem('pkey')) === 0){
		// 	this.setState({coin: localStorage.getItem("coin")});
		// 	localStorage.setItem("coin", this.state.coin);
		// }
		//localStorage.setItem('pkey', 0)

		if(this.state.currentTime === 24 && this.state.currentMinutes === 0 && this.state.currentSeconds === 0){
			localStorage.setItem('pkey', 0)
		}
		// localStorage.setItem('pkey', 0) //TO RESET
		// localStorage.setItem('test', 0)
		// if(this.state.currentTime === 22){
		// 	this.setState({      percentage: 0    })
		// 	localStorage.setItem('pkey', 0)
		// }

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
		const l2 = localStorage.getItem('pkey')
		alert(l2)
		const l3 = "5"
		const l4 = "7"
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
	{(parseInt(localStorage.getItem('pkey')) >= 100 && (this.props.con || this.props.con1 || this.props.opencheck))?<Confetti width = "1800" height ="900" numberOfPieces = "500"/>: <> </>}
	<div>
		<Linegrph/>
	</div>
	{/* {parseFloat(localStorage.getItem('pkey')) >= 50.0 && (() => this.setState((prev) => ({coin: prev.coin + 7})))} */}
	<h1 className= "coinCount">{this.state.coin}</h1>

	<img className = "App-logo" src="./coinIcon.png"  /> 

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
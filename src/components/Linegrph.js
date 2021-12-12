import React from 'react'
import {Line } from 'react-chartjs-3'


function Linegrph(){

	const ar = [null,null,null,null,null,null,null];
	let newDate = new Date()
	let date = newDate.getDay();

	// sunday		
	if(date == 0){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Sun", JSON.stringify(s))
	}
	if(date == 1){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Mon", JSON.stringify(s))
	}
	if(date == 2){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Tues", JSON.stringify(s))
	}
	if(date == 3){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Wed", JSON.stringify(s))
	}
	if(date == 4){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Thurs", JSON.stringify(s))
	}
	if(date == 5){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Fri", JSON.stringify(s))
	}
	if(date == 6){
		var s = parseFloat(localStorage.getItem('pkey'));
		localStorage.setItem("Sat", JSON.stringify(s))
	}
	// if(newDate.getMinutes() == 43){
	// 	var s = parseFloat(localStorage.getItem('pkey'));
	// 	localStorage.setItem("Tues", JSON.stringify(s))
	// }
	// if(newDate.getMinutes() == 44){
	// 	var s = parseFloat(localStorage.getItem('pkey'));
	// 	localStorage.setItem("Wed", JSON.stringify(s))
	// }
	// }
	return <Line data= {{ 
		labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
		datasets: [
		{
			label:'Daily Value',
			fill: true,
      		lineTension: 0.5,
			data: [parseFloat(localStorage.getItem("Mon")), parseFloat(localStorage.getItem("Tues")),parseFloat(localStorage.getItem("Wed")), parseFloat(localStorage.getItem("Thurs")), parseFloat(localStorage.getItem("Fri")), parseFloat(localStorage.getItem("Sat")), parseFloat(localStorage.getItem("Sun"))],
			borderColor:['#FF9900'], 
			backgroundColor:['#FF9900'],
			pointBackgroundColor: 'cadetblue',
			pointBorderColor: 'cadetblue',
			pointRadius: '7'
		}, 
		]
	}}  
	options = {{
  		scales: {
    yAxes: [{
      scaleLabel: {
		display: true,
        labelString: 'Daily Value %',
        fontSize: 25,
        fontColor: 'cadetblue',
      },
	  ticks:{
		beganAtZero:true,
		max: 100,
		min: 0
	}
    }],
    xAxes: [{
    	scaleLabel:{
    		display: true,
    		labelString: 'Days of the Week',
    		fontSize:25,
    		fontColor: 'cadetblue'
    	}
    }]

  }     
}} />
}


export default Linegrph
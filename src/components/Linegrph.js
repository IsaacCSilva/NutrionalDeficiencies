import React from 'react'
import {Line } from 'react-chartjs-3'


function Linegrph(){

	const ar = [null,null,null,null,null,null,null];
	let newDate = new Date()
	let date = newDate.getDay();

	// sunday		
	if(date == 0){
		ar[6] = parseFloat(localStorage.getItem('pkey'));
	}
	if(date == 1){
		ar[0] = parseFloat(localStorage.getItem('pkey'));
	}
	if(date == 2){
		ar[1] = parseFloat(localStorage.getItem('pkey'));
	}
	if(date == 3){
		ar[2] = parseFloat(localStorage.getItem('pkey'));
	}
	if(date == 4){
		ar[3] = parseFloat(localStorage.getItem('pkey'));
	}
	if(date == 5){
		ar[4] = parseFloat(localStorage.getItem('pkey'));
	}
	if(date == 6){
		ar[5] = parseFloat(localStorage.getItem('pkey'));
	}
	// }
	return <Line data= {{ 
		labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
		datasets: [
		{
			label:'Daily Value',
			fill: true,
      		lineTension: 0.5,
			data: ar,
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
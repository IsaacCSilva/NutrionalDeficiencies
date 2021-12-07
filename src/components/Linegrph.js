import React from 'react'
import {Line } from 'react-chartjs-3'


function Linegrph(){

	const ar = [null,null,null,null,null,null,null];
	let newDate = new Date()
	let date = newDate.getDay();

	// sunday		
	if(date == 0){
		var z = parseFloat(localStorage.getItem('pkey'));
		ar[6] = z;
	}
	if(date == 1){
		var o = parseFloat(localStorage.getItem('pkey'));
		ar[0] = o;
	}
	if(date == 2){
		var t = parseFloat(localStorage.getItem('pkey'));
		ar[1] = t;
	}
	if(date == 3){
		var th = parseFloat(localStorage.getItem('pkey'));
		ar[2] = th;
	}
	if(date == 4){
		var f = parseFloat(localStorage.getItem('pkey'));
		ar[3] = f;
	}
	if(date == 5){
		var fi = parseFloat(localStorage.getItem('pkey'));
		ar[4] = fi;
	}
	if(date == 6){
		var s = parseFloat(localStorage.getItem('pkey'));
		ar[5] = s;
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
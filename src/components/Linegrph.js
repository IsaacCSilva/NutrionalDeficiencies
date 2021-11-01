import React from 'react'
import {Line } from 'react-chartjs-3'


function Linegrph(){
	const data = {
		labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
		datasets: [
		{
			label:'Daily Value',
			fill: false,
      		lineTension: 0.5,
			data: [100,90,80,100,0,80,80],
			borderColor:['#FF9900'],
			backgroundColor:['#FF9900'],
			pointBackgroundColor: 'cornflowerblue',
			pointBorderColor: 'cadetblue'
		}]
	}
	return <Line data= {data} />
}


export default Linegrph
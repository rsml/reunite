import React from "react";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
  	const timeValues = [
  		{val: 600, time: '6:00 AM'},
  		{val: 630, time: '6:30 AM'},
  		{val: 700, time: '7:00 AM'},
  		{val: 730, time: '7:30 AM'},
  		{val: 800, time: '8:00 AM'},
  		{val: 830, time: '8:30 AM'},
  		{val: 900, time: '9:00 AM'},
  		{val: 930, time: '9:30 AM'},
  		{val: 1000, time: '10:00 AM'},
  		{val: 1030, time: '10:30 AM'},
  		{val: 1100, time: '11:00 AM'},
  		{val: 1130, time: '11:30 AM'},
  		{val: 1200, time: '12:00 PM'},
  		{val: 1230, time: '12:30 PM'},
  		{val: 1300, time: '1:00 PM'},
  		{val: 1330, time: '1:30 PM'},
  		{val: 1400, time: '2:00 PM'},
  		{val: 1430, time: '2:30 PM'},
  		{val: 1500, time: '3:00 PM'},
  		{val: 1530, time: '3:30 PM'},
  		{val: 1600, time: '4:00 PM'},
  		{val: 1630, time: '4:30 PM'},
  		{val: 1700, time: '5:00 PM'},
  		{val: 1730, time: '5:30 PM'},
  		{val: 1800, time: '6:00 PM'},
  		{val: 1830, time: '6:30 PM'},
  		{val: 1900, time: '7:00 PM'},
  		{val: 1930, time: '7:30 PM'},
  		{val: 2000, time: '8:00 PM'},
  		{val: 2030, time: '8:30 PM'},
  		{val: 2100, time: '9:00 PM'}
  	]

  	console.log(timeValues)
    return (
      <div className="page-choose-time">
      	<a className='back-btn'><span className='glyphicon glyphicon-chevron-left'></span>Back</a>
        <h2>Select your time frame</h2>
        <div className="selected-dates">
        	<div className="individual-date">
	        	<h2>August 17th</h2>
	        	<div className='time-select'>
	        		<h4>Start Time</h4>
	        		<select name='startTime'>
		        		<option disabled selected hidden>-</option>
	        			{ timeValues.map((item, index) => {
	        				return(
		        				<option value={ item.val } key={ index }>{ item.time }</option>
		        			)
	        			})}
	        		</select>
	        	</div>
	        	<div className='time-select'>
	        		<h4>End Time</h4>
	        		<select name='endTime'>
	        			<option disabled selected hidden>-</option>
	        			{ timeValues.map((item, index) => {
	        				return(
		        				<option value={ item.val } key={ index }>{ item.time }</option>
		        			)
	        			})}
	        		</select>
	        	</div>
        	</div>
        </div>
        <button className='btn-primary'>Next</button>
      </div>
    );
  }
}

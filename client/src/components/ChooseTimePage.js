import React from "react";
import { browserHistory } from 'react-router';

// Home page component
export default class Home extends React.Component {
	handleClickCTA(event){
		// debugger;

		var uncleanDate = parseInt(document.getElementById('first-time-select').value, 10);
		var dateHours = Math.floor(uncleanDate / 100);
		var dateMinutes = Math.floor(uncleanDate % 100);

		var date = new Date();
		date.setHours(dateHours);
		date.setMinutes(dateMinutes);
		date.setSeconds(0);
		date.setMilliseconds(0);

    window.localStorage.setItem('time', date.getTime());
    browserHistory.push('/choose-location');
  }

  // render
  render() {
    return (
      <div className="page-choose-time">
      	<a>Back</a>
        <h2>Select your time frame</h2>
        <div className="selected-dates">
        	<div className="individual-date">
	        	<h2>August 17th</h2>
	        	<div className='time-select' id="first-time">
	        		<h4>Start Time</h4>
	        		<select id="first-time-select">
	        			<option value='600'>6:00 AM</option>
	        			<option value='630'>6:30 AM</option>
	        			<option value='700'>7:00 AM</option>
	        			<option value='730'>7:30 AM</option>
	        			<option value='800'>8:00 AM</option>
	        			<option value='830'>8:30 AM</option>
	        			<option value='900'>9:00 AM</option>
	        			<option value='930'>9:30 AM</option>
	        			<option value='1000'>10:00 AM</option>
	        			<option value='1030'>10:30 AM</option>
	        			<option value='1100'>11:00 AM</option>
	        			<option value='1130'>11:30 AM</option>
	        			<option value='1200'>12:00 PM</option>
	        			<option value='1230'>12:30 PM</option>
	        			<option value='1300'>1:00 PM</option>
	        			<option value='1330'>1:30 PM</option>
	        			<option value='1400'>2:00 PM</option>
	        			<option value='1430'>2:30 PM</option>
	        			<option value='1500'>3:00 PM</option>
	        			<option value='1530'>3:30 PM</option>
	        			<option value='1600'>4:00 PM</option>
	        			<option value='1630'>4:30 PM</option>
	        			<option value='1700'>5:00 PM</option>
	        			<option value='1730'>5:30 PM</option>
	        			<option value='1800'>6:00 PM</option>
	        			<option value='1830'>6:30 PM</option>
	        			<option value='1900'>7:00 PM</option>
	        			<option value='1930'>7:30 PM</option>
	        			<option value='2000'>8:00 PM</option>
	        		</select>
	        	</div>
	        	<div className='time-select'>
	        		<h4>End Time</h4>
	        		<select>
	        			<option value='700'>7:00 AM</option>
	        			<option value='730'>7:30 AM</option>
	        			<option value='800'>8:00 AM</option>
	        			<option value='830'>8:30 AM</option>
	        			<option value='900'>9:00 AM</option>
	        			<option value='930'>9:30 AM</option>
	        			<option value='1000'>10:00 AM</option>
	        			<option value='1030'>10:30 AM</option>
	        			<option value='1100'>11:00 AM</option>
	        			<option value='1130'>11:30 AM</option>
	        			<option value='1200'>12:00 PM</option>
	        			<option value='1230'>12:30 PM</option>
	        			<option value='1300'>1:00 PM</option>
	        			<option value='1330'>1:30 PM</option>
	        			<option value='1400'>2:00 PM</option>
	        			<option value='1430'>2:30 PM</option>
	        			<option value='1500'>3:00 PM</option>
	        			<option value='1530'>3:30 PM</option>
	        			<option value='1600'>4:00 PM</option>
	        			<option value='1630'>4:30 PM</option>
	        			<option value='1700'>5:00 PM</option>
	        			<option value='1730'>5:30 PM</option>
	        			<option value='1800'>6:00 PM</option>
	        			<option value='1830'>6:30 PM</option>
	        			<option value='1900'>7:00 PM</option>
	        			<option value='1930'>7:30 PM</option>
	        			<option value='2000'>8:00 PM</option>
	        			<option value='2030'>8:30 PM</option>
	        			<option value='2100'>9:00 PM</option>
	        		</select>
	        	</div>
        	</div>
        	<div className="individual-date">
	        	<h2>August 17th</h2>
	        	<div className='time-select'>
	        		<h4>Start Time</h4>
	        		<select>
	        			<option value='600'>6:00 AM</option>
	        			<option value='630'>6:30 AM</option>
	        			<option value='700'>7:00 AM</option>
	        			<option value='730'>7:30 AM</option>
	        			<option value='800'>8:00 AM</option>
	        			<option value='830'>8:30 AM</option>
	        			<option value='900'>9:00 AM</option>
	        			<option value='930'>9:30 AM</option>
	        			<option value='1000'>10:00 AM</option>
	        			<option value='1030'>10:30 AM</option>
	        			<option value='1100'>11:00 AM</option>
	        			<option value='1130'>11:30 AM</option>
	        			<option value='1200'>12:00 PM</option>
	        			<option value='1230'>12:30 PM</option>
	        			<option value='1300'>1:00 PM</option>
	        			<option value='1330'>1:30 PM</option>
	        			<option value='1400'>2:00 PM</option>
	        			<option value='1430'>2:30 PM</option>
	        			<option value='1500'>3:00 PM</option>
	        			<option value='1530'>3:30 PM</option>
	        			<option value='1600'>4:00 PM</option>
	        			<option value='1630'>4:30 PM</option>
	        			<option value='1700'>5:00 PM</option>
	        			<option value='1730'>5:30 PM</option>
	        			<option value='1800'>6:00 PM</option>
	        			<option value='1830'>6:30 PM</option>
	        			<option value='1900'>7:00 PM</option>
	        			<option value='1930'>7:30 PM</option>
	        			<option value='2000'>8:00 PM</option>
	        		</select>
	        	</div>
	        	<div className='time-select'>
	        		<h4>End Time</h4>
	        		<select>
	        			<option value='700'>7:00 AM</option>
	        			<option value='730'>7:30 AM</option>
	        			<option value='800'>8:00 AM</option>
	        			<option value='830'>8:30 AM</option>
	        			<option value='900'>9:00 AM</option>
	        			<option value='930'>9:30 AM</option>
	        			<option value='1000'>10:00 AM</option>
	        			<option value='1030'>10:30 AM</option>
	        			<option value='1100'>11:00 AM</option>
	        			<option value='1130'>11:30 AM</option>
	        			<option value='1200'>12:00 PM</option>
	        			<option value='1230'>12:30 PM</option>
	        			<option value='1300'>1:00 PM</option>
	        			<option value='1330'>1:30 PM</option>
	        			<option value='1400'>2:00 PM</option>
	        			<option value='1430'>2:30 PM</option>
	        			<option value='1500'>3:00 PM</option>
	        			<option value='1530'>3:30 PM</option>
	        			<option value='1600'>4:00 PM</option>
	        			<option value='1630'>4:30 PM</option>
	        			<option value='1700'>5:00 PM</option>
	        			<option value='1730'>5:30 PM</option>
	        			<option value='1800'>6:00 PM</option>
	        			<option value='1830'>6:30 PM</option>
	        			<option value='1900'>7:00 PM</option>
	        			<option value='1930'>7:30 PM</option>
	        			<option value='2000'>8:00 PM</option>
	        			<option value='2030'>8:30 PM</option>
	        			<option value='2100'>9:00 PM</option>
	        		</select>
	        	</div>
        	</div>
        	<div className="individual-date">
	        	<h2>August 17th</h2>
	        	<div className='time-select'>
	        		<h4>Start Time</h4>
	        		<select>
	        			<option value='600'>6:00 AM</option>
	        			<option value='630'>6:30 AM</option>
	        			<option value='700'>7:00 AM</option>
	        			<option value='730'>7:30 AM</option>
	        			<option value='800'>8:00 AM</option>
	        			<option value='830'>8:30 AM</option>
	        			<option value='900'>9:00 AM</option>
	        			<option value='930'>9:30 AM</option>
	        			<option value='1000'>10:00 AM</option>
	        			<option value='1030'>10:30 AM</option>
	        			<option value='1100'>11:00 AM</option>
	        			<option value='1130'>11:30 AM</option>
	        			<option value='1200'>12:00 PM</option>
	        			<option value='1230'>12:30 PM</option>
	        			<option value='1300'>1:00 PM</option>
	        			<option value='1330'>1:30 PM</option>
	        			<option value='1400'>2:00 PM</option>
	        			<option value='1430'>2:30 PM</option>
	        			<option value='1500'>3:00 PM</option>
	        			<option value='1530'>3:30 PM</option>
	        			<option value='1600'>4:00 PM</option>
	        			<option value='1630'>4:30 PM</option>
	        			<option value='1700'>5:00 PM</option>
	        			<option value='1730'>5:30 PM</option>
	        			<option value='1800'>6:00 PM</option>
	        			<option value='1830'>6:30 PM</option>
	        			<option value='1900'>7:00 PM</option>
	        			<option value='1930'>7:30 PM</option>
	        			<option value='2000'>8:00 PM</option>
	        		</select>
	        	</div>
	        	<div className='time-select'>
	        		<h4>End Time</h4>
	        		<select>
	        			<option value='700'>7:00 AM</option>
	        			<option value='730'>7:30 AM</option>
	        			<option value='800'>8:00 AM</option>
	        			<option value='830'>8:30 AM</option>
	        			<option value='900'>9:00 AM</option>
	        			<option value='930'>9:30 AM</option>
	        			<option value='1000'>10:00 AM</option>
	        			<option value='1030'>10:30 AM</option>
	        			<option value='1100'>11:00 AM</option>
	        			<option value='1130'>11:30 AM</option>
	        			<option value='1200'>12:00 PM</option>
	        			<option value='1230'>12:30 PM</option>
	        			<option value='1300'>1:00 PM</option>
	        			<option value='1330'>1:30 PM</option>
	        			<option value='1400'>2:00 PM</option>
	        			<option value='1430'>2:30 PM</option>
	        			<option value='1500'>3:00 PM</option>
	        			<option value='1530'>3:30 PM</option>
	        			<option value='1600'>4:00 PM</option>
	        			<option value='1630'>4:30 PM</option>
	        			<option value='1700'>5:00 PM</option>
	        			<option value='1730'>5:30 PM</option>
	        			<option value='1800'>6:00 PM</option>
	        			<option value='1830'>6:30 PM</option>
	        			<option value='1900'>7:00 PM</option>
	        			<option value='1930'>7:30 PM</option>
	        			<option value='2000'>8:00 PM</option>
	        			<option value='2030'>8:30 PM</option>
	        			<option value='2100'>9:00 PM</option>
	        		</select>
	        	</div>
        	</div>
        </div>
        <div className='cta' onClick={this.handleClickCTA.bind(this)}>NEXT</div>
      </div>
    );
  }
}

import React from "react";
import { browserHistory } from 'react-router';
import moment from 'moment';

// Home page component
export default class Home extends React.Component {
	handleClickCTA(event){
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
  	const dateArray = JSON.parse(window.localStorage.getItem('dateArray') || "");

  	const validOptions = [
			(<option key="1" value='600'>6:00 AM</option>),
			(<option key="2" value='630'>6:30 AM</option>),
			(<option key="3" value='700'>7:00 AM</option>),
			(<option key="4" value='730'>7:30 AM</option>),
			(<option key="5" value='800'>8:00 AM</option>),
			(<option key="6" value='830'>8:30 AM</option>),
			(<option key="7" value='900'>9:00 AM</option>),
			(<option key="8" value='930'>9:30 AM</option>),
			(<option key="9" value='1000'>10:00 AM</option>),
			(<option key="10" value='1030'>10:30 AM</option>),
			(<option key="11" value='1100'>11:00 AM</option>),
			(<option key="12" value='1130'>11:30 AM</option>),
			(<option key="13" value='1200'>12:00 PM</option>),
			(<option key="14" value='1230'>12:30 PM</option>),
			(<option key="15" value='1300'>1:00 PM</option>),
			(<option key="16" value='1330'>1:30 PM</option>),
			(<option key="17" value='1400'>2:00 PM</option>),
			(<option key="18" value='1430'>2:30 PM</option>),
			(<option key="19" value='1500'>3:00 PM</option>),
			(<option key="20" value='1530'>3:30 PM</option>),
			(<option key="21" value='1600'>4:00 PM</option>),
			(<option key="22" value='1630'>4:30 PM</option>),
			(<option key="23" value='1700'>5:00 PM</option>),
			(<option key="24" value='1730'>5:30 PM</option>),
			(<option key="25" value='1800'>6:00 PM</option>),
			(<option key="26" value='1830'>6:30 PM</option>),
			(<option key="27" value='1900'>7:00 PM</option>),
			(<option key="28" value='1930'>7:30 PM</option>),
			(<option key="29" value='2000'>8:00 PM</option>),
  	];

  	const individualDates = (dateArray || []).map((dateInMilliseconds) => {
  		var date = new Date(dateInMilliseconds)
  		const formattedDate = moment(date).format('MMMM Do, YYYY');


  		return (
  			<div key={"" + date} className="individual-date">
        	<h2>{formattedDate}</h2>
        	<div className='time-select' id="first-time">
        		<h4>Start Time</h4>
        		<select id="first-time-select">
        			{validOptions}
        		</select>
        	</div>
        	<div className='time-select'>
        		<h4>End Time</h4>
        		<select>
        			{validOptions}
        		</select>
        	</div>
      	</div>
  		);
  	});

    return (
      <div className="page-choose-time">
      	<a className='back-btn'><span className='glyphicon glyphicon-chevron-left'></span>Back</a>
        <h2>Select your time frame</h2>
        <div className="selected-dates">
        	{individualDates}
        </div>
        <div className='cta' onClick={this.handleClickCTA.bind(this)}>NEXT</div>
      </div>
    );
  }
}

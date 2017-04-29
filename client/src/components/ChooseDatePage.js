import React from "react"
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css"
import { browserHistory } from 'react-router';

// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDay: new Date(),
      selectedDayArray: [],
      selectedDateArray: []
    }
  }

  handleDayClick(selected) {
    var dateArray = (this.state.selectedDateArray || []).map((date) => {
      if(typeof date == "number"){
        return date;
      }else{
        return date.getTime();
      }
    })

    dateArray.push(selected.getTime());

    if ( this.state.selectedDayArray.length < 3) {
      this.state.selectedDayArray.push(selected.toLocaleDateString())
      this.setState({
        selectedDay: selected.getTime(),
        selectedDateArray: dateArray
      })
    }
  }
  clearDates() {
    this.setState({
      selectedDayArray: []
    })
  }

  handleClickCTA(event){
    window.localStorage.setItem('date', this.state.selectedDay);
    window.localStorage.setItem('dateArray', JSON.stringify(this.state.selectedDateArray));
    browserHistory.push('/choose-time');
  }

  // render
  render() {
    return (
      <div className="page-home choose-date">
        <a className='back-btn' href="/choose-case"><span className='glyphicon glyphicon-chevron-left'></span>Back</a>
        <h2>Pick up to three dates</h2>
        <DayPicker
          initialMonth={ new Date(2017, 4) }
          selectedDays={ new Date(this.state.selectedDay) }
          onDayClick={(selected) => this.handleDayClick(selected) }
        />
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th><h4><span className="underline">Choice 1</span></h4></th>
                <th><h4><span className="underline">Choice 2</span></h4></th>
                <th><h4><span className="underline">Choice 3</span></h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                { this.state.selectedDayArray.map((item, index) => {
                  return (
                    <td key={index}>
                      <h3 className="margin-top-0"><b>{item}</b></h3>
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-wrapper">
          <a onClick={this.handleClickCTA.bind(this)} className="btn btn-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
           <h4>NEXT</h4>
          </a>
          <a className="" onClick={() => this.clearDates()}><p>Clear All</p></a>
        </div>
      </div>
    );
  }
}

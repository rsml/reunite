import React from "react"
import Time from 'react-time'
import Promise from 'bluebird'
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css"

// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDay: new Date(),
      selectedDayArray: []
    }
  }

  handleDayClick(selected) {
    if ( this.state.selectedDayArray.length < 3) {
      this.state.selectedDayArray.push(selected.toLocaleDateString())
      this.setState({
        selectedDay: selected.toLocaleDateString()
      })
    }
  }
  clearDates() {
    this.setState({
      selectedDayArray: []
    })
  }
  // render
  render() {
    return (
      <div className="page-home choose-date">
        <DayPicker
          initialMonth={ new Date(2017, 4) }
          selectedDays={ new Date(this.state.selectedDay) }
          onDayClick={(selected) => this.handleDayClick(selected) }
        />
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th><h4>Day 1</h4></th>
                <th><h4>Day 2</h4></th>
                <th><h4>Day 3</h4></th>
              </tr>  
            </thead>
            <tbody>
              <tr>
                { this.state.selectedDayArray.map((item, index) => {
                  return (
                    <td key={index}>
                      <h3>{item}</h3>
                    </td>  
                  )
                })}
              </tr>
            </tbody> 
          </table>
        </div>  
        <div className="btn-wrapper"> 
          <a className="" onClick={() => this.clearDates()}><h4>Clear All</h4></a>
          <button className="btn-primary"><h4>NEXT</h4></button>
        </div>  
      </div>
    );
  }
}
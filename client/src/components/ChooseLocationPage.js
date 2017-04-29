import React from "react";
import PlacesAutocomplete from 'react-places-autocomplete'

// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    geocodeByAddress(this.state.address,  (err, latLng) => {
      if (err) { console.log('Oh no!', err) }

      console.log(`Yay! Got latitude and longitude for ${address}`, latLng)
    })
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    var that = this;
    const map = (function(){

      if(window.google && typeof window.google !== 'undefined') {
        return (
          <div className="flex">
            <PlacesAutocomplete className="flex-grow" inputProps={inputProps} />
            <input type="submit" value="Search" />
          </div>
        )
      }else{

        setTimeout(function(){
          that.render();
        }, 100)
        return "Loading...";
      }


    })();




    return (
      <div className="page-choose-location">
        <h4>Choose a Location</h4>

        {map}
      </div>
    )
  }
}

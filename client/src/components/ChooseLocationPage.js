import React from "react";
import PlacesAutocomplete, {geocodeByAddress, geocodeByPlaceId} from 'react-places-autocomplete'

// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const that = this;
    debugger;
    geocodeByAddress(this.state.address,  (err, latLng) => {
      debugger;
      if (err) { console.log('Oh no!', err) }

      console.log(`Yay! Got latitude and longitude for ${that.state.address}`, latLng)
      that.drawMap(latLng);
    })
  }

  drawMap(latLng) {
    if(!window.google){
      return;
    }

    var mapProp= {
        center:latLng,
        zoom:5,
    };
    var map=new window.google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'Hello World!'
    });
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
          <div>
            <div className="flex pull-to-front width-100">
              <div className="flex-grow">
                <PlacesAutocomplete inputProps={inputProps} />
              </div>
              <input type="submit" value="Search" onClick={that.handleFormSubmit.bind(that)} />
            </div>
            <div className="z-index-1">

              <div id="googleMap"></div>
            </div>

            <div>
              {that.state.address}
            </div>

            <div className="cta">
              CONFIRM
            </div>

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

import React from "react";
import PlacesAutocomplete, {geocodeByAddress, geocodeByPlaceId} from 'react-places-autocomplete'
import { browserHistory } from 'react-router';

// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: null,
      isMapVisible: false
    }
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
      this.setState({
        isMapVisible: false
      });
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

    this.setState({
      isMapVisible: true,
      savedAddress: this.state.address
    });

    window.localStorage.setItem('address', savedAddress);
  }

  handleClickCTA(event){
    browserHistory.push('/success');
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    var that = this;
    const map = (function(){

      if(window.google && typeof window.google !== 'undefined') {
        const lowerHalf = (()=>{
          if(that.state.isMapVisible){
            return (
              <div>
                <div className="address-under-map">
                  {that.state.savedAddress}
                </div>

                <div className="cta" onClick={that.handleClickCTA.bind(that)}>
                  CONFIRM
                </div>
              </div>
            );
          }else{
            return null;
          }
        })();

        return (
          <div>
            <div className="flex pull-to-front width-100 rounded input-container">
              <div className="flex-grow">
                <PlacesAutocomplete inputProps={inputProps} />
              </div>
              <input className="search-input" type="submit" value="SEARCH" onClick={that.handleFormSubmit.bind(that)} />
            </div>
            <div className="z-index-1">

              <div id="googleMap"></div>
            </div>

            {lowerHalf}

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

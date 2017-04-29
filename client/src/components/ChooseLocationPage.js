import React from "react";
import PlacesAutocomplete, {geocodeByAddress, geocodeByPlaceId} from 'react-places-autocomplete'
import { browserHistory } from 'react-router';
import axios from 'axios';


// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      isMapVisible: false
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const that = this;
    geocodeByAddress(this.state.address,  (err, latLng) => {
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
        zoom:17,
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

    window.localStorage.setItem('address', this.state.address);
  }

  handleClickCTA(event){
    const address = window.localStoraget.getItem('address');

    let savedDate = new Date(window.localStoraget.getItem('date'));
    let savedTime = new Date(window.localStoraget.getItem('time'));

    savedDate.setHours(savedTime.getHours());
    savedDate.setMinutes(savedTime.getMinutes());
    savedDate.setSeconds(savedTime.getSeconds());
    savedDate.setMilliseconds(savedTime.getMilliseconds());


    axios.post('http://ec2-34-208-196-65.us-west-2.compute.amazonaws.com:4040/api/visitations', {
      location: address,
      datetime: savedDate,
      caseId: 1
    })
    .then(function (response) {
      debugger;
      var visitationId = response.visitationId;
      axios.post('http://ec2-34-208-196-65.us-west-2.compute.amazonaws.com:4040/api/phonecall', {
        location: address,
        datetime: savedDate,
        visitationId: visitationId
      }).then(function (response) {
        debugger;
      });
    })
    .catch(function (error) {
      console.log(error);
    });



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
              <div className="flex-grow">
                <h4 className="address-under-map">
                  {that.state.savedAddress}
                </h4>

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
          <div className="flex flex-column">
            <div className="flex-grow flex pull-to-front width-100 rounded input-container">
              <div className="flex-grow">
                <PlacesAutocomplete inputProps={inputProps} />
              </div>
              <input className="search-input" type="submit" value="SEARCH" onClick={that.handleFormSubmit.bind(that)} />
            </div>
            <div className=" flex-grow z-index-1">

              <div id="googleMap"></div>
            </div>

            {lowerHalf}

          </div>
        )
      }else{
        setTimeout(function(){
          that.forceUpdate();
        }, 50)
        return "Loading...";
      }
    })();


    return (
      <div className="page-choose-location">
        <h2 className="text-align-center">Choose a Location</h2>

        {map}
      </div>
    )
  }
}

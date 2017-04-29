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

  handleClickBack(event){
    browserHistory.push('/choose-date');
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
    let visitation
    const address = window.localStorage.getItem('address');

    let savedDate = new Date(parseInt(window.localStorage.getItem('date'), 10));
    let savedTime = new Date(parseInt(window.localStorage.getItem('time'), 10));

    let combinedDate = new Date(parseInt(window.localStorage.getItem('time'), 10));;
    combinedDate.setDate(savedDate.getDate());
    combinedDate.setMonth(savedDate.getMonth());
    combinedDate.setYear(1900 + savedDate.getYear());

    axios.get('http://ec2-34-208-196-65.us-west-2.compute.amazonaws.com:4040/api/visitations')
    .then((response) => {
      visitation = response.data[0]
      savedDate.setHours(savedTime.getHours());
      savedDate.setMinutes(savedTime.getMinutes());
      savedDate.setSeconds(savedTime.getSeconds());
      savedDate.setMilliseconds(savedTime.getMilliseconds());

      let visitationObj = {
        _id: visitation._id,
        caseNumber: visitation.caseNumber,
        isWeekly: visitation.isWeekly,
        parentId: visitation.parentId,
        caregiverId: visitation.caregiverId,
        childId: visitation.childId,
        socialWorkerId: visitation.socialWorkerId,
        location: address,
        datetime: combinedDate.getTime()
      }
      console.log(visitationObj)
      axios.put('http://ec2-34-208-196-65.us-west-2.compute.amazonaws.com:4040/api/visitations/' + visitation._id, {
        _id: visitation._id,
        caseNumber: visitation.caseNumber,
        isWeekly: visitation.isWeekly,
        parentId: visitation.parentId,
        caregiverId: visitation.caregiverId,
        childId: visitation.childId,
        socialWorkerId: visitation.socialWorkerId,
        location: address,
        datetime: savedDate
      })
      .then(function (response) {
        var visitationId = response.data._id;
        axios.get('http://ec2-34-208-196-65.us-west-2.compute.amazonaws.com:4040/api/call/parent/' + visitationId)
        .then(function (response) {
          browserHistory.push('/success');
        });
      })
      .catch(function (error) {
        console.log(error)
      })
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
        const lowerHalf = (()=>{
          if(that.state.isMapVisible){
            return (
              <div className="flex-grow">
                <h4 className="address-under-map">
                  {that.state.savedAddress}
                </h4>
                <div className="location-btn-wrapper">
                  <a onClick={that.handleClickCTA.bind(that)} className="btn btn-1">
                    <svg>
                      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                   <h4>CONFIRM</h4>
                  </a>
                </div>
              </div>
            );
          }else{
            return null;
          }
        })();

        const inputDisabled = (!that.state.address || that.state.address.length === 0);
        debugger;

        return (
          <div className="flex flex-column">
            <div className="flex-grow flex pull-to-front width-100 rounded input-container">
              <div className="flex-grow">
                <PlacesAutocomplete inputProps={inputProps} />
              </div>
              <input className={"search-input" + (inputDisabled ? ' disabled' : '')} type="submit" value="SEARCH" onClick={that.handleFormSubmit.bind(that)} />
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
        <a className='back-btn' href="/choose-time"><span className='glyphicon glyphicon-chevron-left'></span>Back</a>
        <h2 className="text-align-center">Choose a Location</h2>

        {map}
      </div>
    )
  }
}

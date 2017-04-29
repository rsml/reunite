import React, { Component } from 'react';

import { Header } from 'components/header';
// import { Wrapper } from 'components/wrapper';
import { Counter } from 'components/counter';
import { Currency } from 'components/currency';
// import PlacesAutocomplete from 'react-places-autocomplete'
import Geosuggest from 'react-geosuggest';


export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address,  (err, latLng) => {
      if (err) { console.log('Oh no!', err) }

      console.log(`Yay! Got latitude and longitude for ${address}`, latLng)
    })
  }

  render() {
/*    const {
      counter,
      currency,
      onIncrementCounter,
      onDecrementCounter,
      onChangeConverterAmount,
      onChangeConverterCurrency
    } = this.props;

    const counterElement = (
      <Counter
        count={ counter }
        onIncrement={ onIncrementCounter }
        onDecrement={ onDecrementCounter }
      />
    );*/

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div>
        <Header />

        {/*<Wrapper title='Counter'>
          Google maps
        </Wrapper>*/}

        {/*<form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} />
          <button type="submit">Submit</button>
        </form>*/}

        <Geosuggest />

      </div>
    );
  }
}

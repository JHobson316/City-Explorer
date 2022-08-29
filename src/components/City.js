import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './City.css';

class City extends React.Component {
  render() {
    return (
      <>
        <Button onClick={this.props.handleShowSearch} variant="primary" type="submit">
          Search again
        </Button>
        <h2>{this.props.cityData.display_name}</h2>
        <h2>Latitude: {this.props.cityData.lat}</h2>
        <h2>Longitude: {this.props.cityData.lon}</h2>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`} alt="city map" title="Return search map" fluid />
      </>
    );
  }
}

export default City;
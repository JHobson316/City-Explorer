import axios from 'axios';
import React, { Component } from 'react';
import Search from './components/Search';

export default class App extends Component {
  handleSearch = async (cityInput) => {
    try {
      let locationResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION}&q=${cityInput}&format=json&limit=1`);
      // console.log(locationResponse.data[0]);
      console.log('display name', locationResponse.data[0].display_name);
      console.log('latitude', locationResponse.data[0].lat);
      console.log('longitude', locationResponse.data[0].lon);

      this.setState({
        haveSearched: true,
        cityInput: cityInput,
        cityData: locationResponse.data[0],
        // show city lat and long helped by Hexx
        cityName: locationResponse.data[0].display_name,
        latitude: locationResponse.data[0].lat,
        longitude: locationResponse.data[0].lon,
      });
    } catch (err) {
      // console.log(err);
      this.setState({
        errors: `${err}`,
        haveSearched: false,
      });
    }
    // suitable line break @ the end to call it in . . .
    this.fetchWeather();
    this.fetchMovies();
  }
  handleClick = async () => {
    let API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}&q=Venice`;
    let res = await axios.get(API);
    console.log(res.data);
  }
  render() {
    return (
      <div>
        <h2>Yo</h2>
        <br/>
        <Search handleSearch={this.handleSearch} />
        <button onClick={this.handleClick}>Explore!</button>
      </div>
    )
  }
}

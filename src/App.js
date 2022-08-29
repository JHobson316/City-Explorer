import axios from 'axios';
import React, { Component } from 'react';
import Search from './components/Search';
import City from './components/City';
import Error from './components/Error';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      haveSearched: false,
      cityInput: '',
      cityData: {},
      errors: [],
      cityName: '',
      // backend server : licationIq
      latitude: '',
      longitude: '',
      // backend server : weathbit API
      forecast: [],
      // backend server : movie database API
      movies: [],
    }
  }
  showSearch = () => {
    this.setState({ haveSearched: false });
  }
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
        <h2>City Explorer</h2>
        <br/>
        {
          this.state.haveSearched && this.state.errors.length === 0 ?
            <City handleShowSearch={this.showSearch} cityData={this.state.cityData} /> :
            this.state.errors.length !== 0 ?
              <Error handleSearch={this.handleSearch} errors={this.state.errors} error={this.state.error} /> :
              <Search handleSearch={this.handleSearch} />
        }
        <button onClick={this.handleClick}>Explore!</button>
        <Footer />
      </div>
    )
  }
}

import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  handleClick =  () => {
    let API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}`;
    let res = await axios.get(API);
    res.send(res.data);
  }
  render() {
    return (
      <div>
        <h2>Yo</h2>
      </div>
    )
  }
}

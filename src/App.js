/* eslint-disable no-undef */
import React, { Component } from 'react';
import Weather from './Component/Weather'
import Form from './Component/Form'
import Sun from './Component/Sun'
import Change from './Component/Changebutton'

const API_KEY = "e36ed364400282e43250b6c4c0274d44";

class App extends Component {
  state = {
    tempreature: '',
    city: '',
    humidity: '',
    description: '',
    Error: ''
  }



  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json();

    if (city && country) {

      console.log(city, country)
      this.setState({
        // tempreature: this.Changetemp(data.main.temp),
        tempreature: data.main.temp,

        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        Error: ''

      })
    }


    else {
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        Error: 'Data Required'
      })

    }
  }

  ////////prova


  Changetemp = (fahren) => {
    console.log(fahren)
    const celsius = (fahren - 32) * 5 / 9
    if (typeof celsius !== "undefined") {
      return celsius;
    } else {
      return "celsius not defined";

    }

  }



  render() {
    return (
      <div>
        <Sun />
        <div className="App" >
          <div className="form-countainer">
            <Form getWeather={this.getWeather} />
            <Change Changetemp={this.Changetemp}
            />
            <img src={'/torino.' + this.state.country + '.png'} alt='torino' width='100%' />
            <img src={'/Lisbon.' + this.state.country + '.png'} alt='portgal' width="100%" />
            <img src={'/London.' + this.state.country + '.png'} alt='london'width='100%'/>
            <Weather
              tempreature={this.state.tempreature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              Error={this.state.Error}


            /></div>
        </div>
      </div>

    );
  }
}



export default App;


//Saad
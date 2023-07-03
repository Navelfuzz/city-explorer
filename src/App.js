import React from 'react';
import axios from 'axios';
import Form from './Form';
import CityTable from './Table';
import CityMap from './CityMap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: false,
      errorMsg: '',
      displayTable: false,
      displayMap: false
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }
  
  handleGetCityInfo = async (event) => {
    event.preventDefault();
    try {
    
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.city}&format=json`;

      let cityDataFromAxios = await axios.get(url);
          
      this.setState({
        locationData: cityDataFromAxios.data[0],
        error: false, 
        errorMsg: '',
        displayTable: true,
        displayMap: true
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.response.data.error,
        displayTable: false,
        displayMap: false
      })
    }
  }


  render() {

    return (
      <>
        <h1>City Explorer Application</h1>
        <Form handleGetCityInfo={this.handleGetCityInfo} handleCityInput={this.handleCityInput} />
        { 
          this.state.error 
          ? <p>{this.state.errorMsg}</p>
          : <CityTable city={this.state.locationData.display_name} lat={this.state.locationData.lat} lon={this.state.locationData.lon} />
        }
        {
          this.state.displayMap
          ? <CityMap lat={this.state.locationData.lat} lon={this.state.locationData.lon} />
          : <p>Search for a city you would like to explore!</p>
        }
      </>
    )
  }
}

export default App;
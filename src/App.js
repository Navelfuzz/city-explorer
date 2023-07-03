import React from 'react';
import axios from 'axios';
import Form from './Form';
import CityTable from './Table';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: false,
      errorMsg: ''
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
      console.log(cityDataFromAxios.data[0]);
    
      this.setState({
        locationData: cityDataFromAxios.data[0],
        error: false, 
        errorMsg: ''
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.response.data.error
      })
    }
  }


  render() {

    return (
      <>
        <Form handleGetCityInfo={this.handleGetCityInfo} handleCityInput={this.handleCityInput} />
        { 
          this.state.error 
          ? <p>{this.state.errorMsg}</p>
          : <CityTable city={this.state.locationData.display_name} lat={this.state.locationData.lat} lon={this.state.locationData.lon} />
        }
      </>
    )
  }
}

export default App;
import React from 'react';

class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.handleGetCityInfo}>
          <label htmlFor=""> Enter a City Name:
            <input type="text" onInput={this.props.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
    )
  }
}

export default Form;
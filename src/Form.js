import React from 'react';
import './Form.css';

class Form extends React.Component {
  render(){
    return (
      <div className="form-container">
        <form className="my-form" onSubmit={this.props.handleGetCityInfo}>
          <label htmlFor=""> Enter a City Name:
            <input type="text" onInput={this.props.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
      </div>
    )
  }
}

export default Form;
import React from 'react';
import Image from 'react-bootstrap/Image';
import './CityMap.css';

class CityMap extends React.Component {

  render() {
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${this.props.lat},${this.props.lon}&zoom=13`;

    return (
    <div className="CityMap">
      <Image src={url} fluid />
    </div>
    )
  }
}

export default CityMap;
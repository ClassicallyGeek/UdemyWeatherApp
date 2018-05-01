import React, { Component } from 'react';

class GoogleMap extends Component {
  // lifecycle methods that gets called when component is put on the screen.
  componentDidMount() {
    // element to render in, config object
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // the ref system in react lets us get a reference to an html element that has been rendered to the page.
    // this.refs.map to reference this html element
    return <div ref="map" />;
  }
}

export default GoogleMap; // Why do this vs export default class...

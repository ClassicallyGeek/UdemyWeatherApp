import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchWeather from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Since we didn't use the fat arrow function that keeps context,
    // we need to bind onInput change to "this"
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); // Stop the browser submitting the form- causes refresh.
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form
        onSubmit={ this.onFormSubmit }
        className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities."
          onChange={ this.onInputChange }
          value= { this.state.term } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // The question to ask is "what is the callback reducer we want to call?"
  // Causes action creator- whenever it's called, makes sure that the action flows into middlewear & then reducers.
  return bindActionCreators( {fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

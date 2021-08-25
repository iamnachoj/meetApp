import React from 'react';

import {mockData} from '../../mock-data';
import { extractLocations } from '../../api';

class CitySearch extends React.Component {

  constructor() {
    super();
     
    //state
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: false
    }

  }

  //function that handles the clicked suggestion
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    this.props.updateEvents(suggestion);
  }

  //function to change 'query' when writting text in the input 'city-input'
  handleInputChange = (event) => {
    let locations = this.props.locations;
    const value = event.target.value;
    const suggestions = locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };
  //Render method
  render(){
    return (
      <div className="citySearch">
        <input placeholder='select your city...' type="text" className="city-input" value={this.state.query} onChange={this.handleInputChange} onFocus={() => {this.setState({showSuggestions : true})}} />
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>see all cities</b>
          </li>
        </ul>
      </div>
    )
  }
}

export default CitySearch;
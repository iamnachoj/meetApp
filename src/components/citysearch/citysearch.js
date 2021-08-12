import React from 'react';

import {mockData} from '../../mock-data';
import { extractLocations } from '../../api';

class CitySearch extends React.Component {

  constructor() {
    super();

    //state
    this.state = {
      query: '',
      suggestions: []
    }

  }

  //function to change 'query' when writting text in the input 'city-input'
  handleInputChange = (event) => {
    let locations = extractLocations(mockData);
    const value = event.target.value;
    const suggestions = locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  render(){
    return (
      <div className="CitySearch">
        <input type="text" className="city-input" value={this.state.query} onChange={this.handleInputChange} />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
          <li key="all">
            <b>see all cities</b>
          </li>
        </ul>
      </div>
    )
  }
}

export default CitySearch;
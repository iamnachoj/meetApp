import React from 'react';

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
    const value = event.target.value;
    this.setState({query:value});
  }

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
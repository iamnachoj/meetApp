import React from 'react';

class CitySearch extends React.Component {
  constructor() {
    super();
 
    this.state = {
      query: ''
    }
  }
  render(){
    return (
      <div className="CitySearch">
        <input type="text" className='city-input' value={this.state.query} />
        <ul className='suggestions'>
          
        </ul>
      </div>
    )
  }
}

export default CitySearch;
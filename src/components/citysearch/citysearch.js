import React from 'react';

class CitySearch extends React.Component {
  render(){
    return (
      <div className="CitySearch">
        <input type="text" className='city-input' />
        <ul className='suggestions'></ul>
      </div>
    )
  }
}

export default CitySearch;
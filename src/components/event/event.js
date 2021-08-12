import React from 'react';

class Event extends React.Component{
  render(){
    return (
      <div>
        <h4 className='event-title'>title</h4>
        <button className='details-button'>show more</button>
      </div>
    )
  }
}

export default Event;
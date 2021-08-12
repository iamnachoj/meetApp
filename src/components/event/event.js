import React from 'react';

class Event extends React.Component{
  render(){
    return (
      <div>
        <h4 className='event-title'>title</h4>
        <button className='details-button'>show more</button>
        {/* here the details will show up when the button is clicked: */}
        {/* <div className='details'></div>  */}
      </div>
    )
  }
}

export default Event;
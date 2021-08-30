import React from 'react';
import './event.css'

class Event extends React.Component{
  state = {
    showMore: false
  }

  render(){
    const { event: { location, summary, description, start } } = this.props;
    return (
      <div className='event'>
        <h4 className='event-title'>{summary}</h4>
        <p className='event-date'><b>Date:</b> {start.dateTime}</p>
        <button onClick={e => this.setState({showMore: !this.state.showMore})} className='btn position-btn'>show more</button>
        {this.state.showMore ? 
        <div className='details'>
          <ul>
            <li><b>Location:</b> {location} </li>
            <li><b>Description:</b> {description}</li>
          </ul>
        </div> : <></>}
      </div>
    )
  }
}

export default Event;
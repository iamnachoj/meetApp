import React from 'react';
import './event.css'

class Event extends React.Component{
  state = {
    showMore: false,
    whatToShow: "Show more"
  }

  convertDate(date) {
    const newDate = new Date(date).toDateString()
    return newDate
  }
  convertTime(date){
    const newTime = new Date(date).toTimeString().slice(0,5)
    return newTime
  }


  render(){
    const { event: { location, summary, description, start, end, htmlLink } } = this.props;
    return (
      <div className='event'>
        <h4 className='event-title'>{summary}</h4>
        <p className='event-date'><b>Date:</b> {this.convertDate(start.dateTime)}, {this.convertTime(start.dateTime)}h - {this.convertTime(end.dateTime)}h</p>
        <button  onClick={e => this.setState({showMore: !this.state.showMore})} className='btn position-btn'>
        {this.state.showMore ? (<span>Show less</span>) : (<span>Show more</span>)}</button>

        {this.state.showMore ? 
        <div className='details'>
          <ul>
            <li><b>Location:</b> {location} </li>
            <li><b>Description:</b> {description}</li>
            <a href={htmlLink} target="_black" ><button className='btn2 position-btn2'>Add to Calendar</button></a>
          </ul>
        </div> : <></>}
      </div>
    )
  }
}

export default Event;
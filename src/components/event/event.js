import React from 'react';

class Event extends React.Component{
  state = {
    showMore: false
  }
  render(){
    const { event: {sumary, description } } = this.props
    return (
      <div>
        <h4 className='event-title'>title</h4>
        <button onClick={e => this.setState({showMore: !this.state.showMore})} className='details-button'>show more</button>
        {this.state.showMore ? <div className='details'>{description}</div> : <></>}
      </div>
    )
  }
}

export default Event;
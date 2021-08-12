import React from "react";

class NumberOfEvents extends React.Component {
  state = {
    numberOfEvents: 10
  }

  render() {
    return (
      <div className="NumberOfEvents"> 
        <p>Number of Events</p>
        <input
          type="number"
          className="num-events"
          value={this.state.numberOfEvents}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
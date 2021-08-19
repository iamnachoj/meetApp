import React from "react";

class NumberOfEvents extends React.Component {
  state = {
    numberOfEvents: 10
  }

  render() {
    return (
      <div className="NumberOfEvents"> 
        <p>Events per Page</p>
        <input
          type="number"
          className="num-events"
          value={this.state.numberOfEvents}
          readOnly
        />
      </div>
    );
  }
}
export default NumberOfEvents;
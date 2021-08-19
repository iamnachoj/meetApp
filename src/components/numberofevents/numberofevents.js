import React from "react";

class NumberOfEvents extends React.Component {
  render() {
    const {events} = this.props;
    return (
      <div className="NumberOfEvents">
        <p>Events:</p>
        <input
          type="number"
          className="num-events"
          value={events.length}
          readOnly
        />
      </div>
    );
  }
}
export default NumberOfEvents;
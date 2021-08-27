import React from "react";
import './numberofevents.css';

class NumberOfEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: 30
    };
  }
 
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.changeCount(value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p>Events:</p>
        <input
          type="number"
          min='0'
          className="num-events"
          value={this.state.numberOfEvents}
          onChange={e => this.handleChange(e)}
        />
     </div>
    );
  }
}
export default NumberOfEvents;
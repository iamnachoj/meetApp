import React from "react";
import { ErrorAlert } from '../alert/alert';

class NumberOfEvents extends React.Component {
  constructor(){
    super();
    this.state = {
      errorText: ''
    }
  }
  showAlert = () => {
    this.setState({
      errorText:'Number of events cannot be changed'
    });
  }

  render() {
    const {events} = this.props;
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText}/>
        <div>
          <p>Events:</p>
          <input
            type="number"
            className="num-events"
            value={events.length}
            readOnly
            onClick={() => this.showAlert()}
          />
        </div>
      </div>
    );
  }
}
export default NumberOfEvents;
import React from "react";
import { ErrorAlert } from '../alert/alert';
import './numberofevents.css';

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
    setTimeout(() => {
      this.setState({
        errorText: ''
      })
    }, 3000)
  }

  render() {
    const {events} = this.props;
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText}/>
        <div>
          <p>Total:</p>
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
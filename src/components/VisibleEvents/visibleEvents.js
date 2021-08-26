import React, { Component } from 'react';
import "./visibleEvents.css";

class VisibleEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleEvents: 30
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      visibleEvents: value,
    });
    this.props.changeCount(value);
  };

  render() {
    return (
        <div className="visibleEvents">
          <p>Shown events:</p>
          <input
            type="number"
            min="0"
            className="num-events"
            value={this.state.visibleEvents}
            onChange={e => this.handleChange(e)}
          />
        </div>
    )
  }
}

export default VisibleEvents;
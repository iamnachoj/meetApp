import React, { Component } from 'react';

class VisibleEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleEvents: 32
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
      <input
        type="number"
        className="number"
        value={this.state.visibleEvents}
        onChange={e => this.handleChange(e)} />
    )
  }
}

export default VisibleEvents;
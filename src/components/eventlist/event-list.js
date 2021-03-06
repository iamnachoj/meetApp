import React from 'react';
import './event-list.css'

//components
import Event from '../event/event';

class EventList extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;
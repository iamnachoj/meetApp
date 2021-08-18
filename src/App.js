import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import NumberOfEvents from './components/numberofevents/numberofevents';
import { getEvents } from './api';

class App extends React.Component {
  state = {
    events: [],
    locations: []
  }
  
  updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    })
  })
  }

  render(){
    return (
    <div className='App'>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents/>
      <EventList events={this.state.events}/>
    </div>
    );
  }
}

export default App;

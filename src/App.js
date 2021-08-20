import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import NumberOfEvents from './components/numberofevents/numberofevents';
import { getEvents, extractLocations } from './api';
//nprogress css file
import './nprogress.css';

class App extends React.Component {
  state = {
    events: [],
    locations: []
  }
  
  updateEvents = (location) => {
   getEvents().then((events) => {
    const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location)
    this.setState({
      events : locationEvents
    });
  });
  }

  render(){
    return (
    <div className='App'>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents events={this.state.events}/>
      <EventList events={this.state.events}/>
    </div>
    );
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

export default App;

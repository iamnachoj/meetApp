import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import VisibleEvents from './components/VisibleEvents/visibleEvents';
import { getEvents, extractLocations } from './api';
//nprogress css file
import './nprogress.css';
import logo from './meetApp.png'
import { WarningAlert } from './components/alert/alert';
class App extends React.Component {
  state = {
    events: [],
    locations: [],
    selectedLocation: 'all'
  }
  
  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter(event => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        NumberOfEvents: eventCount,
      });
    });
  };

  changeCount = newCount => {
    const { selectedLocation } = this.state;
    this.updateEvents(selectedLocation, newCount);
  }

  render(){
    if(!navigator.onLine){
      return(
      <div className='App'>
        <WarningAlert text="You are offline. new events could not be loaded"/>
        <div className='logo-div'><img className='logo' src={logo} alt="logo" /></div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
      </div>
      )
    }
    return (
    <div className='App'>
      <div className='logo-div'><img className='logo' src={logo} alt="logo" /></div>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <VisibleEvents events={this.state.events} changeCount={this.changeCount}/>
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

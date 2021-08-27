import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import NumberOfEvents from './components/numberofevents/numberofevents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './components/welcome-screen/welcome-screen';

//nprogress css file
import './nprogress.css';
import logo from './meetApp.png'
import { WarningAlert } from './components/alert/alert';
class App extends React.Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 30,
    selectedLocation: 'all',
    showWelcomeScreen: undefined
  }
  
  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter(event => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
      });
    });
  };

  changeCount = newCount => {
    const { selectedLocation } = this.state;
    this.updateEvents(selectedLocation, newCount);
  }

  render(){
    
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    if(!navigator.onLine){
      return(
      <div className='App'>
        <WarningAlert text="You are offline. new events could not be loaded"/>
        <div className='logo-div'><img className='logo' src={logo} alt="logo" /></div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} changeCount={this.changeCount} />
        <EventList events={this.state.events}/>
      </div>
      )
    }

    return (
    <div className='App'>
      <div className='logo-div'><img className='logo' src={logo} alt="logo" /></div>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} changeCount={this.changeCount} />
      <EventList events={this.state.events}/>
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
    </div>
    );
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

export default App;

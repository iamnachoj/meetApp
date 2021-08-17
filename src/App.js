import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import NumberOfEvents from './components/numberofevents/numberofevents';
import { mockData } from './mock-data';

class App extends React.Component {
  state = {
    events: [...mockData],
    locations: []
  }

  render(){
    return (
    <div className='App'>
      <CitySearch locations={this.state.locations}/>
      <NumberOfEvents/>
      <EventList events={this.state.events}/>
    </div>
    );
  }
}

export default App;

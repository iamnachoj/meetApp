import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import NumberOfEvents from './components/numberofevents/numberofevents';
import {mockData} from './mock-data';
import { extractLocations } from './api';

class App extends React.Component {
  state = {
    events: []
  }
  render(){
    let locations = extractLocations(mockData)
    return (
    <div className='App'>
      <CitySearch locations={locations}/>
      <NumberOfEvents/>
      <EventList events={this.state.events}/>
    </div>
    );
  }
}

export default App;

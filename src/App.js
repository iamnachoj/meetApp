import React from 'react';

//components
import EventList from './components/eventlist/event-list';
import CitySearch from './components/citysearch/citysearch';
import NumberOfEvents from './components/numberofevents/numberofevents';

class App extends React.Component {
  state = {
    events: [],
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

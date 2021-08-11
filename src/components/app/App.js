import React from 'react';

//components
import EventList from '../eventlist/event-list';
import CitySearch from '../citysearch/citysearch';

//CSS
import './App.css';

class App extends React.Component {
  render(){
    return (
    <div className='App'>
      <CitySearch/>
      <EventList/>
    </div>
    );
  }
}

export default App;

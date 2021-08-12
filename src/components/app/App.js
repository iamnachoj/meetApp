import React from 'react';

//components
import EventList from '../eventlist/event-list';
import CitySearch from '../citysearch/citysearch';
import NumberOfEvents from '../numberofevents/numberofevents';
import {mockData} from '../../mock-data';
import { extractLocations } from '../../api';


//CSS
import './App.css';

class App extends React.Component {
  render(){
    let locations = extractLocations(mockData)
    return (
    <div className='App'>
      <CitySearch locations={locations}/>
      <NumberOfEvents/>
      <EventList/>
    </div>
    );
  }
}

export default App;

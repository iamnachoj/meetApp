import React from 'react';
import {shallow, mount} from 'enzyme';

//components
import App from '../App';
import EventList from '../components/eventlist/event-list';
import CitySearch from '../components/citysearch/citysearch';
import NumberOfEvents from '../components/numberofevents/numberofevents';


//test suite
describe('< App /> component', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App/>) // before all tests, this will be created.
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1); 
  });
  
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  })
  test('render number of events counter', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })
})

//integration testing
describe('<App /> integration', () => {

  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

});
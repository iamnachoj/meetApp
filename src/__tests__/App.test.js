import React from 'react';
import {shallow} from 'enzyme';

//components
import App from '../components/app/App';
import EventList from '../components/eventlist/event-list';
import CitySearch from '../components/citysearch/citysearch';


//test suite
describe('< App /> component', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App/>) // before all tests, this will be created.
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)); 
  });
  
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch))
  })
})
import React from 'react';
import {shallow} from 'enzyme';

//components
import App from '../App';
import EventList from '../components/eventlist/event-list';

describe('< App /> component', () => {

  test('render list of events', () => {
    const AppWrapper = shallow(<App/>);
    expect(AppWrapper.find(EventList)).toHaveLength(1); 
  });
})
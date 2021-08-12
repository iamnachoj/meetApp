import React from 'react';
import {shallow} from 'enzyme';
import {mockData} from '../mock-data';
//components
import EventList from '../components/eventlist/event-list';
import Event from '../components/event/event';

describe('<EventList/> component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData}  />);
    //test will only pass if EventList renders exactly four events from its prop events
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    
  });

});
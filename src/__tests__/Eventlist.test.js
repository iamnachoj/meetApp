import React from 'react';
import {shallow} from 'enzyme';

//components
import EventList from '../components/eventlist/event-list';
import Event from '../components/event/event';

describe('<EventList/> component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{id:1},{id:2},{id:3},{id:4}]}  />);
    //test will only pass if EventList renders exactly four events from its prop events
    expect(EventListWrapper.find(Event)).toHaveLength(4);
    
  });

});
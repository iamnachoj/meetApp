import React from 'react';
import {shallow} from 'enzyme';
import EventList from '../components/eventlist-view/event-list-view';

describe('<EventList/> component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{},{},{},{}]}  />);
    //test will only pass if EventList renders exactly four events from its prop events
    expect(EventListWrapper.find(Event)).toHaveLendth(4);
  });

});
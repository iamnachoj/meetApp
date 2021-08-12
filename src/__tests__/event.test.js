import React from 'react';
import {shallow} from 'enzyme';

import Event from '../components/event/event';

describe('<Event/> component', () => {
  let eventWrapper;
  beforeAll(() => {
    eventWrapper = shallow(<Event/>);
  })
    
  test('event has a title', () => {
    expect(eventWrapper.find('.event-title')).toHaveLength(1)
  });
  test('event has a button for more details', () => {
    expect(eventWrapper.find('.details-button')).toHaveLength(1)
  });
  test('details are not shown if button is not clicked', () => {
    expect(eventWrapper.find('.details')).toHaveLength(0) 
    //for now, it checks that, when the button to show more details is not clicked, it doesn't show any more details.
  })
  test('button opens a list of details', () => {
    eventWrapper.find('.details-button').simulate('click');
    expect(eventWrapper.find('.details')).toHaveLength(1) 
    // here when you click the button, the details get displayed. 
  })

})
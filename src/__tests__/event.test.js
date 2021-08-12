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
test('button opens a list of details', () => {
  
})

})
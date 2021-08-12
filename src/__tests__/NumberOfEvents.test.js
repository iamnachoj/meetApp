import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../components/numberofevents/numberofevents';

describe('<NumberOfEvents/> component', () => {
  let numberOfEventsWrapper;
  
  beforeAll(()=>{
    numberOfEventsWrapper = shallow(<NumberOfEvents/>)
  })
  
  test('check if textbox is rendered', () => {
    expect(numberOfEventsWrapper.find('.num-events')).toHaveLength(1)
  })

})
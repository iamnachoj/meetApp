import React from 'react';
import {shallow} from 'enzyme';

//components
import CitySearch from '../components/citysearch/citysearch';

describe('<CitySearch/> component', () => {
  
  let citySearchWrapper;
  beforeAll(() => {citySearchWrapper = shallow(<CitySearch/>)})

  test('render text input', () => {
    expect(citySearchWrapper.find('.city-input')).toHaveLength(1);
  });
  test('render suggestions', () =>{
    expect(citySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
  test('renders text input correctly', () => {
    const query = citySearchWrapper.state('query');
    expect(citySearchWrapper.find('.city-input').prop('value')).toBe(query);
  });

});
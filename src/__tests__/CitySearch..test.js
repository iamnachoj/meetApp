import React from 'react';
import {shallow} from 'enzyme';

//components
import CitySearch from '../components/citysearch/citysearch';

describe('<CitySearch/> component', () => {

 test('render text input', () => {
  const citySearchWrapper = shallow(<CitySearch/>);
  expect(citySearchWrapper.find('.city-input')).toHaveLength(1);
 });

});
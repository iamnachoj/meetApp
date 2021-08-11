import React from 'react';
import {shallow} from 'enzyme';
import {mockData} from '../mock-data';
import { extractLocations } from '../api';

//components
import CitySearch from '../components/citysearch/citysearch';

describe('<CitySearch/> component', () => {
  
  let citySearchWrapper;
  beforeAll(() => {citySearchWrapper = shallow(<CitySearch/>)})

  //1 
  test('render text input', () => {
    expect(citySearchWrapper.find('.city-input')).toHaveLength(1);
  });
  //2
  test('render suggestions', () =>{
    expect(citySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
  //3
  test('renders text input correctly', () => {
    const query = citySearchWrapper.state('query');
    expect(citySearchWrapper.find('.city-input').prop('value')).toBe(query);
  });
  //4
  test('change state when text input changes', () => {
    citySearchWrapper.setState({
      query: ''
    });
    const eventObject = {target: {value: 'Berlin'}};
    citySearchWrapper.find('.city-input').simulate('change', eventObject);
    expect(citySearchWrapper.state('query')).toBe('Berlin')
  });
  //5
  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    const citySearchWrapper = shallow(<CitySearch />);
    citySearchWrapper.setState({ suggestions: locations });
    const suggestions = citySearchWrapper.state('suggestions');
    expect(citySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(citySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

});
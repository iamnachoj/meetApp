import React from 'react';
import {shallow} from 'enzyme';
import {mockData} from '../mock-data';
import { extractLocations } from '../api';

//components
import CitySearch from '../components/citysearch/citysearch';

describe('<CitySearch/> component', () => {
  
  let locations, citySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    citySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  })

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
    citySearchWrapper.setState({ suggestions: locations });
    const suggestions = citySearchWrapper.state('suggestions');
    expect(citySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(citySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });
  //6
  test('suggestion list match the query when changed', () => {
    citySearchWrapper.setState({ query: '', suggestions: [] });
    citySearchWrapper.find(".city-input").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = citySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(citySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  });
  //7
  test("selecting a suggestion should change query state", () => {
    citySearchWrapper.setState({
      query: 'Berlin'  });
    const suggestions = citySearchWrapper.state('suggestions');
    citySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(citySearchWrapper.state("query")).toBe(suggestions[0]);
  });
  //8
  test("selecting CitySearch input reveals the suggestions list", () => {
    citySearchWrapper.find('.city-input').simulate('focus');
    expect(citySearchWrapper.state('showSuggestions')).toBe(true);
    expect(citySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none' });
  });

});
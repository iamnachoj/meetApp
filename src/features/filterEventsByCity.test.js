import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';

//components
import App from '../App';
import CitySearch from '../components/citysearch/citysearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
  //1
  test('when user hasn’t searched for a city, show upcoming events', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn’t searched for any city', () => {});
    when('the user opens the app', () => {
       AppWrapper = mount(<App />);
    });
    then('the user should see a list of all upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });
  //2
  test('user should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    let CitySearchWrapper;
    let locations = extractLocations(mockData);
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
    });

    when('user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city-input').simulate('change', { target: { value: 'Berlin' } });
    });

    then('the user should see a list of cities (suggestions) that match what they’ve typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });
  //3
  test('user can select a city from the suggested list.', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user was typing “Berlin” in the city textbox', () => {
      AppWrapper =  mount(<App />); //ad 'await' to this line of code
      AppWrapper.find('.city-input').simulate('change', { target: { value: 'Berlin' } });
    });

    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
    });

    and('the user should receive a list of upcoming events in that city', () => {
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

});
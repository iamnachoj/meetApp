import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mockData } from '../mock-data';
import {mount} from 'enzyme';
import { extractLocations } from '../api';
//components
import App from '../App';
import CitySearch from '../components/citysearch/citysearch';
import Event from '../components/event/event';
import EventList from '../components/eventlist/event-list';
import NumberOfEvents from '../components/numberofevents/numberofevents';
const feature = loadFeature('./src/features/specifyNumberEvents.feature');
defineFeature(feature, test => {
  let locations = extractLocations(mockData)
  let CitySearchWrapper;
  let EventListWrapper;
  let EventWrapper;
  let AppWrapper;
  let NumberOfEventsWrapper;
  test('When user hasn’t specified a number, show all number of events.', ({ given, when, then }) => {
    given('the user didn’t have a preference of the quantity of events he wants to receive', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user does not specify and touch anything just after searching for events', () => {
      AppWrapper = mount(<App />);
    });

    then('it should receive all events as default', () => {
      NumberOfEventsWrapper = mount(<NumberOfEvents events={mockData} />);
      expect(NumberOfEventsWrapper.find('.num-events').props().value).toBe(30)
    });
  });
  test('User can see the number of events the specified city has', ({ given, when, then }) => {
    given('the user looks for a city from the list', () => {
      CitySearchWrapper = mount(<CitySearch locations={locations} updateEvents={() => {}} />)
      CitySearchWrapper.setState({
        query: ''
      });
      const eventObject = {target: {value: 'Berlin'}};
      CitySearchWrapper.find('.city-input').simulate('change', eventObject);
      expect(CitySearchWrapper.state('query')).toBe('Berlin')
    });

    when('the user clicks on a city', () => {
      CitySearchWrapper.setState({
        query: 'Berlin'  });
      const suggestions = CitySearchWrapper.state('suggestions');
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
      expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
    });

    then('it can be seen the number of events displayed in a box', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      CitySearchWrapper.setState({
        query: 'Berlin'
      });
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
      expect(EventWrapper.find('.event-title')).toHaveLength(1)
    });
  });
})
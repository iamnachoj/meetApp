import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mockData } from '../mock-data';
import {mount} from 'enzyme';

//components
import App from '../App';
import Event from '../components/event/event';
import EventList from '../components/eventlist/event-list';

const feature = loadFeature('./src/features/showHideEvents.feature');

defineFeature(feature, (test) => {
  let EventListWrapper;
  let EventWrapper;
  let AppWrapper;
  //1
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user didn’t click on any event just yet', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('they see the list of events', () => {
      AppWrapper = mount(<App />);
    });

    then('all events should be collapsed, showing only essential info.', () => {
      expect(EventWrapper.find(".details")).toHaveLength(0);
    });
  });
  //2
  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the user found a particular event interesting', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the client clicks on the event', () => {
      EventWrapper.find(".btn").simulate("click");
    });

    then('it should provide more information about it by expanding and offering more data', () => {
      expect(EventWrapper.find(".details")).toHaveLength(1);
    });
  });
  //3
  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('the user wanted to no longer see the extra info displayed about an opened event', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".btn").simulate("click");
      EventWrapper.find(".details");
    });

    when('the user clicks again on it,', () => {
      EventWrapper.find(".btn").simulate("click");
    });

    then('the event will collapse again', () => {
      expect(EventWrapper.find(".details")).toHaveLength(0);
    });
  });
})
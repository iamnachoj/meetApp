import puppeteer from 'puppeteer';
import React from 'react';

//components
import App from '../App';
import EventList from '../components/eventlist/event-list';
import CitySearch from '../components/citysearch/citysearch';
import NumberOfEvents from '../components/numberofevents/numberofevents';
import {mockData} from '../mock-data';
import {extractLocations, getEvents} from '../api';


//test suite
describe('show/hide an event details', () => {
  
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: true,
      // slowMo: 250,
      // ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      } // headless is a feature that makes puppeteer open the browser automatically without developer seen it in action. If set to false, you will see the test happening.
    ); // define instrucctions in case the developer wants to see the browser action or not, and the speed. 
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });
  afterAll(() => {
    browser.close();
  })

  //1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  //2
  test('User can expand an event to see its details', async () => {
    await page.click('.event .btn'); //clicks the button with that class, which is the 'show details' button
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined(); //then expects the details to be displayed (to be defined)
  });

  //3
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});
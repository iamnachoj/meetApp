# meetApp
This is a **serverless**, **progressive web application** (PWA) with **React** using a **test-driven development** (TDD) technique. The application uses the **Google Calendar API** to fetch upcoming events.

## Deployment

This project was built running **create-react-app** on npm and with the use of a serverless from AWS. 

Check out my demo <a href='https://iamnachoj.github.io/meetApp/'>here</a>.

Else, you can fork the project, make sure all dependencies are installed and run ```'npm start' ```

### Scope
This application pulls an event list from Google Calendars API. The events are filterable by city, visual data updates in 2 different charts, and allows you to set number of displayed events. The application is also a Progressive Web Application (PWA) allowing you to install it through a browser onto your device.

The intended scope of this project was to learn various testing models. I started with Unit Testing, then Integration testing and finalized the functionality with User Acceptance and End-to-End Testing with Atatus.

### Technologies Used
Dependencies | Version
------------ | -------------
 React | 17.0.2
 React-dom | 17.0.2
 react-scripts | 4.0.3
 web-vitals | 0.2.4
 Work-box | 5.1.4
 datejs | 1.0.0-rc3
 axios | 0.21.1
 atatus-spa | 4.3.2
 gh-pages | 3.2.3
 
 ### testing tools (TDD & BDD)
  -  "@testing-library/jest-dom": "^5.14.1",
  - "@testing-library/react": "^11.2.7",
  - "@testing-library/user-event": "^12.8.3",
  -  "enzyme": "^3.11.0",
  -  "jest-cucumber": "^3.0.1",
  - "puppeteer": "^10.2.0"


## Project Brief
 User Stories for each feature and sceneries for each feature.

### 1. Filter events by city
As a user I should be able to filter events by city So that I can see the list of events that take place in that city

#### SCENARIO 1: When user hasn't searched for a city, show upcoming events from all cities.

Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

#### SCENARIO 2: User should see a list of suggestions when they seach for a city.

Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they’ve typed

#### SCENARIO 3: User can select a city from the suggested list.

Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

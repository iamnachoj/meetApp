# Meet Up App
This is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Deployment

Check out my demo <a href='https://iamnachoj.github.io/meetApp/'>here</a>.

Else, you can fork the project, make sure all dependencies are installed and run 'npm start'

### Scope
This application pulls an event list from Google Calendars API. The events are filterable by city, visual data updates in 2 different charts, and allows you to set number of displayed events. The application is also a Progressive Web Application (PWA) allowing you to install it through a browser onto your device.

The intended scope of this project was to learn various testing models. I started with Unit Testing, then Integration testing and finalized the functionality with User Acceptance and End-to-End Testing with Atatus.

### Technologies Used
React Google Calendar API
Dependencies
testing-library/jest-dom
testing-library/react
testing-library/user-event
atatus-spa
axios
bootstrap
moment
nprogress
react
react-bootstrap
react-dom
react-scripts
recharts
web-vitals
workbox-background-sync
workbox-broadcast-update
workbox-cacheable-response
workbox-core
workbox-expiration
workbox-google-analytics
workbox-navigation-preload
workbox-precaching
workbox-range-requests
workbox-routing
workbox-strategies
workbox-streams

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

## Deployment

Check out my demo <a href='https://iamnachoj.github.io/meetApp/'>here</a>.

Else, you can always for the project, make sure all dependencies are installed and run 'npm start'

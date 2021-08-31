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

#### Privacy policy <a href="https://iamnachoj.github.io/meetApp/privacy.html" >here</a>
This site uses the Google Calendar API and will therefore asks users for authentication. This site is used specifically for education purposes and has no commercial intent or use. No personal data is collected or saved at any stage and the calendar accessed is not a personal calendar, but one created specifically for the project.

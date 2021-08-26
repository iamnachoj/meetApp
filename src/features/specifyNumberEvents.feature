Feature: Specify number of Events.

Scenario: When user hasn’t specified a number, show all number of events.
Given the user didn’t have a preference of the quantity of events he wants to receive
When the user does not specify and touch anything just after searching for events
Then it should receive all events as default

Scenario: User can see the number of events the specified city has
Given the user looks for a city from the list
When the user clicks on a city
Then it can be seen the number of events displayed in a box


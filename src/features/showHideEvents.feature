Feature: Show and hide events details when clicking a button

Scenario: An event element is collapsed by default.
Given the user didn’t click on any event just yet
When they see the list of events
Then all events should be collapsed, showing only essential info.

Scenario: User can expand an event to see its details.
Given the user found a particular event interesting
When the client clicks on the event
Then it should provide more information about it by expanding and offering more data

Scenario: User can collapse an event to hide its details.
Given the user wanted to no longer see the extra info displayed about an opened event
When the user clicks again on it, 
Then the event will collapse again

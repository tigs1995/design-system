# Insights Design System 

This Insights application is designed to provide three widgets, with information relating to whether a users credit is on track or off track for specific credit report elements. 

## Installation

### `npm install`

This installs all of the dependencies from the package.json that the application needs to run.

## Running

### `npm start`

This will run the app and open it on localhost:3000. 

## Testing

### `npm test`

This will run all of the jest tests and print the results into the terminal. 

### `npm test -t <test-name>`

This will run the individual jest tests which contain the test name mentioned in the above command. 

## Page setup 

### Dashboard

This is a single-page application. The features are:
* Three widgets with information relating to the electoral roll, public information and credit utilisation.
* Each widget contains a title, a description, a chip displaying the level of impact and a chip displaying whether the user is 'on track' or 'off track'.
* The dashboard is designed to change appearance depending on the size of the screen. 

## Assumptions

* I have assumed that the user has logged into the application and the data displayed is specific to that user. 
* I have assumed that the application is fine to be run manually from the termianl by the end user. 

## Project structure 

This project has been split into componoents in order to make it easier to find elements of the application. Each folder with testable elements has an __tests__ folder which contains the tests for these elements. 

## Improvements

Project improvements if I had more time:
* The medium screen layout displays the widgets in rows. I could not get the to display in two columns and due to running out of time, I did not manage to fix this. I have tried setting minimum and maximum widths and 'wrap' for the flexWrap dimension, and if I had more time I would carry on down this path.
* If you refresh the page, the impact chip is either in the right place for the small screen display but not the medium or large, or it is in the right place for the medium and large screen display but not the small. If I had more time I would look at how the boundaries are set in the card component.
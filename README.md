# README

## Project Description

This Seattle Parks Application offers information on parks in the city of Seattle. This application will allow users to keep a record of all their trips, plan future trips and read about trips other people have taken. 

This application hopes to inspire users to explore new parks in the city while staying safe during COVID-19.

## GitHub Repos
* Front-end: https://github.com/sarakhandaker/seattle-parks-react
* Back-end: https://github.com/sarakhandaker/seattle-parks-rails

## Technologies Used
This project uses Ruby and Rails with a postgres database on the back-end, and JavaScript, React, Redux, CSS and HTML on the front-end with JWT for authentication.
* GeoCoder for geolocating
* Bootstrap for CSS 
* Chart.js for Graphs 
* Google Maps
* Weather API: https://www.metaweather.com/
    * woeid=2490383 for Seattle, WA
* Data from: http://data-seattlecitygis.opendata.arcgis.com/
* Ruby version '2.6.1'

## To Start
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## User Stories

* Account
    * User can login/ signup to the site (with authentication and validations)
    * User can edit their account information

* Parks
    * User can see a list of Seattle Parks (With Maps)
    * User can filter through parks by neighbouhood, features, /already visited
    * User can see a specific Park and its details 

* Saved List
    * User can save parks they want to visit 

* Visits
    * User can post a new visit to a park (with comments, rating)
    * User can plan a visit in the future
    * User can see and edit all past visits
    * User can delete a visit

* Weather
    * User can see the upcoming weather 

* Data 
    * User can see the busiest parks (density)
    * /User can see data on visits vs weather 
    * User can see what percentage of the parks they have visited

## Trello 
https://trello.com/b/BQ3YuPcK/mod-5-project

## Future Updates
* Google Maps Direction
* Extras: Admin Account, notifications, new user walkthrough, share on social media, sounds, file uploads

## License
This project is licensed under the GNU General Public License.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



to do:
sort the parks alphabetically
fix search parks

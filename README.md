Welcome to my API Explorer

This app lets developers to easily test the workings of an API.

Running a local copy

$ git clone
$ npm start
$ npm run compile-less



Steps for using the app



1. Configure the type of inputs you want to send by pasting an array of objects into the configure textarea

2. Step #1 above renders your configured <input> elements onto the page

3. Choose your HTTP Method and add in any headers

4. Enter your given data that you want sent as the request body

5. Hit the submit button

6. View the server response in the area 'Server Response'


### GET Requests

- just delete the example input from the screen
- leave the empty string though.
- choose your url and then hit send request

### POST requests

### Patch requests


### Delete requests


To do 

- add validations for input fields and/or headers. E.g. That is a not a valid input type. 
- better error handling
- limiting the length of response derived from the server
- accessibility 
- unit tests for rendering
- consider using react router
- develop better visualization for server response possibly using React-router and/or single-paginess
-  add functionality for adding more than 3 headers per request. dynamic generation of headers

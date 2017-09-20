#### Welcome to my API Explorer

This web app allows developers to quickly and easily test the workings of an API.

#### Running a local copy

1) Clone this repo

```
$ git clone git@github.com:tobicodes/API-Explorer.git

```
2) Install the required dependencies

```
$ npm install 
```

3) Start running your local copy on your laptop. Default port is 3000. If that port is taken, you'll have the option to run on another port.

```
$ npm start
```

If everything worked out fine, you should see the following in your browser

![Screenshot of web app home page](/API-Explorer-whole.png?raw=true "Optional Title")



#### Steps for using the app



1. Configure the type of inputs you want to send by pasting an array of objects into the configure textarea

2. Step #1 above renders your configured ```<input> ```elements onto the page

3. Choose your HTTP Method and add in any headers as key-value pairs. 

4. Enter your given data that you want sent as the request body

5. Hit the submit button

6. View the server response in the area  ***Server Response ***


### GET Requests

Since you don't need a request body for a GET request, simply remove the example input data from the config box. Just hit CMD +A and Delete (on a Mac) to remove the example array. 

Your config box should look like this after you remove the example input data.

![Screenshot of web app home page](/API-Explorer-no-body-required.png?raw=true "Optional Title")


Choose your URL, then add any headers and then hit the 'Send request' button.

The server response will be displayd. 

### POST requests

Given the rendered input elements, simply enter your info and hit submit request.

The URL would probably look like this:  

```http://${BASE_URL}/resource/:resource_id ```

Hit the submit button and your server response will be displayed in the **server response section.**



### Delete requests

Simply put the correct URL - for a DELETE request, this typically looks something like: 

```http://${BASE_URL}/resource/:resource_id ```

So an example would be URL would be: 

``` http://jsonplaceholder.typicode.com/posts/1```

Hit the submit button and your server response will be displayed in the **server response section.**

### Patch requests

Simply put the correct URL - for a PATCH request, this typically looks something like: 

```http://${BASE_URL}/resource/:resource_id ```

So an example would be URL would be: 

``` http://jsonplaceholder.typicode.com/posts/1```

You can send th

Hit the submit button and your server response will be displayed in the **server response section.**


#### Next steps

This was a quick and incomplete attempt at building an API explorer that's useful, well-documented, visually appealing and functional from an efficiency standpoint. 

Some next steps include: 

- Including validations for input fields for both configuration inputs and header inputs. 
- Better error handling for failed requests
- Limiting the length of displayed response for a given server response
- Unit tests  
- Implement functionality for user to add more than 3 headers per request
- Ensuring accesibility of forms 
- Extend functionality to other HTTP Methods
- Fix bug that crashes app with deleted empty string 


Some ideas to consider: 

- Consider using React-Router to route pages with single-page feel instead of displaying everything on one scrolling page
- Develop better visualization for server response - possibly including color for statusCodes and a summary field that highlights the major response properties before letting the user to click a 'Show More' button to see the entire response.

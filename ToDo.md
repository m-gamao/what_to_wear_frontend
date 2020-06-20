const endPoint = "http://localhost:3000/api/v1/outfits"


document.addEventListener('DOMContentLoaded', () => {
  // 1) fetch and load city
  // getCityInput()

  //2) The document is the DOM. Look for an element in the HTML and save it to a variable, 
    // const selectCityform. The #select-city-form is the ID of the element. On this form, 
    // you're going to click on a button and have JS listen to when that form is submitted,
    // and do something different from what we did in Rails. 
    // JS needs to know when that form is submitted.
  const selectCityform = document.querySelector("#select-city-form")

  //3) The Event listener takes 2 functions- 
    // a) submit, b) a call back function that tells the app what it should do.
    // The createFormHandler runs when the form is submitted and is then passed the event (e) 
    // You have just submitted the form.
  selectCityform.addEventListener("submit", (e) => createFormHandler(e))
})

//4) Fetch the data from the backend API. You're calling on this URL. 
  // Then you get a response in JSON. That data can be checked in the console.

fetch('http://localhost:3000/api/v1/conditions')
    .then(response => {
      return response.json();
    })
    .then(weather => {
      // weather.data.forEach(weather => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger
      let weather=json.description
      let temperature=json.temperature
      let outfit=json.outfit  
    }
     
//5) This function handles the inputs from the user (mainly the option value)
  //The createFormHandler runs whenever the form is submitted. 
  //const cityInput and the querySelector #option_value comes from the html. 
  //'option_value' is the element ID we need, to correlate to the object in the db.
  function createFormHandler(e) {  
    e.preventDefault()
    const cityInput = document.querySelector('#option_value').value  
    console.log(cityInput)
  }

  function getWeather() {
    let newWeather = new Weather(weather)
    document.getElementById('#weather-container').innerHTML= 
    newWeather.renderWeatherCard()
})

To Do List:

1. Make sure that rails backend is working.
    a. set up database and schema. *DONE*
    b. deliver that as an API so that you can view it in the browser when you 
        start the API. *DONE*

2. Connect the front end to the back end.
    1. Follow steps in the lecture videos list (youtube and the source code)
        a. make sure that the CityInput is going from the select to the backend and get JSON response from the backend. 
        b. make sure that the frontend displays the correct JSON data (temperature and conditions) 
        c. make sure that the frontend also displays the proper attire for the weather data.

3. Make sure to meet all the requirements and submit.



________________________________________________
JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).
Rails
[ ] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
[ ] Well-named variables and methods
[ ] Short, single-purpose methods
Git
[ ] Aim for a large number of small commits - commit frequently!
[ ] Add meaningful messages to your commits. When you look back at your commits with git log, the messages should describe each change.
[ ] Don't include changes in a commit that aren't related to the commit message


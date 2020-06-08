const endPoint = "http://localhost:3000/api/v1/outfits"

document.addEventListener('DOMContentLoaded', () => {
  // 1) fetch and load zipcode
  getZipcode()

  //2) The document is the DOM. Look for an element in the HTML and save it to a variable, 
    // const createZipcodeForm. The #create-zipcode-form is the ID of the element. This form, 
    // you're going to click on a button and have JS listen to when that form is submitted,
    // and do something different from what we did in Rails. JS needs to know when that form is 
    // submitted.
  const createZipcodeForm = document.querySelector("#create-zipcode-form")

  //3) The Event listener takes 2 functions- 
    // a) submit, b) a call back function that tells the app what it should do.
    // The createFormHandler runs when the form is submitted and is then passed the event (e) 
    // You have just submitted the form.
  createZipcodeForm.addEventListener("submit", (e) => createFormHandler(e))
})

  //4) This function handles the inputs from the user. You do your API Call inside this function.
  function createFormHandler(e) {   //The createFormHandler runs whenever the form is submitted. 
    e.preventDefault()
    const zipcodeInput = document.querySelector('#zipcode').value  
    //const zipcodeInput and the querySelector #zipcode comes from the html.
    //Use backticks to add the API CALL. String interpolate the zipcodeInput.
    let URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcodeInput}&appid=529455d82ee4cf584b975c5961524222&units=imperial`
    //Now you fetch the URL.
    fetch(URL)
    .then(r => r.json())  //response then gets a response from the API in JSON format.
    .then(json => {       //then you get the specified objects from this json that has been returned.   
    let temperature=json.main.temp 
    let condition=json.weather[0].main;  //You get the first object in the array within weather.
})
 
}

  // 5) The HTML file presents that weather data (conditions and temp) to the user in the display 
        //container on the page.
        //weather-container is where the weather data is going to go for the user to see.
  const weatherContainer = document.querySelector('#weather-container')
  weatherContainer.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id);
    const weather = Weather.findById(id);
    document.querySelector('#update-weather').innerHTML = weather.renderUpdateForm();

// // listen for the submit event of the edit form and handle the data
//   document.querySelector('#update-outfit').addEventListener('submit', e => updateFormHandler(e))

// })


//Create weather container to display to the user.
function postFetch(description, ) {
  // build my body object outside of my fetch
  const bodyData = {weather.main, main.temp}
 
  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  // .catch(err => console.log(err))
  .then(weather => {
    console.log(weather);
    const weatherData = weather.data
    // render JSON response
    let newWeather = new Weather(weatherData, weatherData.attributes)
 
    document.querySelector('#weather-container').innerHTML += newWeather.renderWeatherCard()
  })
 

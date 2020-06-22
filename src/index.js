// 1) Event listener for the form:
document.addEventListener('DOMContentLoaded', () => {
    const cityForm = document.querySelector("#city-form");
    cityform.addEventListener("submit", e => createFormHandler(e))
  })

// 2) Form handler that handles the event. The city's options value is the id:
function createFormHandler(e) {
    e.preventDefault()  //prevents page refresh.
    //get the value selected by the user:
    const optionSelect = document.querySelector('#city-select').value;
    // console.log(citySelect); // Otherwise this function has no effect
}
    //now we do the fetch, we'll send the cities condition id to the backend, 
      //to get the condition related to it.

      fetch(`/api/v1/conditions/${optionSelect}`)  
      // so that params[:id] to be the id of the cities_condition
      .then(response => response.json())
      .then(data => {
          displayWeather(data); //calls the below function
      });

// 3) This is where the Weather class constructor comes into play:
function displayWeather(weather) {
  let newWeather = new Weather(data);  // Data comes from the above fetch. Pass it to this method.
  let newCard = newWeather.renderWeatherCard();
  document.getElementById('#weather-container').innerHTML = newCard;
}
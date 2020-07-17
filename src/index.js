// 1) Event listener for the form:
document.addEventListener('DOMContentLoaded', () => {
    const cityForm = document.querySelector("#city-form");
    cityForm.addEventListener("submit", e => createFormHandler(e))
  })

// 2) Form handler that handles the event. The city's options value is the id:
function createFormHandler(e) {
    e.preventDefault()  //prevents page refresh.
    //get the value selected by the user:
    const userInput = document.querySelector('#user-input').value;
    console.log(userInput); // Otherwise this function has no effect

    //now we do the fetch, we'll send the id to the backend, 
      //to get the condition related to it.

      fetch(`http://localhost:3000/api/v1/conditions/${userInput}`)  
      // so that params[:id] to be the id of the cities_condition
      .then(response => response.json())
      .then(data => {
            let newWeather = new Weather(data);  // Data comes from the above fetch. Pass it to this method.
            let newCard = newWeather.renderWeatherCard();
            document.getElementById('weather-container').innerHTML = newCard;
        })
      
}

// 3) Give edit and update capability to outfits model
// create a function that adds new outfits and displays them

// Step 1: the user clicks the "add-new-outfit" button, and fills out the form:

window.onload = function () {
  document.getElementById("outfits-form").style.display = "none";
};

function displayForm() {
  document.getElementById("outfits-form").style.display = "block";
}

function getOutfits(e) {
  e.preventDefault() //prevent page refresh.
  //now get the input from the user
  const newDescription = document.querySelector("#description-input").value;
  const newWeatherType = document.querySelector("#weather-type-input").value;
  document.addEventListener("submit", e => createOutfits(e))
}

function postFetch(e) {
  e.preventDefault()
  fetch(`http://localhost:3000/api/v1/cities_conditions/${userInput}/`)  
  // so that params[:id] to be the id of the cities_condition
  .then(response => response.json())
  .then(data => {
        let newWeather = new Weather(data);  // Data comes from the above fetch. Pass it to this method.
        let newCard = newWeather.renderWeatherCard();
        document.getElementById('weather-container').innerHTML = newCard;
    })


function showOutfits(e)  
  let newOutfits = new Outfits(data);   
  let newOutfitsCard = newOutfits.renderOutfitsCard();
  document.getElementById('outfits-container').innerHTML = newOutfitsCard;
}

// ALTERNATE CODE FOR 2ND FORM IS BELOW!!!!!


function createFormHandler(e) {
  e.preventDefault()
  const cityInput = document.querySelector('#checkcity-id').value
  const weatherTypeInput = document.querySelector('#weather-type-input').value  
  const descriptionInput = document.querySelector('#description-input').value
  postFetch(cityInput, weatherTypeInput, descriptionInput)
}

function postFetch(condition_id, weather_type, description) {
  // build my body object outside of my fetch
  const bodyData = {condition_id, weather_type, description}

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(outfit => {
    console.log(outfit);
    const outfitData = outfit.data
    // render JSON response
    let newOutfit = new Outfit(outfitData, outfitData.attributes)
    document.querySelector('#outfit-container').innerHTML += newOutfit.renderOutfitCard()
  })

}

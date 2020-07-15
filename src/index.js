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

function createOutfits(e) {
  e.preventDefault()
  let newOutfits = new Outfits(data);   
  let newOutfitsCard = newOutfits.renderOutfitsCard();
  document.getElementById('outfits-container').innerHTML = newOutfitsCard;
}


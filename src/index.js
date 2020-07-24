// STEP 1:
  // Event listener for the form:
document.addEventListener('DOMContentLoaded', () => {
  const cityForm = document.querySelector("#city-form");
  cityForm.addEventListener("submit", e => createFormHandler(e))
  const outfitsForm = document.querySelector("#outfits-form");
  outfitsForm.addEventListener("submit", e => postFetchOutfits(e))
 
  const citySelect = document.querySelector('#checkcity-id');
  citySelect.addEventListener('change', function(event){
    setOutfitDescription(this.value);

  })
})

// STEP 2: 
  // This step will allow the user to see the original outfit listed in the description input field.
   // take the cities_condition_id and make a fetch request to get the corresponding condition  
  // use the condition to update the description in the new outfit form
   // set the value of the description input to the outfit so the user can see what they are changing.
function setOutfitDescription(citiesConditionId) {
  fetch(`http://localhost:3000/api/v1/conditions/${citiesConditionId}`)
  .then(response => response.json())
  .then(condition => {
    populateOutfitCondition(condition.outfit);
  })
}
​
function populateOutfitCondition(outfit) {
   document.getElementById('description-input').value = outfit;
}

// STEP 3:
  // Need to pull in the city names from the back end and then sort them dynamically in the JS.
  // get the names of all the cities in the cities_conditions index
  // render the cities in sorted order as per class file
function getCityNames(e)
  fetch(`http://localhost:3000/api/v1/conditions/${citiesConditionId}`)

  
function setOutfitDescription(citiesConditionId) {
  fetch(`http://localhost:3000/api/v1/cities_conditions`)
  .then(response => response.json())
  .then(cities => {

    const arrayCities = ["New York City", "Los Angeles", "Tokyo", "London", "Beijing", "Paris"]
    cities.sort();
    console.log(cities);

    let newCities = new Cities(data);  // Data comes from the above fetch. Pass it to this method.
    let newCitiesCard = newCities.renderCitiesCard();
    document.getElementById('city-container').innerHTML = newCitiesCard;    ;
  })
}

// 2) Form handler that handles the event. The city's options value is the id:
    //get the value selected by the user.
      //then we do the fetch, we'll send the id to the backend, 
      //to get the condition related to it.
      // so that params[:id] to be the id of the cities_condition (ln 68)
function createFormHandler(e) {
    e.preventDefault()  //prevents page refresh.

    const userInput = document.querySelector('#user-input').value;
    console.log(userInput); // Otherwise this function has no effect


      fetch(`http://localhost:3000/api/v1/conditions/${userInput}`)  
      .then(response => response.json())
      .then(data => {
            let newWeather = new Weather(data);  // Data comes from the above fetch. Pass it to this method.
            let newCard = newWeather.renderWeatherCard();
            document.getElementById('weather-container').innerHTML = newCard;
        })
      
}

// 3) Give edit and update capability to outfits model
// create a function that adds new outfits and displays them

// Step 1: The form is invisible when the page first loads. (see 'window.onload')
// Step 2: When the user clicks the Edit my oufits button, the form appears. (using html 'eventclick' button)  
// Step 3: User fills out the form. (function postFetchOutfits). Form has 2 user inputs to gather: 
        // the user's city selection, and their description of an outfit for that city
        // This builds the body object, we will call it 'bodyData', where you are setting
        // the property/object's attributes to the constant variables you just created in the
        // function.
// Step 4: 

window.onload = function () {
  document.getElementById("outfits-form").style.display = "none";
};

function displayForm() {
  document.getElementById("outfits-form").style.display = "block";
}

function CollapseForm() {
  document.getElementById("outfits-form").style.display = "none";
};

// function getOutfits(e) {
//   e.preventDefault() //prevent page refresh.
//   //now get the input from the user
//   const newDescription = document.querySelector("#description-input").value;
//   const newWeatherType = document.querySelector("#weather-type-input").value;
//   document.addEventListener("submit", e => createOutfits(e))
// }

// key:value hashes in the bodyData:

function postFetchOutfits(e) {
  e.preventDefault();
  // build my body object outside of my fetch
  const cityConditionId = document.querySelector('#checkcity-id').value
  const outfit = document.querySelector('#description-input').value
  const bodyData = {
    cities_condition_id: cityConditionId, 
    outfit: outfit
  }

  fetch('http://localhost:3000/api/v1/conditions/${checkcity-id}', {
    // Patch request
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(condition => {
    let newOutfit = new Weather(condition);
    let newOutfitCard = newOutfit.renderWeatherCard();
    document.getElementById('weather-container').innerHTML = newOutfitCard;
  })


}

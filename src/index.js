// STEP 1: LOAD DOM CONTENT *************************
  // Event listener for the form:
document.addEventListener('DOMContentLoaded', () => {
  const cityForm = document.querySelector("#city-form");
  cityForm.addEventListener("submit", e => createFormHandler(e))
  
  const outfitsForm = document.querySelector("#outfits-form");
  outfitsForm.addEventListener("submit", e => postFetchOutfits(e))
 
  const citySelectB = document.querySelector('#checkcity-id');
  citySelectB.addEventListener('change', function(event){
    setOutfitDescription(this.value);

  })
})

// STEP 2 (Fetch 1): DISPLAY CURRENT OUTFIT  *************************
  // This step will allow the user to see the original outfit listed in the description input field.
  // Take the cities_condition_id and make a fetch request to get the corresponding condition  
  // Use the condition to update the description in the new outfit form
  // Set the value of the description input to the outfit so the user can see what they are changing.
function setOutfitDescription(citiesConditionId) {
  fetch(`http://localhost:3000/api/v1/conditions/${citiesConditionId}`)
  .then(response => response.json())
  .then(condition => {
    populateOutfitCondition(condition.outfit);
  })
}
function populateOutfitCondition(outfit) {
   document.getElementById('description-input').value = outfit;
}

// STEP 3 (Fetch 2): SORT CITY NAMES IN FORM 1 *************************
  // Need to pull in the city names from the back end and then sort them dynamically in the JS.
  // Get the names of all the cities in the cities_conditions index.
  // Render the sorted cities.
  
setCities();

  //Pull city names from db and sort the cities by name
  //.sort() defaults to A -> Z order
function setCities() {
  fetch(`http://localhost:3000/api/v1/cities_conditions`)
  .then(response => response.json())
  .then(cities => {
    cities.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // get the select element
    let citySelectA = document.getElementById('user-input');
    // clear out the select element in case something was there before
    citySelectA.innerHTML = '';
    // add a blank option so that its empty when it loads, for added effect.
    citySelectA.innerHTML += '<option></option>';
    // loop over the now sorted list of cities. idx stands for index
    cities.map(function(city, idx){
      // add as options in dropdown for city id, city name, using string interpolation
      citySelectA.innerHTML += `<option value=${city.id}>${city.name}</option>`;
    })
  })
}

// STEP 4: GET USER INPUT & START EVENT ***************** 
// Fetch #3
// Form handler that handles the event. The city's options value is the id:
    //get the value selected by the user.
      //send the id to the backend with the fetch to get the condition related to it.
      //so that params[:id] to be the id of the cities_condition (ln 68)
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

// STEP 5 (Fetch 4): SORT CITY NAMES IN FORM 2 *************************
  // Pull city names from the back end again and sort them in the JS.
  // Get the names of all the cities in the cities_conditions index
  // Render the sorted cities.
  
  setCitiesB();

  //Pull city names from db and sort the cities by name
  //.sort() defaults to A -> Z order
function setCitiesB() {
  fetch(`http://localhost:3000/api/v1/cities_conditions`)
  .then(response => response.json())
  .then(cities => {
    cities.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // get the select element
    let citySelectB = document.getElementById('checkcity-id');
    // clear out the select element in case something was there before
    citySelectB.innerHTML = '';
    // add a blank option so that its empty when it loads, for added effect.
    // citySelectB.innerHTML += '<option></option>';
    // loop over the now sorted list of cities. idx stands for index
    cities.map(function(city, idx){
      // add as options in dropdown for city id, city name, using string interpolation
      citySelectB.innerHTML += `<option value=${city.id}>${city.name}</option>`;
    })
  })
}

// STEP 6: ALLOW USER TO EDIT OUTFITS & SAVE TO DB ***************************
// (Fetch #5)
// A function that allows user to edit outfits and display them

// 1) Make the form invisible when the page first loads, using 'window.onload'
// 2) User clicks the "Edit my oufits" button and form appears. (using html 'eventclick' button)  
// 3) User fills out form, see "function postFetchOutfits" below. 
  // Form has 2 user inputs to gather: 
        // user's selection of city, and 
        // the new outfit description
  // This builds the body object, we will call it 'bodyData', where you are setting
        // the property/object's attributes to the constant variables you just created in the
        // function. 

window.onload = function () {
  document.getElementById("outfits-form").style.display = "none";
};

function displayForm() {
  document.getElementById("outfits-form").style.display = "block";
}

function CollapseForm() {
  document.getElementById("outfits-form").style.display = "none";
};

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

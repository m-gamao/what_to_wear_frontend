// 1) Event listener for the form:
document.addEventListener('DOMContentLoaded', () => {
  const cityForm = document.querySelector("#city-form");
  cityForm.addEventListener("submit", e => createFormHandler(e))
  const outfitsForm = document.querySelector("#outfits-form");
  outfitsForm.addEventListener("submit", e => postFetchOutfits(e))
  // changed check boxes to <select>, so add event listener to it so that when it changes, it does ajax
  const citySelect = document.querySelector('#checkcity-id');
  citySelect.addEventListener('change', function(event){
    setOutfitDescription(this.value);
  })
})

function setOutfitDescription(citiesConditionId) {
  // take the cities_condition_id and make a fetch request to get the corresponding condition
  fetch(`http://localhost:3000/api/v1/conditions/${citiesConditionId}`)
  .then(response => response.json())
  .then(condition => {
    // use the condition to update the description in the new outfit form
    populateOutfitCondition(condition.outfit);
  })
}

function populateOutfitCondition(outfit) {
  // set the value of the description input to the outfit so the user can see what they are changing.
  document.getElementById('description-input').value = outfit;
}

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
    // POST request
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

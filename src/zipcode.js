const endPoint = "http://localhost:3000/api/v1/outfits"

document.addEventListener('DOMContentLoaded', () => {
  // 1) fetch and load zipcode
  getZipcode()

  //2) The document is the DOM. Look for an element in the html and save it to a variable, 
    // const createOutfitForm. The #create-zipcode-form is the ID of the element. This form, 
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

  // 5) Now render the edit form once the button is clicked
    //weather-container is where the weather data is going to go for the user to see.
  const weatherContainer = document.querySelector('#weather-container')
  weatherContainer.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id);
    const weather = Weather.findById(id);
    document.querySelector('#update-weather').innerHTML = weather.renderUpdateForm();

// // listen for the submit event of the edit form and handle the data
//   document.querySelector('#update-outfit').addEventListener('submit', e => updateFormHandler(e))

// })

// function getWeather() {
//   fetch(endPoint)
//   .then(response => response.json())
//   .then(weather => {
//     outfits.data.forEach(outfit => {
//       // double check how your data is nested in the console 
//         // so you can successfully access the attributes of each individual object
//       // debugger
//       let newOutfit = new Outfit(outfit, outfit.attributes)

//       document.querySelector('#outfit-container').innerHTML += newOutfit.renderOutfitCard()
//     })
//   // .catch(err => console.log(err))
//   })
// }


// function createFormHandler(e) {
//   e.preventDefault()
//   const nameInput = document.querySelector('#input-name').value
//   const descriptionInput = document.querySelector('#input-description').value
//   const imageInput = document.querySelector('#input-url').value
//   const weatherId = parseInt(document.querySelector('#weather').value)
//   postFetch(nameInput, descriptionInput, imageInput, weatherId)
// }

function postFetch(description, ) {
  // build my body object outside of my fetch
  const bodyData = {name, description, image_url, weather_id}

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  // .catch(err => console.log(err))
  .then(outfit => {
    console.log(outfit);
    const outfitData = outfit.data
    // render JSON response
    let newOutfit = new Outfit(outfitData, outfitData.attributes)

    document.querySelector('#outfit-container').innerHTML += newOutfit.renderOutfitCard()
  })

}
  function updateFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const outfit = Outfit.findById(id);
    const set = e.target.querySelector('#input-name').value;
    const description = e.target.querySelector('#input-description').value;
    const weather_id = parseInt(e.target.querySelector('#weather').value);
    patchOutfit(outfit, name, description, image_url, weather_id)
  }

  function patchOutfit(outfit, name, description, image_url, weather_id) {
    const bodyJSON = { name, description, image_url, weather_id }
    fetch(`http://localhost:3000/api/v1/outfits/${outfit.id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json' ,
        Accept: 'application/json', 
      }, 
      body: JSON.stringify(bodyJSON),
    })
      .then(res => res.json())
      // our backend responds with the updated outfit instance represented as JSON
      .then(updatedNote => console.log(updatedNote));
  }

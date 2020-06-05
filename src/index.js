const endPoint = "http://localhost:3000/api/v1/outfits"

document.addEventListener('DOMContentLoaded', () => {
  // 1) fetch and load outfits
  getOutfits()

  //document is the DOM
  //look for an element in the html and save it to a variable const createOutfitForm
  //#create-outfit-form is the ID of the element
  //This form, you're going to click on a button and have JS listen to when that form is submitted
  //and do something different from what we did in Rails. JS needs to know when that form is 
  //submitted.
  const createOutfitForm = document.querySelector("#create-outfit-form")

  //Event listener takes 2 functions - submit, and call back function that tells the app 
  //what it should do.
  //createFormHandler runs when the form is submitted and is then passed the event (e) 
  //You have just submitted the form.
  createOutfitForm.addEventListener("submit", (e) => createFormHandler(e))
})

// don't worry about this yet
 // render edit form once the button is clicked
 //outfit-container is where the outfit data is going to go for the user to then see.
//   const outfitContainer = document.querySelector('#outfit-container')
//   outfitContainer.addEventListener('click', e => {
//     const id = parseInt(e.target.dataset.id);
//     const outfit = Outfit.findById(id);
//     document.querySelector('#update-outfit').innerHTML = outfit.renderUpdateForm();

// // listen for the submit event of the edit form and handle the data
//   document.querySelector('#update-outfit').addEventListener('submit', e => updateFormHandler(e))

// })

function getOutfits() {
  fetch(endPoint)
  .then(response => response.json())
  .then(outfits => {
    outfits.data.forEach(outfit => {
      // double check how your data is nested in the console 
        // so you can successfully access the attributes of each individual object
      // debugger
      let newOutfit = new Outfit(outfit, outfit.attributes)

      document.querySelector('#outfit-container').innerHTML += newOutfit.renderOutfitCard()
    })
  // .catch(err => console.log(err))
  })
}

//This function handles the inputs from the user
//The createFormHandler runs whenever the form is submitted
//const zipcodeInput and the querySelector #zipcode comes from the html.
//Inside here is where you do your API Call.
function createFormHandler(e) {
  e.preventDefault()
  const zipcodeInput = document.querySelector('#zipcode').value

 //use backticks to add the API CALL. String interpolate the zipcodeInput.
   let URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcodeInput}&appid=529455d82ee4cf584b975c5961524222&units=imperial`

   fetch(URL) 
   .then(response => response.json())
   .then(data => {
    debugger
     
   })

 

}





// function createFormHandler(e) {
//   e.preventDefault()
//   const nameInput = document.querySelector('#input-name').value
//   const descriptionInput = document.querySelector('#input-description').value
//   const imageInput = document.querySelector('#input-url').value
//   const weatherId = parseInt(document.querySelector('#weather').value)
//   postFetch(nameInput, descriptionInput, imageInput, weatherId)
// }

function postFetch(name, description, image_url, weather_id) {
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

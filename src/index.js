const endPoint = "http://localhost:3000/api/v1/outfits"

document.addEventListener('DOMContentLoaded', () => {
  // fetch and load outfits
  getOutfits()

  const createOutfitForm = document.querySelector("#create-outfit-form")

  createOutfitForm.addEventListener("submit", (e) => createFormHandler(e))

 // render edit form once button is clicked
  const outfitContainer = document.querySelector('#outfit-container')
  outfitContainer.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id);
    const outfit = Outfit.findById(id);
    document.querySelector('#update-outfit').innerHTML = outfit.renderUpdateForm();

// listen for the submit event of the edit form and handle the data
  document.querySelector('#update-syllsbus').addEventListener('submit', e => updateFormHandler(e))

})

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

// this function handles the inputs from the user
function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const descriptionInput = document.querySelector('#input-description').value
  const imageInput = document.querySelector('#input-url').value
  const weatherId = parseInt(document.querySelector('#weather').value)
  postFetch(nameInput, descriptionInput, imageInput, weatherId)
}

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
    const name = e.target.querySelector('#input-name').value;
    const description = e.target.querySelector('#input-description').value;
    const image_url = e.target.querySelector('#input-url').value;
    const weather_id = parseInt(e.target.querySelector('#weather').value);
    patchOutfit(outfit, name, description, image_url, weather_id)
  }

  function patchOutfit(outfit, name, description, image_url, weather_id) {
    const bodyJSON = { name, description, image_url, weather_id }
    fetch(`http://localhost:3000/api/v1/outfits/${outfit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyJSON),
    })
      .then(res => res.json())
      // our backend responds with the updated syllabus instance represented as JSON
      .then(updatedNote => console.log(updatedNote));
  });



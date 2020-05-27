const endPoint = "http://localhost:3000/api/v1/outfits"

document.addEventListener('DOMContentLoaded', () => {
  // fetch and load syllabi
  getOutfits()

  const createOutfitsForm = document.querySelector("#create-outfit-form")

  createOutfitForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getOutfits() {
  fetch(endPoint)
  .then(response => response.json())
  .then(outfits => {
    outfits.data.forEach(outfit => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger
      let newOutfit = new Outfit(outfit, outfit.attributes)

      document.querySelector('#outfit-container').innerHTML += newOutfit.renderOutfitCard()
    })
  // .catch(err => console.log(err))
  })
}

function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const descriptionInput = document.querySelector('#input-description').value
  const imageInput = document.querySelector('#input-url').value
  const weatherId = parseInt(document.querySelector('#weathers').value)
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
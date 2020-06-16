const endPoint = "http://localhost:3000/api/v1/outfits"


document.addEventListener('DOMContentLoaded', () => {
  // 1) fetch and load zipcode
  //getZipcode()

  //2) The document is the DOM. Look for an element in the HTML and save it to a variable, 
    // const createZipcodeForm. The #create-zipcode-form is the ID of the element. This form, 
    // you're going to click on a button and have JS listen to when that form is submitted,
    // and do something different from what we did in Rails. JS needs to know when that form is 
    // submitted.
  const selectCityform = document.querySelector("#select-city-form")

  //3) The Event listener takes 2 functions- 
    // a) submit, b) a call back function that tells the app what it should do.
    // The createFormHandler runs when the form is submitted and is then passed the event (e) 
    // You have just submitted the form.
  selectCityform.addEventListener("submit", (e) => createFormHandler(e))
})

  //4) This function handles the inputs from the user.
  function createFormHandler(e) {   //The createFormHandler runs whenever the form is submitted. 
    e.preventDefault()
  
    const cityInput = document.querySelector('cityInput').value  
    //const cityInput and the querySelector #cityInput comes from the html.
    console.log(cityInput)
  }


//5) Fetch the data from the API
fetch('http://localhost:3000/api/v1/conditions')
  .then(response => response.json())
  .then(data => console.log(data));

  let theDescrip = data.description;
  let theTemp = data.temperature;
  let theOutfit = data.outfit;



  // .then(function(resp) {
  //   return resp.json();
  // })
  // .then(function(data) {
  //   console.log(data);

    // theDescrip = data.description;
    // theTemp = data.temperature;
    // theOutfit = data.outfit;
  // })




  // .map(o => ({name: o.name, id: o.id}))


  // 6) Backend sends response to frontend - the city's weather, and the outfit to wear.
  
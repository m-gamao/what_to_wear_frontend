const endPoint = "http://localhost:3000/api/v1/outfits"


document.addEventListener('DOMContentLoaded', () => {
  // 1) fetch and load city
  // getCityInput()

  //2) The document is the DOM. Look for an element in the HTML and save it to a variable, 
    // const selectCityform. The #select-city-form is the ID of the element. On this form, 
    // you're going to click on a button and have JS listen to when that form is submitted,
    // and do something different from what we did in Rails. 
    // JS needs to know when that form is submitted.
  const selectCityform = document.querySelector("#select-city-form")

  //3) The Event listener takes 2 functions- 
    // a) submit, b) a call back function that tells the app what it should do.
    // The createFormHandler runs when the form is submitted and is then passed the event (e) 
    // You have just submitted the form.
  selectCityform.addEventListener("submit", (e) => createFormHandler(e))
})

//4) Fetch the data from the backend API. You're calling on this URL. 
  // Then you get a response in JSON. That data can be checked in the console.

fetch('http://localhost:3000/api/v1/conditions')
    .then(response => {
      return response.json();
    })
    .then(weather => {
      // weather.data.forEach(weather => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger
      let newWeather = new Weather(weather, weather.attributes)

      document.querySelector('#weather-container').innerHTML += newWeather.renderWeatherCard()
    })
  // .catch(err => console.log(err))
  

//5) This function handles the inputs from the user.
  //The createFormHandler runs whenever the form is submitted. 
  //const cityInput and the querySelector #cityInput comes from the html. 
  //'cityInput' is the ID. We get the value of that ID in the html.
  //gets the data from the user (in the drop down menu)
  function createFormHandler(e) {  
    e.preventDefault()
    const cityInput = document.querySelector('#cityInput').value  
    console.log(cityInput)
  
  }
  




  // .then(r => r.json())
  // .then(json => {
    // let weather=json.description
    // let temperature=json.temperature
    // let outfit=json.outfit  

//6) Now you want to 
    // document.getElementById("insert").innerHTML = "write me to the screen";
    // renderWeather() {
    //   return `<tr><td>${this.description}</td><td>${this.temperature}</td>
    // }


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

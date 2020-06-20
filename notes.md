Last code index.js as of 6/19/20 at 12:24pm:
const endPoint = "http://localhost:3000/api/v1/outfits"


// document.addEventListener('DOMContentLoaded', () => {
//   // 1) fetch and load city
//   // getCityInput()

//   //2) The document is the DOM. Look for an element in the HTML and save it to a variable, 
//     // const selectCityform. The #select-city-form is the ID of the element. On this form, 
//     // you're going to click on a button and have JS listen to when that form is submitted,
//     // and do something different from what we did in Rails. 
//     // JS needs to know when that form is submitted.
//   const selectCityform = document.querySelector("#select-city-form")

//   //3) The Event listener takes 2 functions- 
//     // a) submit, b) a call back function that tells the app what it should do.
//     // The createFormHandler runs when the form is submitted and is then passed the event (e) 
//     // You have just submitted the form.
//   selectCityform.addEventListener("submit", (e) => createFormHandler(e))
// })

// //4) Fetch the data from the backend API. You're calling on this URL. 
//   // Then you get a response in JSON. That data can be checked in the console.


//   fetch('http://localhost:3000/api/v1/conditions/:id(.:format)'
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {

//     let weather=json.description
//     let temperature=json.temperature
//     let outfit=json.outfit 

//     return [weather, temperature, outfit];
//     getWeather(weather, temperature, outfit)
//   })
     
// //5) This function handles the inputs from the user (mainly the option value)
//   //The createFormHandler runs whenever the form is submitted. 
//   //const cityInput and the querySelector #option_value comes from the html. 
//   //'option_value' is the element ID we need, to correlate to the object in the db.
//   function createFormHandler(e) {  
//     e.preventDefault()
//     const cityInput = document.querySelector('#cityInput').value  
//     // console.log(cityInput)
//   }

//   function getWeather() {
//     let newWeather = new Weather(weather)
//     document.getElementById('#weather-container').innerHTML= 
//     newWeather.renderWeatherCard()
//     console.log(renderWeatherCard)
// }
---------------------------------------------------------------------------------------------------


// .catch(err => console.log(err))]

  // .then(r => r.json())
  // .then(json => {
    // let weather=json.description
    // let temperature=json.temperature
    // let outfit=json.outfit  

//6) Now you want to 
    // document.getElementById("insert").innerHTML = "write me to the screen";
    // renderWeather() {
      //   return `<tr><td>${this.description}</td><td>${this.temperature}</td
}

_______________________

const endPoint = "http://localhost:3000/api/v1/outfits"


document.addEventListener('DOMContentLoaded', () => {

  const selectCityform = document.querySelector("#select-city-form")

  selectCityform.addEventListener("submit", (e) => createFormHandler(e))
})

let cityData = [weather, temperature, outfit]

fetch('http://localhost:3000/api/v1/conditions/:id(.:format))
    .then(response => {
      return response.json();
    })
    .then(json => {

      let weather=json.description
      let temperature=json.temperature
      let outfit=json.outfit 
      
      return cityData;
      getWeather(weather, temperature, outfit)
    })
     

  function createFormHandler(e) {  
    e.preventDefault()
    const cityInput = document.querySelector('#cityInput').value  
    // console.log(cityInput)
  }

  function getWeather() {
    let newWeather = new Weather(weather)
    document.getElementById('#weather-container').innerHTML= 
    newWeather.renderWeatherCard()
    console.log(renderWeatherCard)
}
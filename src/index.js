// const endPoint = "http://localhost:3000/api/v1/conditions"

document.addEventListener('DOMContentLoaded', () => {

    const selectCityform = document.querySelector("#select-city-form")
  
    selectCityform.addEventListener("submit", e => createFormHandler(e))
  })


// const selectCityform = document.querySelector('#select-city-form');
// selectCityform.addEventListener('submit', e => createFormHandler(e));

function createFormHandler(e) {
    e.preventDefault()
    const cityInput = document.querySelector('#cityInput').value
    // console.log(cityInput); // Otherwise this function has no effect
  }

  // id is a natural number, format is a file extension (string)
  function renderWeatherCard (id) {
    fetch(`http://localhost:3000/api/v1/cities_conditions/${id}`)
    // fetch(`http://localhost:3000/api/v1/conditions/${id}.${format}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const weather = json['description'];
        const temperature = json['temperature'];
        const outfit = json['outfit'];
  

    //   If the condition_id == the option value, then render Weather Card for ${id}

        document.getElementById('#weather-container').innerHTML= '';
        newWeather.renderWeatherCard();

        let newWeather = new Weather(weather, temperature, outfit);
        
        return newWeather
      })
  }
  




//   const selectCityform = document.querySelector('#select-city-form');
//   selectCityform.addEventListener('submit', e => createFormHandler(e));

//   document.addEventListener('DOMContentLoaded', () => {
//     document
//       .querySelector("#select-city-form")
//       .selectCityform.addEventListener("submit", e => createFormHandler(e))
//   })
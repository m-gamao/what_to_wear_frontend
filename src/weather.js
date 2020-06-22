class Weather {

    constructor(weather) {
      this.id = weather.id;
      this.description = weather.description;
      this.temperature = weather.temperature;
      this.outfit = weather.outfit;     
    }
  

    //This 'card' gets copy and pasted by JS into the HTML to display to the user: 
    renderWeatherCard() {
      return `<div class="card">
        <h2>Weather: ${this.description}</h3>
        <h2>Temp: ${this.temperature}</h3>
        <h3>You should wear: ${this.outfit}</h4>
        </div>
        <br><br>`;
    }
  
  }
  

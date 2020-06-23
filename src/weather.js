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
        <h5>
        Weather: ${this.description}
        Temp: ${this.temperature}
        You should wear: ${this.outfit}
        </h5>
        </div>
        <br><br>`;
    }
  
  }
  

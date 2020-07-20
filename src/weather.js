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
        <h4>
        Today's weather: ${this.description}
        <br>
        <h1>${this.temperature} &#8451;</h1><br>
        <h4>
        Wear a ${this.outfit}
        </h4>
        </div>
        <br><br>`;
    }
  
  }
  

class Weather {

    constructor(description, temperature, outfit) {
      this.id = weather.id
      // this.name = name
      this.description = description,
      this.temperature = temperature,
      this.outfit = outfit
      
      // Weather.all.push(this)
      
    }
  
    renderWeatherCard() {
      return `
      <div data-id=${this.id}>
        <div>
          <h3>${this.description}</h3>
          <h3>${this.temperature}</h3>
          <h4>${this.outfit}</h4>
        </div>
        <br><br>`;
    }
  
  }
  
Weather.all = [];
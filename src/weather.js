class Weather {

    constructor(weather, weatherAttributes) {
      this.id = weather.id
      this.description = weatherAttributes.description
      this.temperature = weatherAttributes.temperature
      this.outfit = weatherAttributes.outfit
      Weather.all.push(this)
    }
  
    renderWeatherCard() {
      return `
        <div data-id=${this.id}>
          <h3>${this.description}</h3>
          <p>${this.temperature}</p>
          <p>${this.outfit}</p>
          // <button data-id=${this.image}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Outfit.all = [];
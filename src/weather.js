class Weather {

    constructor(weather) {
      this.id = weather.id
      this.description = description
      this.temperature = temperature
      this.outfit = outfit
      Weather.all.push(this)
      console.log(weather)
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
  
Weather.all = [];
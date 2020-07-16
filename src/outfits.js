class Outfit {

    constructor(outfit) {
      this.id = outfit.id;
      this.description = outfit.description; 
      this.weather_type = outfit.weather_type;  
    }
  
    //This 'card' gets copy and pasted by JS into the HTML to display to the user: 

    renderOutfitsCard() {
      return `<div class="card">
        <h4>
        Outfit choices for ${this.weather_type} weather:</h4>
        <br>
        <h5>${this.description} &#8451;</h5>
        <br>
        </div>
      }
  }
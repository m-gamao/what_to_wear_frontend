
class Outfit {

    constructor(outfit, outfitAttributes) {
      this.id = outfit.id
      this.description = outfitAttributes.description
      this.weather = outfitAttributes.category
      Outfit.all.push(this)
    }
  
    renderOutfitCard() {
      return `
        <div data-id=${this.id}>
          <h3>${this.name}</h3>
          <p>${this.weather.name}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Outfit.all = [];
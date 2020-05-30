
class Outfit {

    constructor(outfit, outfitAttributes) {
      this.id = outfit.id
      this.title = outfitAttributes.title
      this.description = outfitAttributes.description
      this.image_url = outfitAttributes.image_url
      this.category = outfitAttributes.category
      Outfit.all.push(this)
    }
  
    renderOutfitCard() {
      return `
        <div data-id=${this.id}>
          <img src=${this.image_url} height="200" width="250">
          <h3>${this.name}</h3>
          <p>${this.weather.name}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Outfit.all = [];
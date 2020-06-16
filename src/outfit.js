





class Outfit {

    constructor(outfit, outfitAttributes) {
      this.id = outfit.id
      this.description = outfitAttributes.description
      this.condition = outfitAttributes.condition
      Outfit.all.push(this)
    }
  
    renderOutfitCard() {
      return `
        <div data-id=${this.id}>
          <h3>${this.description}</h3>
          <p>${this.condition}</p>
          <button data-id=${this.image}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Outfit.all = [];
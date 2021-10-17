class PokemonServices {
  urlAPI;
  myApi = "https://pokedex-franny.herokuapp.com/pokemon";
  constructor(url) {
    this.urlAPI = url;
  }
  async getResponse() {
    const response = await fetch(this.urlAPI);
    const pokemonLista = await response.json();
    return pokemonLista;
  }
  async createData(idPokemon) {
    await fetch(this.apiPokemon, {
      method: "POST",
      body: JSON.stringify(idPokemon), // este id pokemon tiene que se un objeto del cual guardamos como propiedad y conetnido lo que quiera guaradar
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export default PokemonServices;

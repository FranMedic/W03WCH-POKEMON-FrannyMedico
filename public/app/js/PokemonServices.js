class PokemonServices {
  urlAPI;
  constructor(url) {
    this.urlAPI = url;
  }
  async getResponse() {
    const response = await fetch(this.urlAPI);
    const pokemonLista = await response.json();
    return pokemonLista;
  }
}
export default PokemonServices;

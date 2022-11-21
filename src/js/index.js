import myPokemon from '../templates/pokemon.hbs';

const ADDRESS_BASE = 'https://pokeapi.co/api/v2/pokemon';
const pokemonId = 1;

const containerRef = document.querySelector('.js-pokemon-container');

fetchPokemon(pokemonId).then(renderPokemonCard).catch(findNoPokemon);

function fetchPokemon(pokemonId) {
  return fetch(`${ADDRESS_BASE}/${pokemonId}`).then(r => r.json());
}

function renderPokemonCard(pokemon) {
  const markup = myPokemon(pokemon);
  containerRef.innerHTML = markup;
}

function findNoPokemon() {
  console.log('Not Found');
}

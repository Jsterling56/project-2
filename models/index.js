const pokemonType = require('./pokemonTypes');
const pokemon = require('./pokemons');


// pokemon.hasMany(pokemonType, {
//   foreignKey: 'pokemon_id',
//   onDelete: 'CASCADE',
// });




module.exports = { pokemon, pokemonType };
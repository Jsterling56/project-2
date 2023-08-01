const pokemonType = require('./pokemonTypes');
const pokemon = require('./pokemons');


// pokemon.hasMany(pokemonType, {
//   foreignKey: 'pokemon_id',
//   onDelete: 'CASCADE',
// });

pokemonType.belongsTo(pokemon, {
  foreignKey: 'pokemon_id',
});


module.exports = { pokemon, pokemonType };
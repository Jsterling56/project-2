const seedPokemonData = require('./pokemonSeedData', );
const seedTypes = require('./types');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedTypes();
  console.log('\n----- TYPES SEEDED -----\n');
  await seedPokemonData();
  console.log('\n----- POKEMON SEEDED -----\n');

  process.exit(0);
};

seedAll();
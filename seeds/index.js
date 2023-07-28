const pokemonData = require('./pokemonSeedData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await pokemonData();
    console.log('\n----- POKEMON SEEDED -----\n');

    process.exit(0);
};

seedAll();
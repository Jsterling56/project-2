const router = require('express').Router();
const { pokemon, pokemonType } = require('../models');
const sequelize = require('sequelize');
// The `/api/types` endpoint

// get all types
router.get('/', async (req, res) => {
  try {
    const typesData = await pokemonType.findAll();
    console.log(typesData);
    return res.json(typesData);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

// get one type
router.get('/:id', async (req, res) => {
  try {
    const typeData = await pokemonType.findByPk(req.params.id);
    const pokemonsData = await pokemon.findAll({
      where: {
        pokemon_type: sequelize.where(sequelize.col('pokemon_type'), 'like', `%${req.params.id}%`)
      }
    });
    const pokemonByType = typeData.get({ plain: true });
    const pokemonTypeDict = (await pokemonType.findAll())
      .map(t => t.get({ plain: true }))
      .reduce((ac, c) => {
        ac[c.id] = c;
        return ac;
      }, {});
    console.log(pokemonTypeDict);
    const pokemons = pokemonsData
      .map((p) => p.get({ plain: true }))
      .filter((p) => p.pokemon_type.split(',').includes(req.params.id))
      .map((p) => {
        return {
          ...p,
          pokemonType: p.pokemon_type.split(',').map(t => pokemonTypeDict[t]),
          strongType: p.strong_type.split(',').map(t => pokemonTypeDict[t]),
          weakType: p.weak_type.split(',').map(t => pokemonTypeDict[t]),
        };
      });
    res.render('search-by-type', { pokemons, pokemonByType });
    console.table(pokemons);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;


const router = require('express').Router();
const { Pokemon, Type } = require('../models');

// The `/api/pokemons` endpoint

// get all pokemons
router.get('/', async (req, res) => {
  try {
    const pokemonsData = await Pokemon.findAll({
      include: [{ model: Type }]
    });
    console.log(pokemonsData);
    return res.json(pokemonsData);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

// get one pokemon
router.get('/:id', async (req, res) => {

  Pokemon.findOne({
    include: { model: Type },
    where: {
      id: req.params.id,
    }
  }).then((pokemonData) => {
    console.log(pokemonData);
    return res.json(pokemonData);
  }).catch((err) => {
    console.log(err);
    return res.json(err);
  });
});
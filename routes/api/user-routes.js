const router = require('express').Router();
const { Pokemon, Type } = require('../../models');


// Get All Pokemons
router.get('/', async (req, res) => {
    try {
        const pokemonData = await pokemonData.findAll({
            include: [{ model: Type }]
        });
        console.log(pokemonData)
        return res.json(pokemonData);
    }
    catch (err) {
        console.log(err)
        return res.json(err)
    }
});

// Get One Pokemons
router.get('/:id', async (res, res) => {

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


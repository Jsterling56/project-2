const router = require('express').Router();
const { Pokemon, Type } = require('../../models');


// Get All Pokemons
router.get('/', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll({
      include: [{ model: Type }]
    });
    console.log(pokemonData);
    return res.json(pokemonData);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

// Get One Pokemons
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

// Add Pokemon to Favorites
router.post('/:id/favorite', async (req, res) => {
  try {
      // const userId = req.user.id; // Assuming you have the user ID available in the request object.
      // const pokemonId = req.params.id;

      // Save the userId and pokemonId in the "Favorites" table.
      // Make sure to handle duplicates (if a user adds the same Pokémon multiple times).

      return res.json({ message: 'Added to favorites successfully!' });
  } catch (err) {
      console.log(err);
      return res.json(err);
  }
});

// Remove Pokemon from Favorites
router.delete('/:id/favorite', async (req, res) => {
  try {
      // const userId = req.user.id; // Assuming you have the user ID available in the request object.
      // const pokemonId = req.params.id;

      // Remove the record from the "Favorites" table where userId and pokemonId match.

      return res.json({ message: 'Removed from favorites successfully!' });
  } catch (err) {
      console.log(err);
      return res.json(err);
  }
});



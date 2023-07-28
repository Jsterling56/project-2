const router = require('express').Router();
const pokemonRoutes = require('./pokemon-routes');
const typeRoutes = require('./type-routes');
const userRoutes = require('./user-routes');

router.use('/pokemons', pokemonRoutes);
router.use('/types', typeRoutes);
router.use('/user', userRoutes);

module.exports = router;
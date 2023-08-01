const { pokemonType } = require('../models');

const typeData = [
  {
    'id': 0,
    'type_name': 'normal'
  },
  {
    'id': 1,
    'type_name': 'fire'
  },
  {
    'id': 2,
    'type_name': 'water'
  },
  {
    'id': 3,
    'type_name': 'electric'
  },
  {
    'id': 4,
    'type_name': 'grass'
  },
  {
    'id': 5,
    'type_name': 'ice'
  },
  {
    'id': 6,
    'type_name': 'fighting'
  },
  {
    'id': 7,
    'type_name': 'poison'
  },
  {
    'id': 8,
    'type_name': 'ground'
  },
  {
    'id': 9,
    'type_name': 'flying'
  },
  {
    'id': 10,
    'type_name': 'psychic'
  },
  {
    'id': 11,
    'type_name': 'bug'
  },
  {
    'id': 12,
    'type_name': 'rock'
  },
  {
    'id': 13,
    'type_name': 'ghost'
  },
  {
    'id': 14,
    'type_name': 'dragon'
  },
  {
    'id': 15,
    'type_name': 'dark'
  },
  {
    'id': 16,
    'type_name': 'steel'
  },
  {
    'id': 17,
    'type_name': 'fairy'
  }
];

const seedTypes = () => pokemonType.bulkCreate(typeData);
module.exports = seedTypes;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Pokemons extends Model { }

Pokemons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pokemon_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_type: {
      type: DataTypes.STRING,
      allowNull: true,
      // references: {
      //   model: 'pokemonType',
      //   key: 'id',
      // },
    },
    strong_type: {
      type: DataTypes.STRING,
      allowNull: true,
      // references: {
      //   model: 'pokemonType',
      //   key: 'id',
      // },
    },
    weak_type: {
      type: DataTypes.STRING,
      allowNull: true,
      // references: {
      //   model: 'pokemonType',
      //   key: 'id',
      // },
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon',
  }
);

module.exports = Pokemons;
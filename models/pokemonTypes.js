const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class pokemonTypes extends Model { }

pokemonTypes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemonType',
  }
);

module.exports = pokemonTypes;
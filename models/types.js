const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class types extends Model { }

types.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,

            autoIncrement: true
        },
        type_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'type',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'types',
    }
);

module.exports = types;
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {};

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        data: {
            types: DataTypes.BLOB("long"),
            notEmpty: true,
        },
        location_id: {
            type: DataTypes.STRING,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                id: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'image'
    }
);

module.exports = Image;
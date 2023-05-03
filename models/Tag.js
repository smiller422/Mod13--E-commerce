const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

const tag = {
  id: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  
  tag_name: {
    type: DataTypes.STRING
  },
};

const settings = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "tag",
};

Tag.init(tag, settings);

module.exports = Tag;



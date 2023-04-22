const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

const tag = {
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
    },
  },
  tag_name: {},
};

const settings = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product_tag",
};

module.exports = Tag;



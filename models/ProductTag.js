const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

const columns = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tag", key: "id"
    },
  },
};

const settings = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product_tag",
};

ProductTag.init(columns, settings);

module.exports = ProductTag;

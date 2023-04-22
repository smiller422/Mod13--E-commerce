const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

const columns = {
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
    },
  },
  column_name: {},
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

'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    price: {
      type: DataTypes.INTEGER ,
      allowNull: {
        args: true
      }
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: true
      }
    },
    barometer: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    moreDetails: {
      type: DataTypes.TEXT,
      allowNull: {
        args: true
      }
    },
  }, {});
  items.associate = function(models) {
    // associations can be defined here
  };
  return items;
};

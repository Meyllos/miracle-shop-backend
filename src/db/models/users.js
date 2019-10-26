'use strict';
import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: {
        args: false,
        message: 'Please enter your email'
      }
    },
    bio: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    hash: {
      allowNull: {
        args: true
      },
      type: DataTypes.STRING
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.hash = await bcrypt.hashSync(user.hash, 8);
      },
    },
    instanceMethods: {
      async validatePassword(hash) {
        return await bcrypt.compareSync(hash, this.password);
      }
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
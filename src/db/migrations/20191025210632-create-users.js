'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
          type: Sequelize.STRING,
          allowNull: true
      },
      lastname: {
          type: Sequelize.STRING,
          allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      bio: {
        type: Sequelize.STRING
      },
      hash: {
        allowNull: true,
        type: Sequelize.STRING
      },
      role: {
          type: Sequelize.STRING,
          defaultValue: "normal"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
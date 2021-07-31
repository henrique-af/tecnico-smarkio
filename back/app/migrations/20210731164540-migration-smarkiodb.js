'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('smarkiodb', {
      comments: {
        type: Sequelize.STRING
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('smarkiodb');
  }
};

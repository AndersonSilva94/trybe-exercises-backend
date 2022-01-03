'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'J.K. Rowling',
        pageQuantity: 255,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Divergente',
        author: 'Veronica Roth',
        pageQuantity: 487,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {})
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Aurangabad Airport',
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Pune International Airport',
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'D B Patil International Airport',
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Chhatrapati Shivaji Maharaj Domestic Airport',
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Shirdi International Airport',
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

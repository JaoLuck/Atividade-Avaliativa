"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Products", "categoryId", {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: "CASCADE",
      references: {
        model: "Categories",
        key: "id",
        as: "categoryId",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Products", "categoryId");
  },
};

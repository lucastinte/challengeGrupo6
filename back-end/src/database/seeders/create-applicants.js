"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("professions", [
      { name: "Abogado" },
      { name: "Arquitecto" },
      { name: "Botánico" },
      { name: "Computista" },
      { name: "Economista" },
      { name: "Técnico de sonido" },
      { name: "Profesor" },
      { name: "Linguista" },
    ]);

    await queryInterface.bulkInsert("genders", [
      { name: "Masculino" },
      { name: "Femenino" },
    ]);

    await queryInterface.bulkInsert("applicants", [
      {
        dni: "1111111111",
        name: "Gloria",
        lastName: "Medina",
        email: "gloria@example.com",
        phone: "123456789",
        linkedinProfile: "gloria_linkedin",
        birthDate: "1990-01-01",
        genderId: 2,
        image: "./src/images/foto1.jpg",
        professionId: 1,
      },
      {
        dni: "2222222222",
        name: "Daniel",
        lastName: "Fuentes",
        email: "daniel@example.com",
        phone: "987654321",
        linkedinProfile: "daniel_linkedin",
        birthDate: "1985-05-05",
        genderId: 1,
        image: "./src/images/foto2.jpg",
        professionId: 2,
      },
      {
        dni: "333333333",
        name: "Tim",
        lastName: "Turner",
        email: "tim@example.com",
        phone: "555555555",
        linkedinProfile: "tim_linkedin",
        birthDate: "1980-12-12",
        genderId: 1,
        image: "./src/images/foto3.jpg",
        professionId: 3,
      },
      {
        dni: "4444444444",
        name: "Rocio",
        lastName: "Carle",
        email: "rocio@example.com",
        phone: "666666666",
        linkedinProfile: "rocio_linkedin",
        birthDate: "1992-08-15",
        genderId: 2,
        image: "./src/images/foto4.jpg",
        professionId: 4,
      },
      {
        dni: "5555555555",
        name: "Victor",
        lastName: "Fuentes",
        email: "victor@example.com",
        phone: "666666666",
        linkedinProfile: "victor_linkedin",
        birthDate: "1998-08-15",
        genderId: 1,
        image: "./src/images/foto5.jpg",
        professionId: 5,
      },
      {
        dni: "6666666666",
        name: "Luis",
        lastName: "Fuentes",
        email: "luis@example.com",
        phone: "333333333",
        linkedinProfile: "luis_linkedin",
        birthDate: "1975-08-15",
        genderId: 1,
        image: "./src/images/foto6.jpg",
        professionId: 6,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("applicants", null, {});
    await queryInterface.bulkDelete("genders", null, {});
    await queryInterface.bulkDelete("professions", null, {});
  },
};

const { Applicant, Gender, Profession } = require("../../database/models");

const apiController = {
  professions: async (req, res) => {
    try {
      const professions = await Profession.findAll();
      const nameOfProfession = professions.map((profession) => {
        return profession.name;
      });
      const response = {
        meta: {
          status: 200,
          message: "Success",
          length: nameOfProfession.length,
        },
        data: {
          professions: nameOfProfession,
        },
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  applicants: async (req, res) => {
    try {
      const applicants = await Applicant.findAll({
        include: [
          { model: Gender, as: "gender", attributes: ["name"] },
          { model: Profession, as: "profession", attributes: ["name"] },
        ],
        attributes: {
          exclude: [
            "id",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "professionId",
            "genderId",
          ],
        },
      });

      const response = {
        meta: {
          status: 200,
          message: "Success",
        },
        data: {
          applicants: applicants,
        },
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = apiController;

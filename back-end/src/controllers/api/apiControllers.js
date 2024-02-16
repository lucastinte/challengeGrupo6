const { Op } = require("sequelize");
const { Applicant, Gender, Profession, Sequelize } = require("../../database/models");

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
  searchApplicantsByProfession: async (req, res) => {
try {
  const {searchTerm}=req.body;
  const profession =await Profession.findAll({
    where:{
      name:{
        [Op.like]:`%${searchTerm}`
      }
    },
    include: [
      {
        model: Applicant,
        as: 'applicants',
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt", "id"] },
      }
    ],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt","id"] },
  });
  
  if (!profession) {
    return res.status(404).json({ message: "Profession not found" });
  }

  const response = {
    meta: {
      status: 200,
      message: "Success",
      profession: profession,
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

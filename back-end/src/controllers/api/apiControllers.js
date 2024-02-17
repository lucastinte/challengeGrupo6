const { Op } = require("sequelize");
const { Applicant, Gender, Profession, Sequelize } = require("../../database/models");

const apiController = {
  professions: async (req, res) => {
    try {
      const professions = await Profession.findAll();
     
      const response = {
        meta: {
          status: 200,
          message: "Success",
        
        },
        data: {
          professions: professions,
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
createApplicant: async (req, res) => {
  try {
    const { dni, name, lastName, email, phone, linkedinProfile, birthDate, image, professionId, genderId } = req.body;

    // Crear el nuevo candidato en la base de datos
    const newApplicant = await Applicant.create({
      dni,
      name,
      lastName,
      email,
      phone,
      linkedinProfile,
      birthDate,
      image,
      professionId,
      genderId
    });

    // Devolver la respuesta con el nuevo candidato creado
    res.status(201).json({
      status: 201,
      message: "Applicant created successfully",
      data: newApplicant
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
},
deleteApplicant:async(req,res)=>{
  const {id}=req.params;
  try {
    const applicant=await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({message:"Applicant not found"})
    }
    await applicant.destroy();
    return res.status(200).json({ message: "Candidate deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
},
updateApplicant:async(req,res)=>{
  const {id}=req.params;
    const newData=req.body;
  try {
    const applicant=await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ message: "applicant not found" });
    }
    await applicant.update(newData);

      return res.status(200).json({ message: "applicant updated successfully", applicant });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
    
  }
}
};

module.exports = apiController;

const db = require("../../database/models");

const apiController = {
  profesions: async (req, res) => { // Marcar la función como async
    try {
      // Buscar todas las profesiones
      const profesiones = await db.Profesion.findAll();

      // Extraer solo los nombres de las profesiones
      const nombresProfesiones = profesiones.map((profesion) => {
        return profesion.nombre;
      });

      // Devolver los nombres de las profesiones como un JSON
      res.status(200).json({ profesiones: nombresProfesiones });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
  candidates: async (req, res) => { 
    try {
      const aspirantes = await db.Aspirante.findAll({
        include: [
          { model: db.Sexo, as: 'sexo' },
          { model: db.Profesion, as: 'profesion' }
        ]
      });

      res.status(200).json({ aspirantes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

};

module.exports = apiController;

module.exports = (sequelize, DataTypes) => {
    const Aspirante = sequelize.define(
      "Aspirante",
      {
        dni: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        apellido: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telefono: {
          type: DataTypes.STRING,
        },
        perfil_linkedin: {
          type: DataTypes.STRING,
        },
        fecha_nacimiento: {
          type: DataTypes.DATE,
        },
        id_sexo: {
          type: DataTypes.INTEGER,
        },
        imagen: {
          type: DataTypes.STRING,
        },
        id_profesion: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: "aspirantes",
        timestamps: false,
      }
    );
  
    Aspirante.associate = (models) => {
      Aspirante.belongsTo(models.Sexo, {
        foreignKey: "id_sexo",
        as: "sexo"
      });
      Aspirante.belongsTo(models.Profesion, {
        foreignKey: "id_profesion",
        as:"profesion"
      });
    };
  
    return Aspirante;
  };
  
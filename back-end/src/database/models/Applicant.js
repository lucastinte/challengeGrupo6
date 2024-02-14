module.exports = (sequelize, DataTypes) => {
  const Applicant = sequelize.define(
    "Applicant",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dni: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedinProfile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "applicants",
      paranoid: true,
      timestamps: true,
    }
  );

  Applicant.associate = (models) => {
    Applicant.belongsTo(models.Profession, {
      foreignKey: "professionId",
      as: "profession",
    });
    Applicant.belongsTo(models.Gender, {
      foreignKey: "genderId",
      as: "gender",
    });
  };
  return Applicant;
};

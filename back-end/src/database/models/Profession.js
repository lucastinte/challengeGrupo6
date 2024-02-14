module.exports = (sequelize, DataTypes) => {
  const Profession = sequelize.define(
    "Profession",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "professions",
      paranoid: true,
      timestamps: true,
    }
  );
  Profession.associate = (models) => {
    Profession.hasMany(models.Applicant, {
      foreignKey: "professionId",
      as: "applicants",
    });
  };
  return Profession;
};

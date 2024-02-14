module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    "Gender",
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
      tableName: "genders",
      paranoid: true,
      timestamps: true,
    }
  );

  Gender.associate = (models) => {
    Gender.hasMany(models.Applicant, {
      foreignKey: "genderId",
      as: "applicants",
    });
  };
  return Gender;
};

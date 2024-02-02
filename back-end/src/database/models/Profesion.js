module.exports = (sequelize, DataTypes) => {
    const Profesion = sequelize.define(
      "Profesion",
      {
        id_profesion: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "profesion",
        timestamps: false,
      }
    );
  
    return Profesion;
  };
  
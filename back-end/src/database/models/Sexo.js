module.exports = (sequelize, DataTypes) => {
    const Sexo = sequelize.define(
      "Sexo",
      {
        id_sexo: {
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
        tableName: "sexo",
        timestamps: false,
      }
    );
  
    return Sexo;
  };
  
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const New = sequelize.define(
    "New",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      idTweets: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categori: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return New;
};

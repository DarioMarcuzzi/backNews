const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Tweet = sequelize.define(
    "Tweet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      idTweets: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Tweet;
};
